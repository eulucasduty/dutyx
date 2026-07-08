# Bloco — presets de motion (GSAP + ScrollTrigger + Lenis, 3D, fundos)

> As receitas da Rota Completa, corretas e atuais. Regra de ouro: anime **transform** (x, y, scale, rotate) e **opacity** — nunca width/top/margin (engasga). Pra efeito leve sem lib nenhuma, use `efeitos-css-puro.md`. O motor de gosto que monta tudo isso é a skill global `claude-design`.

## A pilha (e como ligar do jeito certo)

- **GSAP + ScrollTrigger** — desde 2025 o GSAP é **100% grátis, com TODOS os plugins** (SplitText incluso). Pin, scrub, parallax, scroll horizontal.
- **Lenis** — scroll suave/inércia. O truque nº1 do "feel de agência".
- **Framer Motion (hoje "Motion")** — só na Rota Pro em React, pra reveal/hover declarativo. Não misture: ou GSAP ou Motion pra mesma animação.

**Num HTML único (sem build), via CDN:**
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);
  // Lenis + ScrollTrigger, a integração oficial (senão o pin "pula"):
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
</script>
```
**Num projeto React/Next:** `npm install gsap lenis` e a mesma integração num `useEffect` (ou `lenis/react`). A pilha toda pesa ~60 KB gzip — o peso que mata site nunca é ela, é imagem/vídeo/3D.

## Regra nº0 — conteúdo nunca nasce invisível no CSS
Nada de `opacity: 0` no stylesheet esperando o JS animar. Use `gsap.from()` / `autoAlpha` — o JS esconde só na hora de animar. Se o script falhar (adblock, conexão, erro), o site aparece INTEIRO. Foi a falta disso que deixou o 1º site real preto.

## Presets (código real, resolve 90%)

**1. Reveal no scroll** — títulos, cards, prova:
```js
gsap.utils.toArray('[data-reveal]').forEach((el) => {
  gsap.from(el, { y: 40, autoAlpha: 0, duration: .8, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
});
```

**2. Stagger** — lista/grid entrando em sequência:
```js
gsap.from('.features > *', { y: 32, autoAlpha: 0, duration: .6, stagger: .08, ease: 'power2.out',
  scrollTrigger: { trigger: '.features', start: 'top 80%', once: true } });
```

**3. Parallax sutil** — fundo do herói:
```js
gsap.to('.hero-bg', { yPercent: 20, ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
```

**4. Pin + scrub** — a seção trava e a cena evolui com o scroll (processo em passos, produto). **1 por página:**
```js
gsap.timeline({ scrollTrigger: {
    trigger: '.etapas', start: 'top top', end: '+=2000', scrub: 1, pin: true } })
  .from('.etapa-1', { autoAlpha: 0, y: 60 })
  .from('.etapa-2', { autoAlpha: 0, y: 60 })
  .from('.etapa-3', { autoAlpha: 0, y: 60 });
```

**5. Scroll horizontal pinado** — portfólio, etapas:
```js
const trilho = document.querySelector('.trilho');
gsap.to(trilho, { x: () => -(trilho.scrollWidth - innerWidth), ease: 'none',
  scrollTrigger: { trigger: '.galeria', start: 'top top',
    end: () => '+=' + (trilho.scrollWidth - innerWidth),
    scrub: 1, pin: true, invalidateOnRefresh: true } });
```

**6. Mobile e reduced-motion no mesmo lugar** — `gsap.matchMedia()` é o jeito certo (nada de if solto):
```js
const mm = gsap.matchMedia();
mm.add({ desktop: '(min-width: 768px)', calmo: '(prefers-reduced-motion: reduce)' }, (ctx) => {
  if (ctx.conditions.calmo) {
    gsap.set('[data-reveal]', { clearProps: 'all' }); // tudo visível, sem coreografia
    return; // fades curtos no máximo — NUNCA conteúdo sumido
  }
  if (ctx.conditions.desktop) { /* pin, scrub, parallax, horizontal */ }
  else { /* mobile: só reveals leves — pin/parallax pesado fica de fora */ }
});
```

## 🎞️ Preset "3D no SCROLL" (vídeo → frames → canvas) — estilo Apple
O produto girando conforme rola. Não é vídeo tocando: é sequência de imagens num `<canvas>`, frame amarrado ao scroll.
1. Render/vídeo do objeto girando (Spline, Blender, ou vídeo real do produto).
2. Fatia com ffmpeg (grátis) — Windows (PowerShell) e Mac, mesmo comando:
   ```
   ffmpeg -i render.mp4 -vf "fps=30,scale=1600:-1" frames/frame_%04d.jpg
   ```
   *Não tem ffmpeg? Windows: `winget install Gyan.FFmpeg` (fecha e reabre o terminal); Mac: `brew install ffmpeg` — mesmo passo do `setup/whisper-local.md`.*
3. Esqueleto:
```js
const TOTAL = 147, imgs = [];
const url = i => `frames/frame_${String(i).padStart(4,'0')}.jpg`;
for (let i = 0; i < TOTAL; i++) { imgs[i] = new Image(); imgs[i].src = url(i + 1); }
const cv = document.querySelector('canvas'), ctx = cv.getContext('2d');
const obj = { f: 0 };
imgs[0].onload = () => ctx.drawImage(imgs[0], 0, 0, cv.width, cv.height);
gsap.to(obj, { f: TOTAL - 1, ease: 'none',
  scrollTrigger: { trigger: '.cena-3d', start: 'top top', end: '+=3000', scrub: true, pin: true },
  onUpdate: () => ctx.drawImage(imgs[Math.round(obj.f)], 0, 0, cv.width, cv.height) });
```
- **Budget da sequência:** 120-160 frames, jpg/webp ~1600px, **total ≤ 6 MB**. No **mobile: não carregue a sequência** — sirva um vídeo curto em loop ou a melhor imagem estática (`matchMedia` decide antes do preload).

## 🧊 Preset "backdrop 3D fixo interativo" (Spline) — com lazy
O 3D como fundo da página, atrás do texto, reagindo ao mouse:
- Camadas (z-index): **fundo animado (0) < 3D/Spline (meio) < texto (topo)**. Container do Spline `position: fixed` cobrindo a viewport.
- **`pointer-events: none`** nos wrappers de texto (mouse "atravessa" até o 3D); botões/links de volta com `pointer-events: auto`.
- **Lazy obrigatório:** a cena só carrega DEPOIS da primeira dobra pintar — embed via `IntersectionObserver` ou após o evento `load`. Cena ≤ 2-3 MB, e **sempre** com um fundo estático bonito por baixo enquanto carrega (e como fallback de mobile fraco).
- Embed: `@splinetool/react-spline` (React) ou, em HTML puro, o web component do próprio Spline:
  ```html
  <script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
  <spline-viewer url="https://prod.spline.design/SEU-ID/scene.splinecode"></spline-viewer>
  ```
  (o `.splinecode`/URL sai do export do spline.design, grátis).

## 🎇 Fundos animados (um por seção, pra não repetir)
- Herói: vortex/partículas em canvas (reage ao mouse). Seções: Aurora / Beams / Gradient Mesh — versões CSS puras leves em `efeitos-css-puro.md`; versões famosas do 21st.dev (turbo) em `componentes-famosos.md`. Tudo recolorido pra marca.

## ⚡ Budget de performance (site foda que demora 8s não é foda)
- **Primeira carga ≤ 2 MB** no total; imagem do herói ≤ 250 KB (webp/avif); **LCP < 2,5s**.
- **1 efeito forte** (pin/scrub/3D) por página. Fontes: máx. 2 famílias, woff2, `font-display: swap`.
- 3D e sequência de frames: **sempre lazy, sempre com fallback**, e no mobile a versão leve.
- Teste que vale: DevTools → aba Network → throttle "Fast 4G" + CPU 4x, no modo mobile. E Lighthouse (aba Performance): mira 85+. Se rodar liso aí, roda em qualquer lugar.

## 🔒 Reduced-motion: reduz, NUNCA apaga (a lição do site preto)
No 1º site real, o efeito-assinatura foi desligado com `animation: none` e o conteúdo nascia invisível no CSS → com "reduzir movimento" ligado no Windows, o site ficou **preto e parado**. As 3 regras que impedem isso pra sempre:
1. Conteúdo nunca nasce invisível no CSS (regra nº0 acima).
2. `prefers-reduced-motion` se respeita **trocando por uma versão calma** (fade curto no lugar de pin/parallax, fundo quase parado mas bonito) — nunca removendo conteúdo nem entregando página quebrada.
3. O efeito-assinatura tem **versão calma digna**, não um buraco preto. Teste com "reduzir movimento" ligado antes de entregar.
