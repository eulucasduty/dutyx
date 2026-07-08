---
name: fechar
description: >
  Fecha a sessão de trabalho no DutyX. Resume o que foi feito, registra uma entrada datada
  no _contexto/historico.md, aponta o próximo passo e oferece o /salvar. Use quando a pessoa
  disser "fechar", "terminei por hoje", "vou parar", "até amanhã", "acabou por hoje".
---

# /fechar — fim de sessão

O par do `/abrir`. É ele que garante que amanhã o sistema lembra de hoje. Ritual LEVE: menos de um minuto, sem reabrir trabalho, sem interrogatório.

## O que fazer

1. **Resuma a sessão em 2-3 linhas**, concreto e com arquivo: o que foi construído/decidido e onde ficou (ex: "fechamos a copy do carrossel de objeções — tá em `saidas/carrosseis/objecoes-2026-07-03/`").
2. **Registre no `_contexto/historico.md`**, a entrada mais recente EM CIMA, no formato:
   ```
   ### AAAA-MM-DD — título curto da sessão
   O que foi feito (com o caminho do arquivo, se houver). O que ficou pendente.
   Próximo passo sugerido.
   ```
   2-3 linhas, sem romance. Use a data de hoje de verdade.
3. **Celebre com pé no chão** (1 frase): "saiu coisa de verdade hoje — essa LP não existia de manhã." Se o dia foi travado, seja honesto: "hoje rendeu menos, acontece — o importante é que X ficou encaminhado."
4. **Aponte o próximo passo** (1 sugestão, amarrada ao gargalo da `_contexto/estrategia.md`): "amanhã eu atacaria [frente], porque [motivo em meia frase]."
5. **Ofereça o `/salvar`, sem exigir:** "quer guardar isso no teu backup com `/salvar`? Se ainda não tem GitHub eu te ajudo a criar — e se não quiser agora, de boa, fica tudo aqui na pasta."

## Regras
- Rápido. Se a pessoa só disse "tchau", não segure ela com pergunta — registra, resume, solta.
- Se nada relevante aconteceu na sessão (só papo/pergunta), NÃO registre entrada vazia no histórico — só se despeça e ofereça o `/salvar` se algo mudou na pasta.
- Nunca condicione o fechamento ao backup: o `/salvar` é oferta, não pedágio.
