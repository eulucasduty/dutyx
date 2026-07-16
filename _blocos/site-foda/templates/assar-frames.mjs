// Assar frames do mascote 3D — decodifica o JSON gerado pelo DXR.bake()
// em arquivos webp individuais (assets/robot/frame_00.webp, frame_01.webp, ...).
//
// Fluxo: no navegador, com o gerador-mascote-3d.html aberto, salve o retorno de
//   await DXR.bake(72, 640, 800)
// em assets/robot/_frames.json (o Claude faz isso por você via DevTools).
// Depois: node assar-frames.mjs
//
// Budget: 60–72 frames · total ≤ 1,5 MB. Passou? Reduza a qualidade no bake (0.8).
import { readFile, writeFile, unlink, mkdir } from 'node:fs/promises';
import path from 'node:path';

const DIR = path.resolve(process.cwd(), 'assets/robot');
await mkdir(DIR, { recursive: true });

const raw = await readFile(path.join(DIR, '_frames.json'), 'utf8');
const frames = JSON.parse(raw);
if (!Array.isArray(frames)) { console.error('_frames.json não é um array:', String(frames).slice(0, 80)); process.exit(1); }

let total = 0;
for (let i = 0; i < frames.length; i++) {
  const b64 = frames[i].split(',')[1];
  const buf = Buffer.from(b64, 'base64');
  const name = 'frame_' + String(i).padStart(2, '0') + '.webp';
  await writeFile(path.join(DIR, name), buf);
  total += buf.length;
}
await unlink(path.join(DIR, '_frames.json')).catch(() => {});

console.log(`✅ ${frames.length} frames em ${DIR}`);
console.log(`   Total: ${(total / 1024 / 1024).toFixed(2)} MB (${(total / frames.length / 1024).toFixed(1)} KB/frame)`);
if (total > 1.5 * 1024 * 1024) console.log('⚠️  Acima do budget de 1,5 MB — asse de novo com qualidade menor (ex.: DXR.bake(72, 640, 800, 0.8)).');
