#!/usr/bin/env node
// server.mjs — o servidor do Painel DutyX. Node puro, zero dependência.
//
// Rodar:  npm run painel   (ou: node painel/server.mjs)
// Abre:   http://localhost:3939  (só no SEU PC — bind em 127.0.0.1, nunca sai da máquina)
//
// Regra de ouro da arquitetura: o painel NÃO fala com nenhuma IA.
// Ele lê e escreve os MESMOS arquivos que o Claude Code lê (_contexto/, saidas/, .env).
// A ponte é o filesystem.

import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync, watch, writeFileSync, appendFileSync,
} from 'node:fs';
import { basename, extname, join, normalize, resolve, sep } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checarTudo, salvarEstado, lerConfig, gerarArsenalMd, lerEnv, raiz } from '../scripts/checar_arsenal.mjs';

const pastaPainel = dirname(fileURLToPath(import.meta.url));
const PORTA_INICIAL = 3939;

// ---------- utilidades ----------

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8', '.md': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf', '.ico': 'image/x-icon',
};

function json(res, status, dados) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(dados));
}
function erro(res, status, msg) { json(res, status, { erro: msg }); }

function lerCorpo(req) {
  return new Promise((ok, falha) => {
    let corpo = '';
    req.on('data', (c) => {
      corpo += c;
      if (corpo.length > 1_000_000) { falha(new Error('corpo grande demais')); req.destroy(); }
    });
    req.on('end', () => { try { ok(corpo ? JSON.parse(corpo) : {}); } catch { falha(new Error('JSON inválido')); } });
    req.on('error', falha);
  });
}

// caminho seguro: resolve e garante que ficou DENTRO da base (sem ../ escapando)
function caminhoSeguro(base, rel) {
  const alvo = resolve(base, normalize(rel).replace(/^([/\\])+/, ''));
  if (alvo !== base && !alvo.startsWith(base + sep)) return null;
  return alvo;
}

