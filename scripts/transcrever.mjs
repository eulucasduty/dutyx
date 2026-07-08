#!/usr/bin/env node
// transcrever.mjs — transcreve vídeo/áudio no seu PC (ffmpeg + Whisper local). Grátis, offline, privado.
//
// Uso:         node scripts/transcrever.mjs "caminho/do/video.mp4"
// Diagnóstico: node scripts/transcrever.mjs --check
// Saída:       saidas/transcricoes/<nome>.txt
//
// Não instalou nada ainda? Roda /configurar no Claude que ele instala tudo pra você
// (guia: setup/whisper-local.md). Sem o Whisper, nada trava: cola a legenda no chat.
//
// Só usa módulos nativos do Node — sem npm install, sem dependência.

import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { basename, extname, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------- onde as coisas moram ----------
const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, '..');                       // pasta do DutyX
const pastaSaida = join(raiz, 'saidas', 'transcricoes');
const pastaWhisper = join(raiz, 'setup', 'whisper'); // onde o /configurar instala o whisper + modelo

const LINGUA = process.env.DUTYX_LANG || 'auto';     // detecta o idioma sozinho (reel em inglês funciona); force com DUTYX_LANG=pt
const EH_WINDOWS = process.platform === 'win32';

const FORMATOS = ['.mp4', '.mov', '.mkv', '.webm', '.avi', '.mp3', '.wav', '.m4a', '.aac', '.ogg', '.opus', '.flac'];

// ---------- helpers ----------

// O comando existe no PATH? (só detecta "não achei" — se ele rodar e reclamar, existe)
function existeNoPath(cmd) {
  const r = spawnSync(cmd, ['--help'], { stdio: 'ignore', windowsHide: true });
  return !r.error;
}

// Procura um arquivo por nome dentro de uma pasta (até 3 níveis — o zip da release às vezes cria subpasta)
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

// Acha o executável do whisper: variável de ambiente → setup/whisper/ → PATH (brew instala como whisper-cli)
function achaWhisper() {
  const env = process.env.DUTYX_WHISPER;
  if (env) {
    if (existsSync(env)) return env;
    // nome de comando sem caminho (ex: DUTYX_WHISPER=whisper-cli)? deixa o PATH resolver
    if (!env.includes('/') && !env.includes('\\') && existeNoPath(env)) return env;
  }
  const local = procuraArquivo(pastaWhisper, ['whisper-cli.exe', 'whisper-cli', 'main.exe']);
  if (local) return local;
  for (const nome of ['whisper-cli', 'whisper-cpp']) if (existeNoPath(nome)) return nome;
  return null;
}

// Acha o modelo (.bin): variável de ambiente → setup/whisper/ (prefere o small)
function achaModelo() {
  const env = process.env.DUTYX_MODEL;
  if (env && existsSync(env)) return env;
  if (!existsSync(pastaWhisper)) return null;
  let bins;
  try {
    bins = readdirSync(pastaWhisper).filter((f) => f.startsWith('ggml-') && f.endsWith('.bin'));
  } catch { return null; }
  if (bins.length === 0) return null;
  const small = bins.find((f) => f.includes('small'));
  return join(pastaWhisper, small || bins[0]);
}

const DICA_FFMPEG = EH_WINDOWS
  ? 'winget install --id Gyan.FFmpeg -e'
  : 'brew install ffmpeg';
const DICA_WHISPER = EH_WINDOWS
  ? 'baixar a release em https://github.com/ggml-org/whisper.cpp/releases (ver setup/whisper-local.md)'
  : 'brew install whisper-cpp';

function erro(linhas) {
  console.error('\n' + linhas.join('\n') + '\n');
  process.exit(1);
}

