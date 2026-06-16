---
name: landing-page
description: >
  Constrói uma landing page que converte, do zero, na marca de quem usa o DutyX. Ensina primeiro
  o que faz uma LP vender (anatomia, tipografia, estrutura) e só depois constrói. Use quando a pessoa
  pedir "landing page", "página de venda", "página de captura", "LP", "página pro meu produto".
  Para site com motion/3D/efeito wow, use a frente /site-foda.
---

# /landing-page — página que converte (frente DutyX)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. Motor visual: a skill global `claude-design`. O visual é o **da marca do cliente** (lê `_contexto/marca.md`), nunca cores fixas.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, pra quem), `_contexto/marca.md` (tom + visual) e `_contexto/estrategia.md` (objetivo).

## 1. O QUÊ (ensina — não pule)
Conduza a pessoa pela lição `_aprenda/landing-page.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- LP tem UM objetivo só (uma ação).
- A anatomia: herói com promessa+CTA na primeira dobra → dor → virada → prova → oferta+preço+garantia → FAQ → CTA final.
- Beleza serve à conversão, não o contrário.
Não despeje a lição inteira — pegue os pontos que importam pro caso dela.

## 2. O PORTÃO (confirma)
Faça 2-3 perguntas que ao mesmo tempo checam entendimento e coletam o que precisa pra construir:
- "Qual é a ÚNICA ação que essa página tem que fazer a pessoa tomar? (comprar / deixar contato / agendar)"
- "Qual a promessa principal — o que a pessoa ganha? E qual a maior dor dela?"
- "Que prova você tem? (depoimento, print, número, antes/depois)"
Só siga pro como depois das respostas. Se faltar prova, oriente como contornar (ex: garantia forte, autoridade, demonstração) — não invente prova falsa.

## 3. O COMO (constrói)
1. Confirme em 1 linha a rota: "vou usar o `claude-design` como motor e montar na sua marca."
2. Monte a copy seguindo a anatomia, no **tom do cliente** (de `_contexto/marca.md`), com a estrutura de `_blocos/landing-page/estrutura.md`.
3. Gere o HTML/CSS de alta fidelidade com `claude-design`, aplicando as cores/fontes da marca do cliente (ou um default elegante se ela estiver "no zero", avisando).
4. Salve em `saidas/landing-pages/<nome>-<data>/index.html`.
5. Ofereça conferir o resultado (screenshot) e ajustar.

## 4. O FECHO (aprende)
Pergunte o que ela achou. Se ela ajustar algo de gosto/marca recorrente, ofereça salvar em `_contexto/marca.md`. Anote no `_contexto/historico.md` o que foi feito.

## Checklist antes de entregar
- [ ] Herói tem promessa + CTA na primeira dobra?
- [ ] Uma ação só, clara?
- [ ] Tem prova?
- [ ] Visual é da marca do CLIENTE (não cores do Lucas)?
- [ ] Copy no tom do cliente, sem cara de guru?
- [ ] Salvo em `saidas/landing-pages/`?

## Quando mandar pra outra frente
- Quer motion/3D/efeito impressionante → `/site-foda`.
- Quer mandar gente pra essa página → `/trafego`.
