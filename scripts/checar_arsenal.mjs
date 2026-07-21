#!/usr/bin/env node
// checar_arsenal.mjs — a sonda do arsenal: descobre o que TÁ conectado de verdade nesse PC.
//
// Uso:        node scripts/checar_arsenal.mjs
// Saída:      painel/estado.json  (o painel lê daqui)
//             _contexto/arsenal.md (o agente lê no /abrir)
//
// Só usa módulos nativos do Node — sem npm install, sem dependência.
// O painel (painel/server.mjs) importa as funções daqui pra sondar ao vivo.

import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
export const raiz = join(aqui, '..'); // pasta do DutyX

const CAMINHOS = {
  config: join(raiz, 'painel', 'arsenal.config.json'),
  estado: join(raiz, 'painel', 'estado.json'),
  arsenalMd: join(raiz, '_contexto', 'arsenal.md'),
  env: join(raiz, '.env'),
  mcpProjeto: join(raiz, '.mcp.json'),
  mcpUsuario: join(homedir(), '.claude.json'),
  pastaWhisper: join(raiz, 'setup', 'whisper'),
};

// ---------- helpers ----------

function lerJsonSeguro(caminho) {
  try { return JSON.parse(readFileSync(caminho, 'utf8')); } catch { return null; }
}

// O comando existe no PATH? (mesma técnica do transcrever.mjs)
function existeNoPath(cmd) {
  const r = spawnSync(cmd, ['--help'], { stdio: 'ignore', windowsHide: true });
  return !r.error;
}

// Procura um arquivo por nome dentro de uma pasta (até 3 níveis)
function procuraArquivo(pasta, nomes, nivel = 0) {
  if (nivel > 3 || !existsSync(pasta)) return null;
  let itens;
  try { itens = readdirSync(pasta, { withFileTypes: true }); } catch { return null; }
  for (const item of itens) {
    if (item.isFile() && nomes.includes(item.name.toLowerCase())) return join(pasta, item.name);
  }
  for (const item of itens) {
    if (item.isDirectory()) {
      const achado = procuraArquivo(join(pasta, item.name), nomes, nivel + 1);
      if (achado) return achado;
    }
  }
  return null;
}

