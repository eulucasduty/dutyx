# Bloco — efeitos foda em CSS/JS puro (Rota Rápida, zero instalação)

> O kit da Rota Rápida: efeito de "site caro" num único HTML, sem React, sem npm, sem lib. Cada receita é completa — cola, troca as cores pelos tokens da marca (`design-tokens.md`) e pronto. Todos rodam liso porque só animam `transform`/`opacity`. Quer pin/scrub/3D? Aí é a pilha GSAP (`motion-presets.md`).

**Regra que vale pro bloco inteiro:** conteúdo NUNCA nasce invisível no CSS. Quem esconde pra animar é o JS — assim, se o JS falhar, o site aparece completo (nunca uma tela preta). O truque: `document.documentElement.classList.add('js')` no topo, e os estados escondidos só valem dentro de `.js`.

```html
<script>document.documentElement.classList.add('js')</script>
```

## 1. Gradiente animado (fundo vivo do herói)
```html
<style>
.bg-vivo {
  background: linear-gradient(115deg, var(--cor-1), var(--cor-2), var(--cor-3), var(--cor-1));
  background-size: 300% 300%;
  animation: flui 14s ease-in-out infinite;
}
@keyframes flui {
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
</style>
```
As 3 cores saem da paleta da marca (2 tons da primária + o acento). Movimento lento (12-16s) = premium; rápido = pisca-pisca.

## 2. Grain / noise (a textura que tira a cara de "digital liso")
```html
<style>
.grain::after {
  content: ""; position: fixed; inset: 0; z-index: 9999;
  pointer-events: none; opacity: .05;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
}
</style>
```
Classe `grain` no `<body>`. Opacidade entre .04 e .08 — é tempero, não prato. Custa ~0 KB (o SVG é gerado inline).

## 3. Reveal on scroll (IntersectionObserver — o efeito que resolve 80%)
```html
<style>
.js .reveal { opacity: 0; transform: translateY(32px);
  transition: opacity .7s ease, transform .7s cubic-bezier(.22,1,.36,1);
  transition-delay: var(--d, 0s); }
.js .reveal.visivel { opacity: 1; transform: none; }
</style>
<script>
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visivel'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
</script>
```
Pra entrada em sequência (stagger), atrase cada item: `<div class="reveal" style="--d:.1s">`, `--d:.2s`, `--d:.3s`… Use em título, card, prova. Note o `.js` na frente: sem JavaScript, nada some.

## 4. Parallax leve (fundo do herói em outra velocidade)
```html
<script>
const alvos = document.querySelectorAll('[data-parallax]');
let agendado = false;
addEventListener('scroll', () => {
  if (agendado) return; agendado = true;
  requestAnimationFrame(() => {
    alvos.forEach(el => {
      const v = parseFloat(el.dataset.parallax || 0.25);
      el.style.transform = `translateY(${scrollY * v}px)`;
    });
    agendado = false;
  });
}, { passive: true });
</script>
```
Uso: `<img class="hero-bg" data-parallax="0.3">` — só em elemento da PRIMEIRA dobra (a conta usa `scrollY` direto). Valor entre 0.15 e 0.35; mais que isso enjoa.

## 5. Marquee infinito (logos, depoimentos, "usado por")
```html
<style>
.marquee { overflow: hidden; }
.marquee-trilho { display: flex; width: max-content; animation: rola 30s linear infinite; }
.marquee-trilho > .grupo { display: flex; gap: 56px; align-items: center; padding-right: 56px; }
@keyframes rola { to { transform: translateX(-50%); } }
.marquee:hover .marquee-trilho { animation-play-state: paused; }
</style>
<div class="marquee"><div class="marquee-trilho">
  <div class="grupo"> <!-- logos/frases aqui --> </div>
  <div class="grupo" aria-hidden="true"> <!-- MESMO conteúdo, duplicado --> </div>
</div></div>
```
O loop só é perfeito se os dois grupos forem idênticos (o `-50%` anda exatamente um grupo). Duração: 25-40s pra logos.

## 6. Tilt 3D no hover (card que inclina seguindo o mouse)
```html
<style>
.tilt { transition: transform .15s ease; will-change: transform; }
</style>
<script>
if (matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = 'perspective(800px)'; });
  });
}
</script>
```
O `matchMedia('(hover: hover)')` pula celular (não existe hover lá — e o card não pode depender do efeito pra funcionar). 10 graus é o teto; 20 vira parque de diversão.

## 7. Cursor custom (a bolinha que denuncia site de agência)
```html
<style>
.cursor { position: fixed; top: 0; left: 0; width: 12px; height: 12px; border-radius: 50%;
  background: var(--acento); pointer-events: none; z-index: 9999;
  transform: translate(-50%,-50%); transition: width .2s, height .2s, opacity .2s;
  mix-blend-mode: difference; }
@media (hover: none) { .cursor { display: none; } }
</style>
<div class="cursor" aria-hidden="true"></div>
<script>
const cur = document.querySelector('.cursor');
addEventListener('pointermove', e => { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px'; });
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('pointerenter', () => { cur.style.width = '44px'; cur.style.height = '44px'; });
  el.addEventListener('pointerleave', () => { cur.style.width = '12px'; cur.style.height = '12px'; });
});
</script>
```
O cursor nativo continua visível (não use `cursor:none` — confunde quem depende dele). A bolinha cresce sobre link/botão = feedback de "isso é clicável". No celular, some sozinha.

## Combinações que funcionam (sem virar árvore de Natal)
- **LP elegante:** gradiente animado no herói + reveal em tudo + marquee de prova. Ponto.
- **Portfólio/estúdio:** grain no body + cursor custom + tilt nos cards + reveal.
- **Regra:** grain e cursor são "temperos globais"; dos outros, no máximo 3 efeitos por página. Efeito repetido em toda seção = cansaço; efeito diferente demais em cada seção = frankenstein.

## Acessibilidade sem quebrar o site (o jeito certo)
Respeite quem liga "reduzir movimento" no sistema — REDUZINDO, nunca apagando conteúdo:
```css
@media (prefers-reduced-motion: reduce) {
  .bg-vivo { animation-duration: 60s; }        /* quase parado, mas vivo e bonito */
  .marquee-trilho { animation-play-state: paused; }
  .js .reveal { opacity: 1; transform: none; transition: none; } /* conteúdo aparece direto */
}
```
Repara: nada some, nada fica preto. O site continua completo e bonito — só mais calmo. (A história de por que essa regra existe tá em `_aprenda/site-foda.md`.)
