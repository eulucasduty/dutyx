---
name: site-foda
description: >
  Constrói site ou landing page PREMIUM — aquele "site de US$10k" com animações de agência, componentes
  profissionais e 3D, na marca do cliente, com performance em primeiro lugar. Monta a pilha certa ANTES de
  construir (animação + skill de design + componentes 21st.dev) e ensina o que faz um site ser foda. Use
  quando a pessoa pedir "site", "site com motion", "landing com 3D", "efeito wow", "site tipo awwwards/agência",
  "página animada", "site profissional", "hero impressionante". Para uma LP de conversão simples e rápida, use /landing-page.
---

# /site-foda — o "site de US$10k" (skill-bandeira do DutyX)

A frente mais impressionante do DutyX. Segue a **Lei**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. Visual sempre da marca do cliente (`_contexto/marca.md`). O segredo (do vídeo/guia que inspirou): **montar a pilha certa ANTES de mandar construir** — é a configuração que transforma o Claude de "gerador genérico" em "web designer de agência".

## As 2 rotas (escolha com a pessoa no PORTÃO)
- **Rota Rápida (HTML + GSAP):** uma página, sem build, sem instalar nada. Ótima pra LP/hero rápido e pra quem é leigo. Animação via GSAP/ScrollTrigger.
- **Rota Pro (o "site de US$10k"):** Next 14 + Tailwind + **Framer Motion** (animação) + **componentes 21st.dev** + **skill de design** (tokens). É a pilha de agência — mais robusta, precisa de Node/projeto (o Claude Code monta). Tudo grátis.
- **3D (Spline/Three)** entra nas duas rotas, quando servir.

## A pilha das 4 camadas (Rota Pro) — montar ANTES de construir
1. **Claude Code** — já é a base (o `/instalar` cobre).
2. **Framer Motion** — `npm install framer-motion`. Use pra TODAS as animações: fade no scroll, revelações escalonadas (stagger), transições suaves no hover. (Na Rota Rápida, o equivalente é GSAP/ScrollTrigger — ver `_blocos/site-foda/motion-presets.md`.)
3. **Skill de design (gosto)** — aplique o sistema de `_blocos/site-foda/design-tokens.md` (grade 8px, escala tipográfica, tokens de cor, "evitar estética genérica de IA"). Motor de taste: a skill global **`frontend-design`** (e `claude-design`).
4. **Componentes 21st.dev** — blocos prontos (hero, pricing, navbar, depoimentos). **Jeito grátis:** a pessoa copia o código do componente no site 21st.dev e cola; você adapta à marca dela. (Opcional: o MCP "Magic" do 21st.dev gera com `/ui` — freemium, ver `setup/componentes-21st.md`.)

## Antes de tudo
Leia `_contexto/negocio.md`, `_contexto/marca.md`, `_contexto/estrategia.md`.

## 1. O QUÊ (ensina — não pule)
Conduza pela lição `_aprenda/site-foda.md`, curto. O que a pessoa TEM que entender: foda = movimento com intenção + storytelling no scroll; **a configuração (pilha) vem antes do prompt**; **performance é rei** (3D pesado mata o mobile); e 3D só quando serve.

## 2. O PORTÃO (confirma)
2-3 perguntas que checam entendimento e definem o escopo:
- "Esse site é mais pra uma LP rápida (Rota Rápida, HTML) ou um site profissional com várias seções (Rota Pro, React)? — eu recomendo a Rota Rápida se você quer simples e já, a Pro se quer cara de agência."
- "O efeito vai servir pra contar sua história/vender, ou é só pra impressionar? O que o site precisa fazer a pessoa sentir e fazer?"
- "A maior parte do seu público abre no celular?" (define o quanto pode pesar)

## 3. O COMO (constrói)
1. Confirme a rota e a pilha em 1 linha.
2. **Base sólida primeiro** (estrutura + copy + hierarquia) — anatomia de `_blocos/landing-page/estrutura.md`. Motion e componentes vêm POR CIMA de uma base boa.
3. Aplique o **sistema de design** (`_blocos/site-foda/design-tokens.md`) com a marca do cliente. Use `frontend-design` como motor de taste.
4. **Componentes:** se a pessoa trouxer um componente do 21st.dev (ou usar o Magic MCP), integre adaptando aos tokens dela e trocando o placeholder pelo texto real.
5. **Animação:** Framer Motion (Rota Pro) ou GSAP (Rota Rápida), animando só transform/opacity (roda liso). Presets em `_blocos/site-foda/motion-presets.md`.
6. **3D:** Spline leve quando servir; carregue sem travar a primeira dobra; simplifique no mobile.
7. Salve em `saidas/sites/<nome>-<data>/`. **Confira performance e visual** (screenshot — `scripts/transcrever.mjs` não; use o caminho de print/preview). Avise se algo pesar.
8. Use o **prompt inicial** de `_blocos/site-foda/design-tokens.md` como ponto de partida da Rota Pro, e construa **seção por seção, mostrando cada uma antes de seguir**.

## 4. O FECHO (aprende)
Pergunte o que achou. Registre preferências de estilo/motion em `_contexto/marca.md` e o trabalho em `_contexto/historico.md`. Iterar é parte do jogo: refine espaçamento, contraste e movimento.

## Erros comuns (do guia — evite)
- Pular a skill de design → sai genérico, "cara de IA".
- Briefing vago → seja específico em seções, animações e conteúdo.
- Não iterar → a 1ª versão raramente é a final.
- Esquecer performance → peça lazy-load de imagens, fontes otimizadas e checagem de velocidade no fim.

## Checklist antes de entregar
- [ ] A base (mensagem + CTA) está clara mesmo SEM efeitos?
- [ ] Animação tem propósito (revela/guia/dá feedback), não aleatória?
- [ ] Anima transform/opacity (roda liso)? Pensado pro mobile e carregamento rápido?
- [ ] Seguiu os design tokens (8px, escala tipográfica, cores da marca)?
- [ ] Componentes adaptados à marca do CLIENTE (não placeholder)?
- [ ] 3D só onde serve, leve no mobile?
- [ ] Salvo em `saidas/sites/`?

## Quando mandar pra outra frente
- LP de conversão simples e rápida → `/landing-page`.
- Levar gente pro site → `/trafego`.
