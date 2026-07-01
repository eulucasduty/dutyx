---
name: site-foda
description: >
  Constrói site ou landing page PREMIUM — o "site de US$10k" com componentes famosos rebrandeados,
  3D de verdade (Spline ao vivo OU vídeo→frames no scroll), scrollytelling (Lenis + GSAP ScrollTrigger),
  fundos animados interativos e sistema de design único, na marca do cliente. Ensina o que faz um site
  ser foda antes de construir. Use quando a pessoa pedir "site", "site com motion", "landing com 3D",
  "efeito wow", "site tipo awwwards/agência", "página animada", "site profissional", "hero impressionante".
  Para uma LP de conversão simples e rápida, use /landing-page.
---

# /site-foda — o "site de US$10k" (skill-bandeira do DutyX)

Segue a **Lei**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. Visual sempre da marca do cliente (`_contexto/marca.md`). O segredo: **montar a pilha certa ANTES de construir** — é isso que transforma o Claude de "gerador genérico" em "web designer de agência".

> ⚠️ **Aprendido no 1º site real:** a teoria não basta. Se você só "sabe o conceito" mas não executa (não puxa componente famoso, não faz scrollytelling, não sabe 3D-no-scroll, deixa efeito desligado) → sai dark+mono+grid = **cara de IA**. Este skill te obriga a executar direito.

## As 2 rotas (escolha no PORTÃO)
- **Rota Rápida (HTML + GSAP):** uma página, sem build. Pra LP/hero rápido e quem é leigo.
- **Rota Pro (o "site de US$10k"):** Next + Tailwind + **Framer Motion/GSAP** + **Lenis** + **componentes famosos do 21st.dev** + **Spline (3D)** + sistema de design único. É onde mora o "de agência".
- 3D entra nas duas quando servir.

## 1. O QUÊ (ensina — não pule)
Conduza pela lição `_aprenda/site-foda.md`, curto. O que a pessoa TEM que sair sabendo: os **7 pecados da cara de IA** (grid de fundo, borda/card genérico, dark estático, roxo/azul, gerar componente, zero scroll-story, matar efeito com reduced-motion); que **foda = componente famoso rebrandeado + 3D real + scrollytelling + fundo interativo + sistema único + camadas + texto legível**; e que **o efeito anima SEMPRE**.

## 2. O PORTÃO (confirma) — e AVISA o que precisa ligar
2-3 perguntas + o aviso do arsenal:
- "Rota Rápida (HTML, simples) ou Pro (React, cara de agência)?"
- "O que o site precisa fazer a pessoa SENTIR e fazer? Tem produto/objeto que faz sentido em 3D?"
- "Público mais no celular?" (define o peso)
- **Avise já:** pra o resultado FODA de verdade, o ideal é ligar o **Magic MCP do 21st.dev** (precisa de API key — `setup/componentes-21st.md`), ter conta **Spline** (grátis) pro 3D, e **ffmpeg** pro 3D-no-scroll. Sem isso, faço no **modo básico** (componentes que já conheço + CSS) — mas o "de agência" pede o Magic MCP ligado. **Nunca trave** a pessoa por causa disso.

## 3. O COMO (constrói) — na ordem certa
1. **Base sólida primeiro** (estrutura + copy + hierarquia) — anatomia de `_blocos/landing-page/estrutura.md`. Efeito vem POR CIMA de base boa.
2. **Sistema de design ÚNICO ANTES de colar componente** (`_blocos/site-foda/design-tokens.md`): UMA classe de título, UMA forma de botão, raios/gutters/espaçamento em tokens, transições contínuas (sem linha dividindo seção). É o que evita o "8 componentes colados = frankenstein". Motor de taste: `frontend-design`.
3. **Componentes: puxe os FAMOSOS e REBRANDEIE** — via **Magic MCP, tool `inspiration`** (busca os componentes famosos existentes), **NÃO o `builder`** (gera do zero e volta inútil). Sem Magic MCP: copie do site 21st.dev. Lista curada em `_blocos/site-foda/componentes-famosos.md`. **SEMPRE** troca as cores default (roxo/azul) pela paleta/ fonte/ logo da marca. Nunca cola cru.
4. **Fundos animados interativos** — herói com vortex de partículas (canvas, reage ao mouse); seções com Aurora/Beams/Meteors/Gradient Mesh (leves). Um efeito diferente por seção.
5. **Scrollytelling** — **Lenis** (scroll suave — o feel de agência) + **GSAP ScrollTrigger** (pin, scrub, parallax, scroll horizontal). Presets em `_blocos/site-foda/motion-presets.md`. Anime só transform/opacity.
6. **3D** — Spline ao vivo (backdrop fixo interativo, camadas fundo<3D<texto, `pointer-events` liberado) OU **3D no scroll** (vídeo→frames→canvas com scrub; preset e comando ffmpeg no motion-presets). 1 efeito 3D forte por página.
7. **Legibilidade** — se houver fundo animado atrás de texto, aplique o halo de `text-shadow` no conteúdo (ver lição).
8. **Efeito-assinatura anima SEMPRE** — NUNCA desligue o hero/fundo/3D com `@media (prefers-reduced-motion:reduce)`. Reduced-motion só em micro-animação não-essencial.
9. Salve em `saidas/sites/<nome>-<data>/`. Confira no navegador (visual + performance no mobile). **Deploy:** guie por `setup/deploy.md` (Vercel + domínio) quando ela quiser pôr no ar.

## 4. O FECHO (aprende)
Pergunte o que achou; registre preferências em `_contexto/marca.md` e o trabalho em `_contexto/historico.md`. Iterar é parte do jogo.

## Checklist antes de entregar (o que faltou no 1º site)
- [ ] **SEM grid de fundo** e sem card genérico de borda? (fugiu dos 7 pecados?)
- [ ] Componentes são **famosos rebrandeados** na marca (não gerados, não roxos)?
- [ ] Tem **sistema de design único** (título/botão/raio iguais em tudo)?
- [ ] O **scroll conta história** (Lenis + pin/scrub/parallax)?
- [ ] Tem **3D** (Spline ao vivo ou frames no scroll) quando faz sentido?
- [ ] Os **efeitos animam MESMO com reduced-motion ligado**? (não apagou o site?)
- [ ] Texto **legível** sobre fundo animado (halo)?
- [ ] Camadas com profundidade (fundo < 3D < texto)?
- [ ] Roda liso (transform/opacity) e pensado pro mobile? Salvo em `saidas/sites/`?

## Quando mandar pra outra frente
- LP de conversão simples e rápida → `/landing-page`.
- Levar gente pro site → `/trafego`.
