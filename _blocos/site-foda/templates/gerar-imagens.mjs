// Gerar backgrounds/fotos temáticas por IA (OpenRouter) pra LP 3D.
//
// Uso:  OPENROUTER_API_KEY=sk-or-...  node gerar-imagens.mjs
// (a chave vem por variável de ambiente — NUNCA gravada em arquivo; regra do SEGURANCA.md)
//
// Saída: PNGs brutos em assets/img-raw/ — depois comprima pra webp com
// decodificar-imagens.mjs (meta: as imagens somadas ≤ 150 KB).
//
// Edite a lista IMAGES abaixo pra marca do cliente. Regras dos prompts:
// - sempre terminar com o NO (sem texto, sem logo, sem marca d'água);
// - textura escura: quase-preta, sutil (mata o "preto chapado de IA");
// - textura de acento: na COR DA MARCA (troque o hex no prompt);
// - fotos editoriais: P&B, ligadas ao universo do produto. Nada de marca alheia.
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const KEY = process.env.OPENROUTER_API_KEY;
if (!KEY) { console.error('Falta a OPENROUTER_API_KEY (rode: OPENROUTER_API_KEY=sk-or-... node gerar-imagens.mjs)'); process.exit(1); }

const DIR = path.resolve(process.cwd(), 'assets/img-raw');
await mkdir(DIR, { recursive: true });

// Melhor modelo de imagem primeiro; fallbacks automáticos.
const MODELS = [
  'google/gemini-3-pro-image-preview',
  'google/gemini-2.5-flash-image',
  'google/gemini-2.5-flash-image-preview'
];

const NO = 'No text, no letters, no numbers, no logos, no watermark, no people.';
const IMAGES = [
  { name: 'tex-dark',
    prompt: `Wide 16:9 seamless background texture: matte black charcoal plaster wall, almost pure black (#0b0b0c), very subtle fine grain and faint mottled cloud variation, soft light falloff from top, minimalist premium photographic texture. ${NO}` },
  { name: 'tex-acento', // ← troque o hex pela cor de acento da marca do cliente
    prompt: `Wide 16:9 seamless background texture: matte clay plaster surface in warm burnt-orange (#D97757), subtle handmade trowel variation, fine mineral grain, soft directional light, premium ceramic studio feel. ${NO}` },
  { name: 'ph-editorial-1', // foto pro split 1 — adapte ao universo do produto
    prompt: `Portrait 4:5 black and white photograph: moody dark studio desk with an open laptop, the screen glowing softly with blurred unreadable abstract lines of light (out of focus bokeh), dramatic rim light, deep shadows, cinematic high-contrast monochrome, shallow depth of field, premium tech editorial. ${NO}` },
  { name: 'ph-editorial-2', // foto pro split 2
    prompt: `Portrait 4:5 black and white macro photograph: glossy black chrome robotic sphere and metal joints reflecting a softbox studio light, deep black background, dramatic monochrome lighting, shallow depth of field, high contrast, premium product editorial. ${NO}` },
];

async function gen(model, prompt) {
  const r = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages: [{ role: 'user', content: prompt }], modalities: ['image', 'text'] })
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + JSON.stringify(j).slice(0, 160));
  const u = j.choices?.[0]?.message?.images?.[0]?.image_url?.url;
  if (!u) throw new Error('sem imagem na resposta: ' + JSON.stringify(j).slice(0, 200));
  if (u.startsWith('data:')) return Buffer.from(u.split(',')[1], 'base64');
  const rr = await fetch(u);
  if (!rr.ok) throw new Error('fetch da imagem HTTP ' + rr.status);
  return Buffer.from(await rr.arrayBuffer());
}

for (const spec of IMAGES) {
  let ok = false;
  for (const m of MODELS) {
    try {
      const buf = await gen(m, spec.prompt);
      await writeFile(path.join(DIR, `${spec.name}.png`), buf);
      console.log(`✅ ${spec.name}  via ${m}  ${(buf.length / 1024 | 0)} KB`);
      ok = true; break;
    } catch (e) {
      console.log(`   ${spec.name} falhou via ${m}: ${String(e.message).slice(0, 120)}`);
    }
  }
  if (!ok) console.log(`❌ ${spec.name} — nenhum modelo respondeu (dá pra seguir sem: use textura CSS)`);
}
console.log('Agora comprima: abra a LP no navegador e rode decodificar-imagens.mjs (ver bloco lp-3d-scrollytelling.md).');