// Lê o .env como { CHAVE: valor } — parser simples de linha CHAVE=valor
export function lerEnv() {
  if (!existsSync(CAMINHOS.env)) return {};
  const out = {};
  for (const linha of readFileSync(CAMINHOS.env, 'utf8').split(/\r?\n/)) {
    const m = linha.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return out;
}

// Junta os servidores MCP visíveis: .mcp.json do projeto + ~/.claude.json (escopo user)
function listaMcps() {
  const nomes = new Set();
  const proj = lerJsonSeguro(CAMINHOS.mcpProjeto);
  if (proj?.mcpServers) for (const n of Object.keys(proj.mcpServers)) nomes.add(n.toLowerCase());
  const user = lerJsonSeguro(CAMINHOS.mcpUsuario);
  if (user?.mcpServers) for (const n of Object.keys(user.mcpServers)) nomes.add(n.toLowerCase());
  // o claude também guarda MCPs por projeto dentro do ~/.claude.json
  if (user?.projects) {
    for (const p of Object.values(user.projects)) {
      if (p?.mcpServers) for (const n of Object.keys(p.mcpServers)) nomes.add(n.toLowerCase());
    }
  }
  return nomes;
}

// Whisper conectado = executável + modelo .bin (mesma lógica do transcrever.mjs)
function whisperOk() {
  const envExe = process.env.DUTYX_WHISPER;
  const exe =
    (envExe && (existsSync(envExe) || existeNoPath(envExe)) && envExe) ||
    procuraArquivo(CAMINHOS.pastaWhisper, ['whisper-cli.exe', 'whisper-cli', 'main.exe']) ||
    (existeNoPath('whisper-cli') && 'whisper-cli') ||
    (existeNoPath('whisper-cpp') && 'whisper-cpp') ||
    null;
  if (!exe) return false;
  if (process.env.DUTYX_MODEL && existsSync(process.env.DUTYX_MODEL)) return true;
  if (!existsSync(CAMINHOS.pastaWhisper)) return false;
  try {
    return readdirSync(CAMINHOS.pastaWhisper).some((f) => f.startsWith('ggml-') && f.endsWith('.bin'));
  } catch { return false; }
}

// ---------- a sonda ----------

export function lerConfig() {
  const cfg = lerJsonSeguro(CAMINHOS.config);
  if (!cfg?.itens) throw new Error(`Não achei ${CAMINHOS.config} — o catálogo do arsenal.`);
  return cfg;
}

// status por item: "conectado" | "faltando" | "manual-ok"
// (manual-ok = a pessoa marcou na UI que ligou o conector no app do Claude)
export function checarTudo() {
  const cfg = lerConfig();
  const anterior = lerJsonSeguro(CAMINHOS.estado)?.itens || {};
  const env = lerEnv();
  const mcps = listaMcps();

  const itens = {};
  for (const item of cfg.itens) {
    const d = item.deteccao || {};
    let status = 'faltando';
    if (d.sempre) status = 'conectado';
    else if (d.env) status = env[d.env] ? 'conectado' : 'faltando';
    else if (d.lib) status = existsSync(join(raiz, 'node_modules', d.lib)) ? 'conectado' : 'faltando';
    else if (d.mcp) status = mcps.has(d.mcp.toLowerCase()) ? 'conectado' : 'faltando';
    else if (d.exe === 'whisper') status = whisperOk() ? 'conectado' : 'faltando';
    else if (d.exe) status = existeNoPath(d.exe) ? 'conectado' : 'faltando';
    else if (d.manual) status = anterior[item.id] === 'manual-ok' ? 'manual-ok' : 'faltando';
    itens[item.id] = status;
  }
  return { geradoEm: new Date().toISOString(), itens };
}

// Grava painel/estado.json + _contexto/arsenal.md (a ponte pro agente)
export function salvarEstado(estado) {
  mkdirSync(dirname(CAMINHOS.estado), { recursive: true });
  writeFileSync(CAMINHOS.estado, JSON.stringify(estado, null, 2) + '\n', 'utf8');
  gerarArsenalMd(estado);
  return estado;
}

export function gerarArsenalMd(estado) {
  const cfg = lerConfig();
  const data = new Date().toLocaleDateString('pt-BR');
  const ok = [], falta = [];
  for (const item of cfg.itens) {
    const st = estado.itens[item.id];
    const sufixo = item.custo === 'pago' ? ' (pago, opcional)' : item.opcional ? ' (opcional)' : '';
    if (st === 'conectado') ok.push(`${item.nome}`);
    else if (st === 'manual-ok') ok.push(`${item.nome} (conector do app, marcado pela pessoa)`);
    else falta.push(`${item.nome}${sufixo}`);
  }
  const md = [
    `# Arsenal (atualizado pelo painel em ${data})`,
    '',
    '> Gerado por `scripts/checar_arsenal.mjs` / painel. NÃO editar na mão — roda a sonda de novo.',
    '> Use isso pra saber o que dá pra oferecer no modo turbo sem perguntar de novo.',
    '',
    ok.length ? `✅ conectado: ${ok.join(', ')}` : '✅ conectado: (nada ainda)',
    falta.length ? `❌ faltando: ${falta.join(', ')}` : '❌ faltando: (nada — arsenal completo!)',
    '',
  ].join('\n');
  mkdirSync(dirname(CAMINHOS.arsenalMd), { recursive: true });
  writeFileSync(CAMINHOS.arsenalMd, md, 'utf8');
}

// ---------- CLI ----------

const rodandoDireto = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (rodandoDireto) {
  const estado = salvarEstado(checarTudo());
  const cfg = lerConfig();
  console.log('🔎 Arsenal do DutyX — o que a sonda achou nesse PC:\n');
  for (const item of cfg.itens) {
    const st = estado.itens[item.id];
    const icone = st === 'conectado' ? '✅' : st === 'manual-ok' ? '✅ (manual)' : item.custo === 'pago' ? '💰' : '❌';
    console.log(`  ${icone}  ${item.nome}${st === 'faltando' && item.opcional ? '  (opcional)' : ''}`);
  }
  console.log(`\n📝 Gravei painel/estado.json e _contexto/arsenal.md`);
}
