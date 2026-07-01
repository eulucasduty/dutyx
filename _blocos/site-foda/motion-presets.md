# Bloco — presets de motion (scrollytelling, 3D, fundos)

> Receitas que rodam liso. Regra de ouro: anime **transform** (x, y, scale, rotate) e **opacity** — nunca width/top/margin (engasga). E o **efeito-assinatura anima SEMPRE** (não desligar no reduced-motion).

## A pilha do movimento
- **Lenis** (`npm install lenis`) — scroll suave/inércia. É o **truque nº1 do "feel de agência"**. Liga primeiro.
- **GSAP + ScrollTrigger** — pin, scrub, parallax, scroll horizontal.
- **Framer Motion** (Rota Pro/React) — reveals/hover/transições declarativas.

## Presets base (resolvem 90%)
1. **Reveal no scroll** — entra de baixo + fade quando aparece. (`from { y:40, opacity:0 }`). Títulos, cards, prova.
2. **Stagger** — vários itens em sequência rápida. Listas, features, depoimentos.
3. **Parallax sutil** — fundo/elemento em velocidade diferente do scroll. Herói. (sutil!)
4. **Pin + scrub** — a seção "trava" e a cena evolui conforme rola. Processo em passos, produto girando. **1 por página.**
5. **Scroll horizontal pinado** — a seção trava e desliza pro lado enquanto você rola pra baixo. Portfólio, etapas.
6. **Hover delicado** — botão/card reage ao mouse (leve scale + sombra). No mobile não existe hover — garanta funcionar sem ele.

## 🎞️ Preset "3D no SCROLL" (vídeo → frames → canvas) — estilo Apple
O efeito do produto girando conforme você rola. Não é vídeo tocando: é sequência de imagens num `<canvas>`, com o frame amarrado ao scroll.
1. Tenha um render/vídeo do objeto girando (Spline, Blender, AE, ou vídeo de produto).
2. Fatie em frames com ffmpeg (grátis):
   ```
   ffmpeg -i render.mp4 -vf "fps=30,scale=1600:-1" frames/frame_%04d.jpg
   ```
   (~120-180 frames pra um giro suave)
3. No site, esqueleto:
   ```tsx
   const FRAME_COUNT = 147;
   const frameUrl = (i) => `/frames/frame_${String(i).padStart(4,"0")}.jpg`;
   // 1) preload TODAS as imagens (array images[])
   // 2) pin a seção com ScrollTrigger
   // 3) const obj = { f: 0 };
   //    gsap.to(obj, { f: FRAME_COUNT-1, ease:"none",
   //      scrollTrigger:{ trigger:sec, start:"top top", end:"+=3000", scrub:true, pin:true },
   //      onUpdate: () => draw(Math.round(obj.f)) });
   // 4) function draw(i){ ctx.drawImage(images[i], 0,0, canvas.width, canvas.height) }
   ```
- **Performance:** frames jpg/webp ~1600px comprimidos, pré-carregados; no mobile menos frames ou versão estática. Sequência pesada mata o 4G.

## 🧊 Preset "backdrop 3D fixo interativo" (Spline)
O 3D como fundo da página inteira, atrás do texto, reagindo ao mouse:
- Camadas (z-index): **fundo animado (0) < 3D/Spline (meio) < texto (topo).**
- O container do Spline fica `position:fixed` cobrindo a viewport.
- **Libere `pointer-events`** no conteúdo por cima (`pointer-events:none` nos wrappers de texto que não são clicáveis) pra o mouse "atravessar" e o 3D reagir. Botões/links mantêm `pointer-events:auto`.
- Embed: `@splinetool/react-spline` com o `.splinecode` exportado do spline.design (grátis).

## 🎇 Fundos animados interativos (um por seção, pra não repetir)
- Herói: **vortex de partículas** (canvas 2D) que reage ao mouse — leve e vivo.
- Seções: **Aurora / Background Beams / Meteors / Gradient Mesh** (CSS/leves).
- Muitos vêm prontos como componentes famosos do 21st.dev (ver `componentes-famosos.md`) — rebrandeie pra paleta da marca.

## Regra anti-reduced-motion (não repita o erro que apagou o site 3x)
- O **efeito-assinatura** (fundo/3D/hero) **NUNCA** vai dentro de `@media (prefers-reduced-motion:reduce){ animation:none }`.
- Respeite reduced-motion só em micro-animações não-essenciais.

## Performance (não-negociável)
- Carregue a lib sem travar a 1ª dobra. 1 efeito forte (pin/scrub/3D) por página. Teste no celular.

## Referências de técnica (puxar via find-skills, adaptar — nunca copiar marca de terceiro)
- `eng0ai/eng0-template-skills@gsap-awwwards-website` · `secondsky/claude-skills@motion` · `github/awesome-copilot@gsap-framer-scroll-animation`