// ---------- modo diagnóstico: --check ----------
function diagnostico() {
  console.log('\n🩺 Diagnóstico da transcrição (Whisper local)\n');
  let tudoOk = true;

  if (existeNoPath('ffmpeg')) {
    console.log('  ✓ ffmpeg — encontrado (é ele que separa o áudio do vídeo)');
  } else {
    tudoOk = false;
    console.log('  ✗ ffmpeg — NÃO encontrado');
    console.log('      → roda /configurar no Claude que eu instalo pra você');
    console.log('      → ou na mão: ' + DICA_FFMPEG + '  (depois feche e reabra o terminal)');
  }

  const whisper = achaWhisper();
  if (whisper) {
    console.log('  ✓ Whisper — encontrado (' + whisper + ')');
  } else {
    tudoOk = false;
    console.log('  ✗ Whisper — NÃO encontrado');
    console.log('      → roda /configurar no Claude que eu instalo pra você');
    console.log('      → ou na mão: ' + DICA_WHISPER);
  }

  const modelo = achaModelo();
  if (modelo) {
    const mb = Math.round(statSync(modelo).size / 1024 / 1024);
    console.log('  ✓ Modelo — ' + basename(modelo) + ' (' + mb + ' MB)');
    if (mb < 50) {
      tudoOk = false;
      console.log('      ⚠ Esse arquivo tá pequeno demais — o download deve ter falhado no meio.');
      console.log('        Apaga ele e roda /configurar de novo (o ggml-small tem ~470 MB).');
    }
  } else {
    tudoOk = false;
    console.log('  ✗ Modelo — NÃO encontrado (é o "cérebro" do Whisper, baixa uma vez só)');
    console.log('      → roda /configurar no Claude que eu baixo pra você');
    console.log('      → ou na mão: baixa o ggml-small.bin de');
    console.log('        https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin');
    console.log('        e salva em setup/whisper/ (dentro da pasta do DutyX)');
  }

  console.log('');
  if (tudoOk) {
    console.log('  Tudo pronto! Usa assim: node scripts/transcrever.mjs "caminho/do/video.mp4"\n');
  } else {
    console.log('  Tem ✗ aí em cima? O caminho fácil é um só: roda /configurar no Claude e autoriza.');
    console.log('  Enquanto isso, nada trava — dá pra colar a legenda do vídeo direto no chat.\n');
    process.exit(1);
  }
}

