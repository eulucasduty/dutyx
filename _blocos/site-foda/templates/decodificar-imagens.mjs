// Decodificar as imagens comprimidas pelo navegador → assets/img/*.webp
//
// Por que via navegador? O Node puro não codifica webp sem dependências.
// O canvas do navegador comprime de graça e muito bem. Fluxo:
//
// 1. Sirva a pasta (node servidor.mjs) e abra qualquer página dela.
// 2. No console (ou o Claude faz via DevTools), rode e salve o retorno
//    em assets/_imgs.json:
//
//    (async () => { const conf=[
//       {n:'tex-dark',w:1400,q:.72},{n:'tex-acento',w:1400,q:.72},
//       {n:'ph-editorial-1',w:1100,q:.78},{n:'ph-editorial-2',w:1100,q:.78}];
//      const out={};
//      for(const c of conf){ const r=await fetch('/assets/img-raw/'+c.n+'.png');
//        if(!r.ok){out[c.n]='MISS';continue;}
//        const bm=await createImageBitmap(await r.blob());
//        const s=Math.min(1,c.w/bm.width), w=Math.round(bm.width*s), h=Math.round(bm.height*s);
//        const cv=document.createElement('canvas'); cv.width=w; cv.height=h;
//        cv.getContext('2d').drawImage(bm,0,0,w,h);
//        out[c.n]=cv.toDataURL('image/webp',c.q); }
//      return out; })()
//
// 3. node decodificar-imagens.mjs
import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises';
import path from 'node:path';

const SRC = path.resolve(process.cwd(), 'assets/_imgs.json');
const OUT = path.resolve(process.cwd(), 'assets/img');
await mkdir(OUT, { recursive: true });

const j = JSON.parse(await readFile(SRC, 'utf8'));
let total = 0;
for (const [name, du] of Object.entries(j)) {
  if (typeof du !== 'string' || !du.startsWith('data:')) { console.log(`   ${name} pulado (${String(du).slice(0, 40)})`); continue; }
  const b = Buffer.from(du.split(',')[1], 'base64');
  await writeFile(path.join(OUT, `${name}.webp`), b);
  total += b.length;
  console.log(`✅ ${name}.webp  ${(b.length / 1024 | 0)} KB`);
}
await unlink(SRC).catch(() => {});
console.log(`   Somadas: ${(total / 1024 | 0)} KB ${total > 150 * 1024 ? '⚠️ acima da meta de 150 KB — aperte a qualidade' : '(dentro da meta ✅)'}`);
