---
name: abrir
description: >
  Abre a sessão de trabalho no DutyX. Carrega o contexto do negócio (_contexto/) e o histórico,
  e devolve um "bom dia" curto: onde a pessoa parou e o que dá pra atacar hoje. Use quando começar
  uma sessão ou quando a pessoa disser "abrir", "bom dia", "vamos trabalhar", "o que faço hoje".
---

# /abrir — começo de sessão

Carrega tudo que o DutyX sabe sobre a pessoa e entrega um norte do dia em poucos segundos. É o ritual que faz o sistema parecer que "lembra de você".

## O que fazer

1. Leia `_contexto/negocio.md`, `_contexto/marca.md`, `_contexto/estrategia.md` e `_contexto/historico.md`. **Se existirem**, leia também `_contexto/arsenal.md` (o que tá conectado — vem do painel/sonda) e dê uma olhada em `_contexto/referencias/` (referências que a pessoa colou no painel, por frente) — use os dois sem anunciar, pra não oferecer o que já tá ligado nem pedir referência que ela já deu.
2. Se o `_contexto/` ainda estiver vazio (modelo com ⏳), não siga — diga: "Parece que a gente ainda não se conhece. Roda `/instalar` primeiro que é rapidinho." e pare.
3. **Radar silencioso** (não anuncie que checou):
   - Se a última entrada do `historico.md` tiver um pendente/próximo passo explícito, ele vira a PRIMEIRA opção do foco de hoje ("a gente combinou de X — bora?").
   - Rode `git status --short` (se a pasta for repo): se tiver bastante coisa não salva (vários arquivos, dias acumulados), inclua 1 linha só: "tem trabalho não salvo aqui — depois manda um `/salvar`." Sem drama, sem travar o bom dia.
4. Entregue um **bom dia operacional** curto (máx. 5 linhas), no tom do Lucas:
   - Uma saudação rápida usando o nome/negócio da pessoa.
   - **Onde paramos:** a última coisa do `historico.md` (se houver).
   - **Foco de hoje:** 1 sugestão concreta amarrada ao pendente do histórico ou ao gargalo da `estrategia.md` ("seu gargalo é X, então hoje eu atacaria com a frente Y").
   - **Pergunta de partida:** "bora nisso ou você tem outra prioridade hoje?"

## Tom
Curto, direto, animado mas sem forçar. Não despeje tudo que leu — só o que importa pra pessoa decidir o que fazer agora.

## O par desse comando
Quando a pessoa der sinal de que vai parar, é o `/fechar` que encerra: ele escreve a entrada datada no `historico.md` — a próxima linha do "onde paramos" que VOCÊ vai ler amanhã.

## Exemplo de formato (adaptar ao contexto real)
> Bom dia, [nome]. 👇
> **Onde paramos:** [última linha do histórico].
> **Hoje eu atacaria:** [frente sugerida] — porque seu gargalo é [gargalo].
> Bora nisso ou tem outra prioridade?