// ---------- fluxo principal ----------
function main() {
  const args = process.argv.slice(2);

  if (args[0] === '--check' || args[0] === '-check' || args[0] === 'check') {
    diagnostico();
    return;
  }

  if (args.length === 0) {
    erro([
      'Uso:  node scripts/transcrever.mjs "caminho/do/video.mp4"',
      '      node scripts/transcrever.mjs --check   (confere se tá tudo instalado)',
      '',
      'Dica: caminho com espaço vai entre aspas — ou arrasta o arquivo pra dentro do terminal.',
    ]);
  }

  // Junta os argumentos e tira aspas coladas: cobre quem esqueceu as aspas num caminho com espaço
  // e quem colou o caminho com aspas do "Copiar como caminho" do Windows.
  const arquivo = args.join(' ').replace(/^["']+|["']+$/g, '').trim();

  if (!existsSync(arquivo)) {
    erro([
      '✗ Não achei esse arquivo: ' + arquivo,
      '',
      '  Como acertar o caminho:',
      '  • Caminho com espaço vai entre aspas: node scripts/transcrever.mjs "C:\\Meus Videos\\reel.mp4"',
      '  • No Windows: Shift + botão direito no arquivo → "Copiar como caminho" → cola aqui.',
      '  • Ou o jeito preguiçoso (funciona): arrasta o arquivo pra dentro da janela do terminal.',
    ]);
  }

  const ext = extname(arquivo).toLowerCase();
  if (!FORMATOS.includes(ext)) {
    erro([
      '✗ Formato "' + (ext || 'sem extensão') + '" não suportado.',
      '  Eu leio: ' + FORMATOS.map((f) => f.slice(1)).join(', ') + '.',
      '',
      '  → O jeito fácil: pede no Claude "converte esse arquivo pra mp4 pra mim".',
      '  → Ou na mão (com ffmpeg): ffmpeg -i "' + arquivo + '" "video.mp4"',
    ]);
  }

  if (!existeNoPath('ffmpeg')) {
    erro([
      '✗ Não achei o ffmpeg no seu computador (é ele que separa o áudio do vídeo).',
      '',
      '  → O jeito fácil: roda /configurar no Claude que eu instalo pra você.',
      '  → Ou na mão: ' + DICA_FFMPEG,
      '    Depois FECHA e reabre o terminal (ele só enxerga programa novo quando nasce de novo).',
    ]);
  }

  const whisper = achaWhisper();
  if (!whisper) {
    erro([
      '✗ Não achei o Whisper no seu computador (é ele que transforma fala em texto).',
      '',
      '  → O jeito fácil: roda /configurar no Claude que eu instalo pra você (grátis, uma vez só).',
      '  → Ou na mão: ' + DICA_WHISPER,
      '',
      '  Sem pressa: enquanto isso dá pra colar a legenda/fala do vídeo direto no chat.',
    ]);
  }

  const modelo = achaModelo();
  if (!modelo) {
    erro([
      '✗ Achei o Whisper, mas não achei o modelo (o "cérebro" dele, um arquivo .bin).',
      '',
      '  → O jeito fácil: roda /configurar no Claude que eu baixo pra você (~470 MB, uma vez só).',
      '  → Ou na mão: baixa https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin',
      '    e salva em setup/whisper/ (dentro da pasta do DutyX).',
    ]);
  }

  mkdirSync(pastaSaida, { recursive: true });
  const nome = basename(arquivo, ext).replace(/[^\w.-]+/g, '_') || 'transcricao';
  const wav = join(pastaSaida, nome + '.tmp.wav');
  let saidaBase = join(pastaSaida, nome);
  if (existsSync(saidaBase + '.txt')) {
    // já existe transcrição com esse nome — não sobrescreve em silêncio
    const marca = new Date().toISOString().slice(0, 16).replace(/[T:]/g, '-');
    saidaBase = join(pastaSaida, nome + '-' + marca);
    console.log('\n(já tinha um "' + nome + '.txt" aqui — guardando essa como "' + basename(saidaBase) + '.txt" pra não apagar a antiga)');
  }

  const limpaTemp = () => { try { rmSync(wav, { force: true }); } catch { /* se não der, paciência */ } };
  const ultimasLinhas = (e) =>
    (e.stderr ? e.stderr.toString() : '').trim().split('\n').slice(-2).join(' | ') || e.message;

  // 1/2 — extrai o áudio no formato que o Whisper entende (16 kHz mono)
  console.log('\n1/2 — extraindo o áudio com o ffmpeg...');
  try {
    execFileSync(
      'ffmpeg',
      ['-y', '-i', arquivo, '-vn', '-ar', '16000', '-ac', '1', '-c:a', 'pcm_s16le', wav],
      { stdio: ['ignore', 'ignore', 'pipe'], windowsHide: true }
    );
  } catch (e) {
    const detalhe = ultimasLinhas(e);
    limpaTemp();
    erro([
      '✗ O ffmpeg não conseguiu ler esse arquivo.',
      '  Normalmente é arquivo corrompido (download que falhou) ou um formato disfarçado de outro.',
      '',
      '  → Tenta baixar/exportar o vídeo de novo e rodar de novo.',
      '  → Se repetir, cola isso no Claude que eu resolvo: "' + detalhe + '"',
    ]);
  }

  // 2/2 — transcreve
  console.log('2/2 — transcrevendo com o Whisper (' + (LINGUA === 'auto' ? 'idioma automático' : LINGUA) + ')... (leva uns minutos, é normal)');
  try {
    execFileSync(
      whisper,
      ['-m', modelo, '-f', wav, '-l', LINGUA, '-otxt', '-of', saidaBase],
      { stdio: ['ignore', 'ignore', 'pipe'], windowsHide: true }
    );
  } catch (e) {
    const detalhe = ultimasLinhas(e);
    limpaTemp();
    erro([
      '✗ O Whisper travou no meio da transcrição.',
      '  Causa mais comum: modelo corrompido (download que parou no meio).',
      '',
      '  → Roda o diagnóstico: node scripts/transcrever.mjs --check',
      '  → Se o modelo aparecer pequeno demais, apaga ele e roda /configurar de novo.',
      '  → Persistiu? Cola isso no Claude: "' + detalhe + '"',
    ]);
  }
  limpaTemp(); // o .wav temporário já cumpriu o papel

  const txt = saidaBase + '.txt';
  if (!existsSync(txt)) {
    erro([
      '✗ O Whisper rodou mas não gerou o texto (raro).',
      '  → Roda: node scripts/transcrever.mjs --check   e me mostra o resultado no Claude.',
    ]);
  }

  console.log('\n✓ Transcrição pronta: ' + txt);
  console.log('  Agora volta no Claude e fala: "usa a transcrição ' + basename(txt) + '".\n');
}

main();
