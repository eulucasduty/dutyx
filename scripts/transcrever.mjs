// transcrever.mjs — transcreve um vídeo no seu PC (ffmpeg + Whisper local), em português.
// Uso:   node scripts/transcrever.mjs "caminho/do/video.mp4"
// Saída: um .txt com a fala, em saidas/transcricoes/
//
// PRÉ-REQUISITOS (modo turbo — ver setup/whisper-local.md):
//   - ffmpeg instalado e no PATH
//   - whisper.cpp (um executável) + um modelo .bin no seu PC
//
// CONFIGURA AQUI (ou via variáveis de ambiente DUTYX_WHISPER / DUTYX_MODEL):
const WHISPER = process.env.DUTYX_WHISPER || 'C:\\caminho\\para\\whisper-cli.exe';
const MODEL   = process.env.DUTYX_MODEL   || 'C:\\caminho\\para\\ggml-small.bin';

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { basename, extname, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, '..', 'saidas', 'transcricoes');

const video = process.argv[2];
if (!video) { console.error('Uso: node scripts/transcrever.mjs "caminho/do/video.mp4"'); process.exit(1); }
if (!existsSync(video)) { console.error('Vídeo não encontrado: ' + video); process.exit(1); }
if (!existsSync(WHISPER) || !existsSync(MODEL)) {
  console.error('Whisper/modelo não configurados. Edita WHISPER e MODEL no topo deste arquivo (ver setup/whisper-local.md).');
  console.error('No modo básico, é só colar a legenda/fala do vídeo no chat — não precisa disso.');
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

const nome = basename(video, extname(video)).replace(/[^\w.-]+/g, '_');
const wav = join(outDir, nome + '.wav');
const outBase = join(outDir, nome);

console.log('1/2 — extraindo áudio com ffmpeg...');
execFileSync('ffmpeg', ['-y', '-i', video, '-ar', '16000', '-ac', '1', '-c:a', 'pcm_s16le', wav], { stdio: 'inherit' });

console.log('2/2 — transcrevendo com Whisper (pt)...');
execFileSync(WHISPER, ['-m', MODEL, '-f', wav, '-l', 'pt', '-otxt', '-of', outBase], { stdio: 'inherit' });

console.log('\n✓ Pronto: ' + outBase + '.txt');
