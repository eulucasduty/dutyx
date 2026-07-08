---
name: atualizar
description: >
  Revisa a pasta e reconcilia a memória (_contexto/) com a realidade atual do negócio. Detecta o que
  mudou (oferta nova, cliente novo, foco diferente, arquivos recentes) e propõe ajustes na memória.
  Use quando a pessoa disser "atualizar", "minha memória tá desatualizada", "mudou meu foco/negócio",
  ou quando você suspeitar que o contexto envelheceu.
---

# /atualizar — manter a memória viva

A memória do DutyX (`_contexto/`) só serve se estiver atual. Esse comando faz uma varredura e propõe correções — sempre com aprovação da pessoa, nunca mudando à força.

## O que fazer

0. **Tem memória pra reconciliar?** Se o `_contexto/` ainda for o modelo com ⏳, não tem o que atualizar — diga "a gente ainda nem se conheceu; roda `/instalar` primeiro" e pare.
1. **Levante a realidade:** olhe o que existe na pasta `saidas/`, o que foi feito recentemente, e o conteúdo atual de `_contexto/negocio.md`, `marca.md`, `estrategia.md`, `historico.md`.
2. **Compare** com o que a memória diz. Procure divergências:
   - Negócio/oferta/cliente que mudou e não foi atualizado (inclusive preço/ticket e canais).
   - Foco/gargalo que claramente já não é o mesmo (ex: o histórico mostra que a pessoa já resolveu aquilo).
   - **Meta de 90 dias vencida ou batida** — se o prazo passou (ou o número já foi), proponha renovar com o `/planejamento`.
   - Marca/tom que evoluiu nos trabalhos recentes.
   - Perfil no `CLAUDE.md` (bloco entre os marcadores `dutyx:perfil`) que não bate mais com a realidade (ex: o vibecoder virou dono de agência).
3. **Proponha as mudanças com evidência:** "Reparei que você fez 3 landing pages de [nicho] esse mês, mas sua estratégia ainda diz que o foco é [outra coisa]. Atualizo?"
4. **Só aplique com o "sim".** Edite a linha específica, sem reformatar o arquivo inteiro. Mostre o que mudou.
5. **Se mudou algo, registre:** 1 entrada curta no `_contexto/historico.md` (formato padrão, no topo) — "memória reconciliada: o que mudou". Se não mudou nada, não registre.

## Tom
Útil e discreto, como um sócio que percebeu que algo mudou. Não invente divergência onde não há — se estiver tudo coerente, diga "tá tudo batendo, sua memória tá em dia" e pare.
