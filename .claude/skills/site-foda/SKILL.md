---
name: site-foda
description: >
  Constrói site ou landing page PREMIUM — o "site de US$10k" com motion de agência (GSAP/ScrollTrigger/Lenis),
  3D de verdade (Spline ao vivo OU vídeo→frames no scroll), scrollytelling, fundos animados e sistema de
  design único, na marca do cliente. Ensina o que faz um site ser foda antes de construir. Use quando a
  pessoa pedir "site", "site com motion", "landing com 3D", "efeito wow", "site tipo awwwards/agência",
  "página animada", "site profissional", "hero impressionante". Para uma LP de conversão simples e rápida,
  use /landing-page.
---

# /site-foda — o "site de US$10k" (skill-bandeira do DutyX)

Segue a **Lei**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. **Motor de design: a skill global `claude-design`** — em TODAS as rotas (se ela não estiver disponível no ambiente, siga os princípios de `_blocos/site-foda/design-tokens.md` direto — não trave). Componentes do 21st.dev são turbo opcional por cima. Visual sempre da marca do cliente (`_contexto/marca.md`).

> ⚠️ **Aprendido no 1º site real:** teoria sem execução = dark+mono+grid = **cara de IA**. E a regra que manda em tudo: **site foda que demora 8 segundos pra abrir NÃO é foda** — performance é parte do efeito, não um detalhe.

## As 2 rotas (a pessoa escolhe no PORTÃO — explique assim)
- **Rota Rápida (CSS puro, zero instalação):** um HTML único com os efeitos de `_blocos/site-foda/efeitos-css-puro.md` (gradiente vivo, grain, reveal, marquee, tilt, cursor). Fica no ar HOJE, leve por natureza. Pra quem quer "site bonito que impressiona" sem esperar.
- **Rota Completa (GSAP + ScrollTrigger + Lenis, e 3D se servir):** scrollytelling, pin/scrub, 3D no scroll ou Spline. Mais "awwwards", mais horas. React/Next só se o projeto pedir — GSAP roda em HTML único via CDN.
- Dá pra começar na Rápida e evoluir pra Completa depois — nada se perde.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, pra quem), `_contexto/marca.md` (tom + visual — o site é da marca do CLIENTE) e `_contexto/estrategia.md` (objetivo). Sem oferta pronta pro site vender → `/oferta` primeiro.

## 1. O QUÊ (ensina — não pule)
Conduza pela lição `_aprenda/site-foda.md`, curto. A pessoa TEM que sair sabendo: os **7 pecados da cara de IA**; que foda = **movimento com intenção + sistema único + camadas + texto legível**; que **performance é regra** (o wow morre no 4G se pesar); e a diferença real entre as 2 rotas.
Se a pessoa pedir pra pular ("só faz"), aplique a regra dos 30 segundos do CLAUDE.md: dê o essencial em uma frase antes de construir.

## 2. O PORTÃO (confirma)
- "Rota Rápida (CSS puro, no ar hoje) ou Completa (scrollytelling/3D, mais horas)?"
- "O que o site precisa fazer a pessoa SENTIR e FAZER? Tem produto/objeto que mereça 3D?"
- "Público mais no celular?" (define o budget de peso)
- **Turbo (só se Rota Completa):** com o **Magic MCP do 21st.dev** ligado (`setup/componentes-21st.md`) os componentes famosos chegam mais rápido; **Spline** (grátis) pro 3D ao vivo; **ffmpeg** pro 3D-no-scroll. Tudo opcional — sem nada disso o `claude-design` constrói o equivalente. **Nunca trave** a pessoa por ferramenta.

## 3. O COMO (constrói) — na ordem certa
1. **Base sólida** (estrutura + copy + hierarquia) — anatomia de `_blocos/landing-page/estrutura.md`. Efeito vem POR CIMA de base boa. Pediu foto real (herói, cena, mockup)? Geradores grátis em `setup/imagens.md`.
2. **Tokens ANTES de qualquer componente** (`_blocos/site-foda/design-tokens.md`): cores/tipo/raio/espaço da marca decididos UMA vez. É o que evita o frankenstein.
3. **Rota Rápida:** monte com `claude-design` + receitas de `efeitos-css-puro.md` (máx. 3 efeitos + temperos). Pule pro passo 7.
4. **Rota Completa — motion:** GSAP + ScrollTrigger + **Lenis** com os presets CORRETOS de `_blocos/site-foda/motion-presets.md` (integração Lenis↔ScrollTrigger, `matchMedia` pra mobile/reduced-motion). Componentes famosos: turbo via Magic `inspiration` (nunca `builder`), sempre reescritos nos tokens (`componentes-famosos.md`).
5. **Fundos animados** — um efeito por seção, recolorido pra marca.
6. **3D (se servir)** — Spline ao vivo com **lazy + fallback estático**, OU vídeo→frames no scroll (budget: ≤ 6 MB, desktop; mobile ganha versão leve). 1 efeito 3D forte por página.
7. **Legibilidade** — texto sobre fundo animado leva halo de `text-shadow` (ver lição).
8. **Performance (regra, não etapa):** primeira carga ≤ 2 MB, LCP < 2,5s, só transform/opacity, teste com throttle "Fast 4G" + CPU 4x no DevTools. Pesou? Corta efeito, não o prazo.
9. **Reduced-motion:** conteúdo NUNCA nasce invisível no CSS; com "reduzir movimento" ligado o site mostra a **versão calma** — completo e bonito, nunca preto/vazio (regra nº0 do motion-presets).
10. Salve em `saidas/sites/<nome>-<data>/`. **Deploy:** `setup/deploy.md` — Rota Rápida = **arrastar no Netlify Drop** (zero terminal); Rota Completa com Next = Vercel.

## 4. O FECHO (aprende)
Pergunte o que achou; registre preferências em `_contexto/marca.md` e o trabalho em `_contexto/historico.md`. Iterar é parte do jogo.

## Checklist antes de entregar
- [ ] **Abre em menos de 3s no 4G simulado?** (senão não é foda — corta peso)
- [ ] SEM grid de fundo, sem card genérico, sem roxo default? (7 pecados)
- [ ] Sistema único (título/botão/raio/espaço nos tokens, em TUDO — inclusive componente turbo)?
- [ ] O scroll conta história (Completa) ou os efeitos CSS têm intenção (Rápida)?
- [ ] 3D com lazy + fallback, e versão leve no mobile?
- [ ] Com "reduzir movimento" ligado, o site continua completo e bonito (nunca preto)?
- [ ] Texto legível sobre fundo animado (halo)? Camadas fundo < 3D < texto?
- [ ] Testado no celular de verdade? Salvo em `saidas/sites/`?

## Quando mandar pra outra frente
- LP de conversão simples e rápida → `/landing-page`. Sem oferta pronta → `/oferta` primeiro.
- Levar gente pro site → `/trafego`.
