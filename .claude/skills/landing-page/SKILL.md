---
name: landing-page
description: >
  Constrói uma landing page que converte, do zero, na marca de quem usa o DutyX. Ensina primeiro
  o que faz uma LP vender (anatomia, tipografia, estrutura) e só depois constrói. Use quando a pessoa
  pedir "landing page", "página de venda", "página de captura", "LP", "página pro meu produto".
  Para site com motion/3D/efeito wow, use a frente /site-foda. Se a oferta ainda não existe
  (sem promessa/preço/garantia), passe antes pela frente /oferta.
---

# /landing-page — página que converte (frente DutyX)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. **Motor de design: a skill global `claude-design`** (é ela que gera o visual de alta fidelidade; se não estiver disponível, siga os princípios de `_blocos/site-foda/design-tokens.md` direto — não trave). O visual é o **da marca do cliente** (lê `_contexto/marca.md`), nunca cores fixas.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, pra quem), `_contexto/marca.md` (tom + visual) e `_contexto/estrategia.md` (objetivo).

## 1. O QUÊ (ensina — não pule)
Conduza a pessoa pela lição `_aprenda/landing-page.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- LP tem UM objetivo só (uma ação) — e ela nasce de uma OFERTA pronta, não o contrário.
- A anatomia: herói com promessa+CTA na primeira dobra → dor → virada → prova → oferta+preço+garantia → FAQ → CTA final.
- Objeção se responde na página inteira (garantia = medo, prova = desconfiança, mecanismo = "funciona pra mim?"), não só no FAQ.
- Urgência só se for verdade; formulário mínimo (nome + WhatsApp).
Não despeje a lição inteira — pegue os pontos que importam pro caso dela.
Se a pessoa pedir pra pular ("só faz"), aplique a regra dos 30 segundos do CLAUDE.md: dê o essencial em uma frase antes de construir.

## 2. O PORTÃO (confirma) — em duas partes

**Portão A — a oferta existe?** Antes de qualquer pixel:
- "Qual a promessa — o que a pessoa GANHA, em uma frase?"
- "Quanto custa e por que esse preço?"
- "Tem garantia? Qual?"
Se ela titubear em 2 dessas → **pare e mande pra `/oferta`**: "cara, LP é a vitrine da oferta — sem oferta pronta a gente faz uma página bonita que não vende. Bora montar a oferta em `/oferta` (é rápido) e volta aqui com ela na mão." Não construa LP de oferta que não existe.

**Portão B — a página:**
- "Qual é a ÚNICA ação dessa página? (comprar / deixar contato / agendar / chamar no WhatsApp)"
- "Qual a maior dor de quem chega nela?"
- "Que prova você tem? (depoimento, print, número, antes/depois)"
Se faltar prova, oriente o contorno (garantia forte, autoridade, demonstração) — nunca invente prova falsa. Não tem depoimento ainda? A `/vendas` te ajuda a coletar (script pronto em `_blocos/vendas/follow-up.md`).

## 3. O COMO (constrói)
1. Confirme em 1 linha: "vou usar o `claude-design` como motor e montar na sua marca."
2. Monte a copy ANTES do design, no tom do cliente: anatomia de `_blocos/landing-page/estrutura.md` + fórmulas e exemplos preenchidos de `_blocos/landing-page/copy-exemplos.md`. Mostre a copy pra ela aprovar.
3. Gere o HTML/CSS de alta fidelidade com `claude-design`, nas cores/fontes da marca (ou um default elegante se ela estiver "no zero", avisando). Toque visual a mais (reveal, marquee)? Receitas leves em `_blocos/site-foda/efeitos-css-puro.md`. Foto real (herói, cena)? Geradores grátis em `setup/imagens.md`.
4. **Deixe a página pronta pra MEDIR:** placeholders comentados no `<head>` (`<!-- META PIXEL AQUI -->` / `<!-- GA4 AQUI -->`) e, se tiver formulário, uma tela/página de obrigado (`obrigado.html` ou estado pós-envio) — é nela que a conversão é medida. Quando a pessoa criar o pixel no `/trafego`, você cola o código no lugar.
5. Salve em `saidas/landing-pages/<nome>-<data>/index.html`.
6. Ofereça conferir (screenshot, celular primeiro) e ajustar.
7. Quer no ar? `setup/deploy.md` — o caminho leigo é **arrastar a pasta no Netlify Drop** (zero terminal).

## 4. O FECHO (aprende)
Pergunte o que ela achou. Ajuste de gosto/marca recorrente → ofereça salvar em `_contexto/marca.md`. Anote no `_contexto/historico.md` o que foi feito e o link se publicou.

## Checklist antes de entregar
- [ ] A oferta existia ANTES da página (promessa/preço/garantia respondidos ou veio de `/oferta`)?
- [ ] Herói tem promessa + CTA na primeira dobra? Uma ação só?
- [ ] Tem prova? Objeções respondidas ao longo da página (não só FAQ)?
- [ ] Urgência (se tiver) é VERDADE? Formulário pede só nome + WhatsApp?
- [ ] Visual é da marca do CLIENTE (não cores do Lucas)? Copy no tom dela, sem guru?
- [ ] Tem lugar reservado pro pixel no `<head>` e um "obrigado" pós-conversão (se tem formulário)?
- [ ] Abre rápido no celular? Salvo em `saidas/landing-pages/`?

## Quando mandar pra outra frente
- Não sabe promessa/preço/garantia → `/oferta` (antes de construir).
- Quer motion/3D/efeito impressionante → `/site-foda`.
- Quer mandar gente pra essa página → `/trafego` — mas antes a página precisa estar **NO AR** (`setup/deploy.md`) e, se a conversão acontece nela, com o **pixel colado** (tráfego sem medir conversão é dinheiro cego).
- Lead chegou e precisa fechar no chat → `/whatsapp`.