function servirArquivo(res, caminho) {
  try {
    const conteudo = readFileSync(caminho);
    res.writeHead(200, { 'Content-Type': MIME[extname(caminho).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(conteudo);
  } catch {
    erro(res, 404, 'Arquivo não encontrado.');
  }
}

// ---------- dados: frentes (parse do _catalogo.md + _aprenda/) ----------

function listaFrentes() {
  // frente = tem lição em _aprenda/<id>.md (a fonte mais confiável da verdade)
  const aprenda = existsSync(join(raiz, '_aprenda'))
    ? readdirSync(join(raiz, '_aprenda')).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
    : [];

  // enriquece com as tabelas do _catalogo.md (entrega + quando chamar)
  const meta = {};
  try {
    const catalogo = readFileSync(join(raiz, '_catalogo.md'), 'utf8');
    for (const linha of catalogo.split(/\r?\n/)) {
      if (!linha.trim().startsWith('|')) continue;
      const celulas = linha.split('|').map((c) => c.trim()).filter(Boolean);
      const idx = celulas.findIndex((c) => /`\/([a-z0-9-]+)`/.test(c));
      if (idx === -1) continue;
      const id = celulas[idx].match(/`\/([a-z0-9-]+)`/)[1];
      if (!aprenda.includes(id)) continue;
      const nome = idx > 0 ? celulas[0].replace(/[*↳🆕]/g, '').trim() : id;
      meta[id] = { nome: nome || id, entrega: celulas[idx + 1] || '', quando: celulas[celulas.length - 1] || '' };
    }
  } catch { /* sem catálogo, segue só com _aprenda */ }

  return aprenda.map((id) => {
    // primeiro parágrafo "de verdade" da lição (pula título, citações e linhas vazias)
    let oque = '';
    try {
      const licao = readFileSync(join(raiz, '_aprenda', `${id}.md`), 'utf8');
      const blocos = licao.split(/\r?\n\r?\n/);
      for (const b of blocos) {
        const t = b.trim();
        if (!t || t.startsWith('#') || t.startsWith('>') || t.startsWith('|') || t.startsWith('---')) continue;
        oque = t.replace(/\r?\n/g, ' ').replace(/\*\*/g, '');
        break;
      }
    } catch { /* lição ilegível não derruba a lista */ }
    return {
      id,
      comando: `/${id}`,
      nome: meta[id]?.nome || id.replace(/-/g, ' '),
      entrega: meta[id]?.entrega || '',
      quando: meta[id]?.quando || '',
      oque,
    };
  });
}

// ---------- dados: "Hoje" (últimas entradas do historico.md) ----------

function lerHoje() {
  const caminho = join(raiz, '_contexto', 'historico.md');
  if (!existsSync(caminho)) return { entradas: [], vazio: true };
  const texto = readFileSync(caminho, 'utf8');
  // só o que vem depois do primeiro traço --- (antes é o cabeçalho com o exemplo)
  const corte = texto.indexOf('\n---');
  const corpo = corte === -1 ? texto : texto.slice(corte + 4);
  const entradas = [];
  const re = /^>?\s*###\s+(.+)$/gm;
  let m;
  const marcas = [];
  while ((m = re.exec(corpo)) !== null) marcas.push({ titulo: m[1].trim(), inicio: m.index + m[0].length });
  for (let i = 0; i < marcas.length && entradas.length < 2; i++) {
    const fim = i + 1 < marcas.length ? corpo.indexOf('###', marcas[i].inicio) : corpo.length;
    const trecho = corpo.slice(marcas[i].inicio, fim === -1 ? corpo.length : fim)
      .split(/\r?\n/).map((l) => l.replace(/^>\s?/, '').trim()).filter(Boolean)
      .filter((l) => !l.startsWith('###')).join('\n').trim();
    const proximo = trecho.match(/pr[óo]ximo passo:?\s*(.+)/i);
    entradas.push({ titulo: marcas[i].titulo, corpo: trecho, proximoPasso: proximo ? proximo[1].trim() : null });
  }
  return { entradas, vazio: entradas.length === 0 };
}

// ---------- dados: saídas ----------

function listaSaidas() {
  const base = join(raiz, 'saidas');
  const itens = [];
  function anda(pasta, rel, nivel) {
    if (nivel > 4 || !existsSync(pasta)) return;
    let filhos;
    try { filhos = readdirSync(pasta, { withFileTypes: true }); } catch { return; }
    for (const f of filhos) {
      if (f.name.startsWith('.')) continue;
      const abs = join(pasta, f.name);
      const r = rel ? `${rel}/${f.name}` : f.name;
      if (f.isDirectory()) anda(abs, r, nivel + 1);
      else {
        try {
          const st = statSync(abs);
          itens.push({ rel: r, nome: f.name, pasta: rel || '(raiz)', ext: extname(f.name).toLowerCase(), mtime: st.mtimeMs, tamanho: st.size });
        } catch { /* arquivo sumiu no meio do caminho */ }
      }
    }
  }
  anda(base, '', 0);
  itens.sort((a, b) => b.mtime - a.mtime);
  return itens.slice(0, 300);
}

// ---------- ações: .env / .mcp.json / referências / memória / toggle ----------

function salvarEnvChave(chave, valor) {
  if (!/^[A-Z][A-Z0-9_]{1,60}$/i.test(chave)) throw new Error('Nome de chave inválido (use só letras, números e _).');
  if (/[\r\n]/.test(valor) || valor.length > 500) throw new Error('Valor inválido (uma linha só, até 500 caracteres).');
  const caminho = join(raiz, '.env');
  let linhas = existsSync(caminho) ? readFileSync(caminho, 'utf8').split(/\r?\n/) : [];
  const reLinha = new RegExp(`^\\s*${chave}\\s*=`);
  let trocou = false;
  linhas = linhas.map((l) => (reLinha.test(l) ? (trocou = true, `${chave}=${valor}`) : l));
  if (!trocou) {
    while (linhas.length && linhas[linhas.length - 1] === '') linhas.pop();
    linhas.push(`${chave}=${valor}`);
  }
  writeFileSync(caminho, linhas.join('\n') + '\n', 'utf8');
}

function adicionarMcp(servidor, definicao) {
  if (!/^[a-z0-9_-]{1,50}$/i.test(servidor)) throw new Error('Nome de servidor MCP inválido.');
  const caminho = join(raiz, '.mcp.json');
  const atual = existsSync(caminho) ? JSON.parse(readFileSync(caminho, 'utf8')) : { mcpServers: {} };
  atual.mcpServers = atual.mcpServers || {};
  let def = definicao;
  if (!def) {
    const template = JSON.parse(readFileSync(join(raiz, 'setup', 'mcp.template.json'), 'utf8'));
    def = template.mcpServers?.[servidor];
  }
  if (!def || typeof def !== 'object') throw new Error('Definição do servidor não encontrada (nem no pedido, nem no template).');
  atual.mcpServers[servidor] = def; // merge: só mexe nessa entrada, preserva o resto
  writeFileSync(caminho, JSON.stringify(atual, null, 2) + '\n', 'utf8');
}

function anexarReferencia(frente, url, nota) {
  if (!/^[a-z0-9-]{1,40}$/.test(frente)) throw new Error('Frente inválida.');
  if (!/^https?:\/\/\S+$/i.test(url || '') && !(url === '' && nota)) throw new Error('Cola um link começando com http(s):// (ou só uma nota).');
  const pasta = join(raiz, '_contexto', 'referencias');
  mkdirSync(pasta, { recursive: true });
  const caminho = join(pasta, `${frente}.md`);
  if (!existsSync(caminho)) {
    writeFileSync(caminho, `# Referências — ${frente} (via painel)\n\n> A pessoa colou essas referências no painel. Use como norte visual/de estilo quando construir nessa frente.\n\n`, 'utf8');
  }
  const notaLimpa = String(nota || '').replace(/[\r\n]+/g, ' ').slice(0, 500);
  const linha = url ? `- ${url}${notaLimpa ? ` — "${notaLimpa}"` : ''}\n` : `- (nota) "${notaLimpa}"\n`;
  appendFileSync(caminho, linha, 'utf8');
}

function salvarMemoria(arquivo, conteudo) {
  if (!/^[a-z0-9._-]+\.md$/i.test(arquivo) || arquivo.includes('..')) throw new Error('Só dá pra editar arquivos .md do _contexto/.');
  const caminho = join(raiz, '_contexto', arquivo);
  if (!existsSync(caminho)) throw new Error('Esse arquivo não existe no _contexto/.');
  if (typeof conteudo !== 'string' || conteudo.length > 500_000) throw new Error('Conteúdo inválido.');
  // backup automático ANTES de salvar — sempre
  const pastaBk = join(raiz, '_contexto', '.backup');
  mkdirSync(pastaBk, { recursive: true });
  const carimbo = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  writeFileSync(join(pastaBk, `${arquivo}.${carimbo}.bak`), readFileSync(caminho), 'utf8');
  writeFileSync(caminho, conteudo, 'utf8');
}

// arquivos que o painel pode LER (nunca .env, nunca .mcp.json, nunca fora da lista)
function lerArquivoPermitido(rel) {
  const limpo = normalize(rel).replace(/\\/g, '/');
  const permitido =
    /^_contexto\/[a-z0-9._-]+\.md$/i.test(limpo) ||
    /^_contexto\/referencias\/[a-z0-9._-]+\.md$/i.test(limpo) ||
    /^_aprenda\/[a-z0-9._-]+\.md$/i.test(limpo) ||
    /^setup\/[a-z0-9._-]+\.md$/i.test(limpo) ||
    ['_catalogo.md', 'COMECE-AQUI.md', 'CONCEITO.md', 'SEGURANCA.md', 'README.md'].includes(limpo);
  if (!permitido) throw new Error('Esse arquivo não é visível pelo painel.');
  const abs = caminhoSeguro(resolve(raiz), limpo);
  if (!abs || !existsSync(abs)) throw new Error('Arquivo não encontrado.');
  return readFileSync(abs, 'utf8');
}

// chaves do .env presentes, SEMPRE mascaradas (nunca devolve o valor)
function chavesEnvMascaradas() {
  const env = lerEnv();
  const out = {};
  for (const [k, v] of Object.entries(env)) out[k] = v ? `••••${String(v).slice(-4)}` : '';
  return out;
}

// ---------- SSE (o painel atualiza sozinho quando o Claude gera algo) ----------

const clientesSse = new Set();
function avisarClientes(origem) {
  const msg = `data: ${JSON.stringify({ tipo: 'mudanca', origem, em: Date.now() })}\n\n`;
  for (const res of clientesSse) { try { res.write(msg); } catch { clientesSse.delete(res); } }
}
let timerAviso = null;
function avisarDebounced(origem) {
  clearTimeout(timerAviso);
  timerAviso = setTimeout(() => avisarClientes(origem), 400);
}
function ligarVigias() {
  for (const pasta of ['_contexto', 'saidas']) {
    const abs = join(raiz, pasta);
    try { mkdirSync(abs, { recursive: true }); } catch { /* já existe */ }
    try {
      watch(abs, { recursive: true }, (_ev, nome) => {
        if (nome && String(nome).includes('.backup')) return;
        avisarDebounced(pasta);
      });
    } catch {
      try { watch(abs, (_ev) => avisarDebounced(pasta)); } catch { /* sem vigia, o botão atualizar resolve */ }
    }
  }
}

// ---------- rotas ----------

async function tratar(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const rota = url.pathname;

  try {
    // ---- API ----
    if (rota === '/api/estado' && req.method === 'GET') {
      const estado = existsSync(join(pastaPainel, 'estado.json'))
        ? JSON.parse(readFileSync(join(pastaPainel, 'estado.json'), 'utf8'))
        : salvarEstado(checarTudo());
      return json(res, 200, { estado, config: lerConfig(), envChaves: chavesEnvMascaradas() });
    }
    if (rota === '/api/sondar' && req.method === 'POST') {
      const estado = salvarEstado(checarTudo());
      avisarDebounced('sonda');
      return json(res, 200, { estado });
    }
    if (rota === '/api/env' && req.method === 'POST') {
      const { chave, valor } = await lerCorpo(req);
      salvarEnvChave(String(chave || ''), String(valor || ''));
      const estado = salvarEstado(checarTudo());
      return json(res, 200, { ok: true, estado });
    }
    if (rota === '/api/mcp' && req.method === 'POST') {
      const { servidor, definicao } = await lerCorpo(req);
      adicionarMcp(String(servidor || ''), definicao);
      const estado = salvarEstado(checarTudo());
      return json(res, 200, { ok: true, estado, aviso: 'Reinicia o Claude Code pra ele carregar o MCP novo.' });
    }
    if (rota === '/api/toggle' && req.method === 'POST') {
      const { id, status } = await lerCorpo(req);
      const cfg = lerConfig();
      const item = cfg.itens.find((i) => i.id === id);
      if (!item || !item.deteccao?.manual) return erro(res, 400, 'Esse item não é de marcação manual.');
      if (!['manual-ok', 'faltando'].includes(status)) return erro(res, 400, 'Status inválido.');
      const estado = existsSync(join(pastaPainel, 'estado.json'))
        ? JSON.parse(readFileSync(join(pastaPainel, 'estado.json'), 'utf8'))
        : checarTudo();
      estado.itens[id] = status;
      estado.geradoEm = new Date().toISOString();
      salvarEstado(estado);
      return json(res, 200, { ok: true, estado });
    }
    if (rota === '/api/hoje' && req.method === 'GET') return json(res, 200, lerHoje());
    if (rota === '/api/frentes' && req.method === 'GET') return json(res, 200, { frentes: listaFrentes() });
    if (rota === '/api/saidas' && req.method === 'GET') return json(res, 200, { saidas: listaSaidas() });
    if (rota === '/api/arquivo' && req.method === 'GET') {
      const rel = url.searchParams.get('p') || '';
      return json(res, 200, { texto: lerArquivoPermitido(rel) });
    }
    if (rota === '/api/referencia' && req.method === 'POST') {
      const { frente, url: link, nota } = await lerCorpo(req);
      anexarReferencia(String(frente || ''), String(link || ''), nota);
      avisarDebounced('referencias');
      return json(res, 200, { ok: true });
    }
    if (rota === '/api/memoria' && req.method === 'POST') {
      const { arquivo, conteudo } = await lerCorpo(req);
      salvarMemoria(String(arquivo || ''), conteudo);
      return json(res, 200, { ok: true, aviso: 'Salvo. Backup automático em _contexto/.backup/.' });
    }

    // ---- SSE ----
    if (rota === '/eventos') {
      res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', Connection: 'keep-alive' });
      res.write('data: {"tipo":"oi"}\n\n');
      clientesSse.add(res);
      req.on('close', () => clientesSse.delete(res));
      return;
    }

    // ---- páginas e arquivos ----
    if (rota === '/guia') return servirArquivo(res, join(raiz, 'GUIA.html'));
    if (rota.startsWith('/saida/')) {
      const abs = caminhoSeguro(resolve(raiz, 'saidas'), decodeURIComponent(rota.slice('/saida/'.length)));
      if (!abs) return erro(res, 400, 'Caminho inválido.');
      return servirArquivo(res, abs);
    }
    if (req.method === 'GET') {
      const rel = rota === '/' ? 'index.html' : decodeURIComponent(rota.slice(1));
      const abs = caminhoSeguro(resolve(pastaPainel), rel);
      if (abs && existsSync(abs) && statSync(abs).isFile()) return servirArquivo(res, abs);
      // rota desconhecida no modo SPA → devolve o app
      if (!rota.startsWith('/api/')) return servirArquivo(res, join(pastaPainel, 'index.html'));
    }
    return erro(res, 404, 'Rota não encontrada.');
  } catch (e) {
    return erro(res, 400, e.message || 'Deu algo errado — tenta de novo. Se persistir, fecha e roda `npm run painel` de novo.');
  }
}

// ---------- sobe o servidor (porta 3939, tenta as próximas se ocupada) ----------

function abrirNavegador(urlAbrir) {
  try {
    if (process.platform === 'win32') spawn('cmd', ['/c', 'start', '', urlAbrir], { stdio: 'ignore', detached: true }).unref();
    else if (process.platform === 'darwin') spawn('open', [urlAbrir], { stdio: 'ignore', detached: true }).unref();
    else spawn('xdg-open', [urlAbrir], { stdio: 'ignore', detached: true }).unref();
  } catch { /* sem navegador automático, o link tá no terminal */ }
}

function subir(porta, tentativas = 0) {
  const server = createServer(tratar);
  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE' && tentativas < 10) {
      console.log(`⚠️  A porta ${porta} tá ocupada — tentando a ${porta + 1}...`);
      subir(porta + 1, tentativas + 1);
    } else {
      console.error(`❌ Não consegui subir o painel: ${e.message}`);
      console.error('   Fecha outros programas que possam estar usando a porta e roda `npm run painel` de novo.');
      process.exit(1);
    }
  });
  server.listen(porta, '127.0.0.1', () => {
    const endereco = `http://localhost:${porta}`;
    try { salvarEstado(checarTudo()); } catch { /* sem sonda o painel ainda abre */ }
    ligarVigias();
    console.log('');
    console.log('  ██████  DutyX — Painel Visual');
    console.log(`  ✅ No ar: ${endereco}  (só no seu PC — nada sai daqui)`);
    console.log('  Pra fechar: Ctrl+C nessa janela.');
    console.log('');
    if (!process.argv.includes('--sem-navegador')) abrirNavegador(endereco);
  });
}

subir(PORTA_INICIAL);
