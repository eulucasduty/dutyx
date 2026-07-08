---
name: vendas
description: >
  Cria proposta e copy de venda no tom da marca de quem usa o DutyX, e ajuda a quebrar objeção e fechar.
  Ensina primeiro como vender de verdade (diagnóstico antes de oferta, resultado em vez de tarefa,
  ancoragem de preço, quebra de objeção, escassez honesta) e só depois escreve — com blocos prontos de
  proposta, banco de objeções e follow-up. Use quando a pessoa pedir "proposta", "orçamento", "copy de
  venda", "texto pra fechar cliente", "quebrar objeção", "o cliente disse que tá caro", "como respondo
  esse lead", "follow-up de venda", "pedir depoimento". Pra conduzir a CONVERSA no WhatsApp (etapa por
  etapa até fechar), a frente é a /whatsapp.
---

# /vendas — proposta, objeção e fechamento (frente DutyX)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. O fluxo natural da frente é **diagnóstico → proposta → objeção → fechamento** — identifique em qual etapa a pessoa está e entre por ela. O texto sai no **tom da marca do cliente** (`_contexto/marca.md`), nunca no do Lucas.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, pra quem, ticket), `_contexto/marca.md` (tom) e `_contexto/estrategia.md` (foco, gargalo). Se o negócio estiver "no zero" nesses arquivos, pergunte no PORTÃO — não invente o que ela vende. **Se a oferta em si não existe (promessa, preço, garantia indefinidos), o problema vem antes da venda → `/oferta`.**

## 1. O QUÊ (ensina — não pule)
Conduza pela lição `_aprenda/vendas.md` em conversa curta. O essencial:
- Vender é **diagnóstico, não empurro** — entenda a dor ANTES de oferecer.
- Proposta vende **resultado** (a transformação), não **tarefa** (o entregável).
- **Ancoragem:** o preço só assusta sem referência — mostre o custo do problema ANTES do número. Nunca solte preço no início da conversa.
- Objeção é "ainda não me convenci", não "não". As clássicas têm resposta pronta no banco.
- **Follow-up com motivo** fecha a maioria das vendas; "e aí, pensou?" espanta.
- Escassez só se for **honesta** — a falsa queima a confiança pra sempre.
Pegue o que importa pro caso (proposta nova ≠ objeção de um lead específico ≠ follow-up parado).
Se a pessoa pedir pra pular ("só faz"), aplique a regra dos 30 segundos do CLAUDE.md: dê o essencial em uma frase antes de construir.

## 2. O PORTÃO (confirma)
2-3 perguntas que checam entendimento e coletam o que falta pra escrever:
- "Qual transformação esse cliente tá comprando? (não o serviço — o que muda na vida dele)"
- "Qual a maior dor dele, e quanto ela custa por mês? (essa é a âncora do preço)"
- "Que prova você tem? (resultado de cliente, print, número, garantia)" — sem prova, oriente garantia/demonstração; **nunca invente depoimento**.
Se for objeção: "qual foi a frase EXATA dele?" e "ele viu o valor antes do preço?". Se for follow-up: "quando foi o último contato e o que ficou combinado?". Só siga depois das respostas.

## 3. O COMO (constrói)
Confirme a rota em 1 linha e construa a etapa certa, sempre no tom do cliente:
1. **Proposta** → preencha `_blocos/vendas/proposta.md` (diagnóstico com as palavras do cliente → plano em 3 passos → resultado esperado honesto → investimento com âncora → garantia → próximo passo com prazo real). Cabe numa tela.
2. **Objeção** → identifique qual das 5 do banco `_blocos/vendas/objecoes.md` ("tá caro", "vou pensar", "depois te chamo", "sócio/cônjuge", "já tentei e não deu"), aplique o princípio e adapte a resposta modelo (tom leve ou direto, conforme a marca). Máximo 2 tentativas de quebra.
3. **Follow-up e depoimento** → use `_blocos/vendas/follow-up.md`: cadência d+1/d+3/d+7 com motivo em cada mensagem, lista morna depois do silêncio, e o script de coleta de prova social no pico da alegria.
4. **Copy de venda** (DM/anúncio/página) → hook na dor → virada → prova → oferta ancorada → CTA com escassez honesta.
5. Salve em `saidas/vendas/<cliente-ou-oferta>-<data>.md` (depoimentos em `saidas/vendas/depoimentos.md`). Ofereça revisar o tom junto.
**Se a venda acontece numa conversa de WhatsApp** (lead respondendo, ida e volta em tempo real), o material sai daqui — mas a condução da conversa, etapa por etapa até o fechamento, é a `/whatsapp`. Avise e mande pra lá.

## 4. O FECHO (aprende)
Pergunte o que ela achou. Ajuste recorrente de tom/preço ("apresento sempre em parcela", "não uso emoji") → ofereça salvar em `_contexto/marca.md` ou `_contexto/negocio.md`. **Objeção que se repete em todo lead** → registre em `_contexto/estrategia.md` (é sinal de oferta/âncora, não de lead ruim). Anote em `_contexto/historico.md` o que foi feito e o follow-up agendado (o `/abrir` lembra vocês no d+1/d+3/d+7).

## Checklist antes de entregar
- [ ] Abre pelo cliente e pela transformação — não por "eu faço"?
- [ ] Vende resultado, não tarefa?
- [ ] O valor (custo do problema) aparece ANTES do preço?
- [ ] Resultado esperado é honesto (faixa/critério, sem promessa mágica)?
- [ ] Tem prova ou garantia real derrubando a desconfiança?
- [ ] Objeção tratada com o princípio do banco (não improviso)?
- [ ] Follow-up tem motivo em cada mensagem e para na 3ª?
- [ ] Termina com UM próximo passo claro e prazo verdadeiro?
- [ ] Tom é o da marca do CLIENTE, sem cara de guru?
- [ ] Salvo em `saidas/vendas/`?

## Quando mandar pra outra frente
- A oferta em si não existe (promessa/preço/garantia) → `/oferta`.
- A conversa acontece no WhatsApp e precisa ser conduzida ao vivo → `/whatsapp`.
- Precisa de uma página pra hospedar a oferta → `/landing-page`.
- Precisa de mais lead entrando → `/trafego`.
- O conteúdo que aquece antes da venda → `/carrossel` ou `/roteiro-video`.
