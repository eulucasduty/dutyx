---
name: site-foda
description: >
  Constrói site ou landing page PREMIUM com motion (GSAP/ScrollTrigger) e 3D (Spline/Three.js) —
  aquele efeito "uau" que prende o olho — na marca do cliente, com performance em primeiro lugar.
  Ensina antes o que faz um site ser foda de verdade. Use quando a pessoa pedir "site com motion",
  "landing com 3D", "efeito wow", "site tipo awwwards", "página animada", "hero impressionante".
  Para uma LP de conversão simples e rápida, use /landing-page.
---

# /site-foda — site premium com motion + 3D (skill-bandeira do DutyX)

A frente mais impressionante do DutyX. Segue a **Lei**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. Orquestra vários motores. Visual sempre da marca do cliente (`_contexto/marca.md`).

## Motores (orquestração)
- `claude-design` / `frontend-design` — estrutura e alta fidelidade visual.
- `gsap` (skill global) — animação e **ScrollTrigger** (o coração do efeito).
- **3D:** Spline (mais fácil, embed) ou Three.js (mais poderoso) — usar leve e só quando servir.
- `hyperframes` — preview/render quando precisar mostrar em vídeo.
- **Reforço opcional via `find-skills`:** existem skills validadas de scroll/motion pra puxar como referência e adaptar (NÃO usar cru, NÃO injetar marca de terceiro): `eng0ai/eng0-template-skills@gsap-awwwards-website`, `secondsky/claude-skills@motion`, `github/awesome-copilot@gsap-framer-scroll-animation`. Use só pra acelerar técnica de animação.

## Antes de tudo
Leia `_contexto/negocio.md`, `_contexto/marca.md`, `_contexto/estrategia.md`.

## 1. O QUÊ (ensina — não pule)
Conduza pela lição `_aprenda/site-foda.md`, curto. O que a pessoa TEM que entender:
- Foda = movimento com **intenção** + storytelling no scroll, não "mais efeito".
- **Performance é rei:** site lindo e lento converte menos. 3D pesado mata o mobile.
- 3D só quando serve (mostrar produto, atmosfera) — senão corta.

## 2. O PORTÃO (confirma)
2-3 perguntas que checam entendimento e definem o escopo:
- "Esse efeito vai servir pra contar sua história/vender — ou é só pra impressionar? Me diz o que o site precisa fazer a pessoa sentir e fazer."
- "Tem produto/objeto que faz sentido em 3D, ou o motion é mais pra atmosfera e revelações no scroll?"
- "A maior parte do seu público abre no celular? (define o quanto a gente pode pesar)"
Se a resposta indicar que 3D não serve, seja honesto: "no teu caso, motion no scroll resolve e fica rápido — 3D só ia pesar." Defenda a performance.

## 3. O COMO (constrói)
1. Confirme a rota em 1 linha (motores que vai usar).
2. Construa primeiro uma BASE sólida (estrutura + copy + hierarquia) — a mesma anatomia de `_blocos/landing-page/estrutura.md`. Motion é camada por cima.
3. Adicione motion com GSAP/ScrollTrigger seguindo os presets de `_blocos/site-foda/motion-presets.md` (revelar no scroll, parallax sutil, hover delicado). Anime só transform/opacity (liso e leve).
4. Se for usar 3D, prefira Spline leve; carregue de forma que não trave a primeira dobra; considere desligar/simplificar no mobile.
5. Salve em `saidas/sites/<nome>-<data>/index.html`.
6. **Confira a performance e o visual:** tire screenshot (pode usar `09_Automacoes_IA/screenshot.mjs` do vault) e cheque carregamento. Avise se algo pesar.

## 4. O FECHO (aprende)
Pergunte o que achou. Registre preferências de estilo/motion no `_contexto/marca.md` e o trabalho no `_contexto/historico.md`.

## Checklist antes de entregar
- [ ] A base (mensagem + CTA) está clara mesmo SEM os efeitos?
- [ ] Motion tem propósito (revela/guia/dá feedback), não é aleatório?
- [ ] Anima transform/opacity (roda liso)?
- [ ] 3D só onde serve, e leve no mobile?
- [ ] Testado/pensado pra celular e carregamento rápido?
- [ ] Visual da marca do CLIENTE?
- [ ] Salvo em `saidas/sites/`?

## Quando mandar pra outra frente
- Quer só uma LP de conversão rápida (sem firula) → `/landing-page`.
- Quer levar gente pro site → `/trafego`.
