---
name: planejamento
description: >
  Monta um plano de 90 dias com UMA meta clara, acha o gargalo que segura o crescimento, define a
  métrica-norte, e gera um calendário de conteúdo simples e a prioridade da semana. Ensina primeiro
  como se planeja de verdade (meta com número, gargalo, foco) e só depois constrói. Use quando a
  pessoa pedir "plano", "planejamento", "metas", "calendário de conteúdo", "por onde começar", "o que
  fazer essa semana", "me ajuda a organizar", "objetivo do trimestre" ou "prioridade".
---

# /planejamento — plano de 90 dias, calendário e prioridade (frente DutyX)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. Essa frente trabalha por **organização + análise**: em vez de visual, o produto é clareza — uma meta, um gargalo, um calendário, uma prioridade. Conecta direto com `_contexto/estrategia.md`.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, pra quem), `_contexto/estrategia.md` (foco, gargalo e prioridades já definidos) e `_contexto/historico.md` (o que já foi feito e onde parou). Se a `estrategia.md` já tiver meta/gargalo, **continue de onde parou** — não recomece do zero. Se estiver vazia, esse é o momento de preencher.

## 1. O QUÊ (ensina — não pule)
Conduza a pessoa pela lição `_aprenda/planejamento.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- Meta de verdade tem **número e prazo** — e é **uma só**.
- Existe **um gargalo** que segura o crescimento (descobre → segue → vira lead → compra); o esforço rende onde tá o gargalo.
- A **métrica-norte** é o único número que ela olha toda semana.
- Calendário tem que ser **sustentável**: melhor 3/semana pra sempre do que 10 e parar.
- Prioriza pelo que **ataca o gargalo**; o resto espera.
Não despeje a lição inteira — pegue os pontos que importam pro caso dela.
Se a pessoa pedir pra pular ("só faz"), aplique a regra dos 30 segundos do CLAUDE.md: dê o essencial em uma frase antes de construir.

## 2. O PORTÃO (confirma)
Faça 2-3 perguntas que ao mesmo tempo checam entendimento e coletam o que precisa pra montar o plano:
- "Se você só pudesse mover **UM número** nos próximos 90 dias, qual seria? (esse é o coração do plano)"
- "No caminho até a venda (te descobre → te segue → vira lead → compra), onde você sente que **vaza mais**? Esse é seu gargalo."
- "Quanto tempo de conteúdo você consegue sustentar **toda semana**, mesmo num mês corrido? (pra calibrar o calendário no que é real)"
Só siga pro como depois das respostas. Se a meta vier vaga, ajude a transformar em número + prazo antes de seguir. Se ela quiser atacar tudo, segure: escolham UM gargalo.

## 3. O COMO (constrói)
1. Confirme em 1 linha a rota: "vou organizar isso num plano de 90 dias, com calendário e a prioridade dessa semana."
2. Se for útil pra calibrar (ex: benchmark de ritmo, ideias de pauta de um nicho), pesquise na web — se a busca estiver disponível. Se não estiver, siga só com o contexto dela: o plano é sempre ancorado no negócio DELA, não em teoria genérica.
3. Monte o plano preenchendo o modelo `_blocos/planejamento/plano-90-dias.md`: meta única (com o número de HOJE e o alvo), gargalo com evidência, métrica-norte, **3 alavancas** (cada uma apontando a frente do DutyX que executa), calendário semanal no ritmo que ela confirmou, prioridade da semana 1, ritual de revisão com dia fixo e os marcos de 30/60/90.
4. Escreva no **tom do cliente** (de `_contexto/marca.md`), direto e sem firula de guru.
5. Salve em `saidas/planejamento/plano-90d-<data>.md`.
6. Ofereça transformar a prioridade da semana numa lista de tarefas, e revisitar o plano daqui a 7 dias (deixe isso anotado no `_contexto/historico.md` pro `/abrir` cobrar).

## 4. O FECHO (aprende)
Pergunte o que ela achou e se a meta/gargalo fazem sentido. Como esse plano **define o foco do negócio**, ofereça gravar a meta, o gargalo e a métrica-norte em `_contexto/estrategia.md` — é isso que faz as outras frentes (tráfego, carrossel, landing) puxarem na mesma direção. Anote no `_contexto/historico.md` o que foi decidido.

## Checklist antes de entregar
- [ ] A meta tem número E prazo?
- [ ] É UMA meta só (não três competindo)?
- [ ] O gargalo está nomeado e justificado?
- [ ] Tem uma métrica-norte única (com o valor de hoje anotado)?
- [ ] As 3 alavancas atacam O gargalo (e cada uma aponta a frente que executa)?
- [ ] O calendário é sustentável (no ritmo que a pessoa confirmou, não o ideal)?
- [ ] A prioridade da semana ataca o gargalo?
- [ ] O ritual de revisão tem dia fixo?
- [ ] Salvo em `saidas/planejamento/`?
- [ ] Ofereci atualizar `_contexto/estrategia.md`?

## Quando mandar pra outra frente
- Gargalo é **alcance/leads** e ela quer executar → `/trafego`, `/carrossel`, `/roteiro-video`.
- Gargalo é **venda** (lead chega e não compra) → `/vendas`; se a conversa trava no WhatsApp → `/whatsapp`.
- Gargalo é a **oferta** (ninguém entende o que ela vende, ou o preço não para em pé) → `/oferta`.
- Precisa de uma página pro objetivo do plano → `/landing-page`.
- Quer os números reais do perfil pra achar o gargalo com dado → `/metricas`.
