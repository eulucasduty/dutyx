# mcp.template.json — pra que serve (leia antes de mexer)

**Spoiler: você quase certamente NÃO precisa desse arquivo.** Os conectores do arsenal (Windsor, Meta, Higgsfield, Notion) são nativos do Claude — ligam em **Conectores → Novo conector → fazer login**, sem editar arquivo nenhum. E JSON não aceita comentário, por isso a explicação mora aqui, não lá dentro.

O template só serve pra um caso: **rodar um servidor MCP próprio/local** (coisa de quem já programa ou tá seguindo um tutorial específico).

## Como usar (só nesse caso raro)

1. Copia o `setup/mcp.template.json` pra **raiz da pasta do DutyX** com o nome **`.mcp.json`** (com o ponto na frente).
2. O template traz **um exemplo de cada tipo** — fica com o que você precisa e **apaga o outro**:
   - `meu-mcp-local` (`"type": "stdio"`): um servidor que roda no seu PC — troca o `command`/`args` (o comando que sobe ele) e, se precisar de chave, o valor em `env`.
   - `meu-mcp-remoto` (`"type": "http"`): um servidor na internet, por URL — troca a `url` e, se ele pedir chave, o valor em `headers`. (Sem chave? Apaga o bloco `headers` inteiro.)
3. Abre o Claude Code na pasta — ele detecta o `.mcp.json` e pede pra você aprovar o servidor.

O formato é o oficial do Claude Code; cada servidor é uma entrada com nome dentro de `mcpServers`.

## Segurança (regra dura)

O `.mcp.json` preenchido pode conter chave/segredo. Ele **já está no `.gitignore`** — nunca tire de lá, nunca commite, nunca cole a chave em outro arquivo. Se vazou uma chave, revoga ela no serviço de origem na hora.

Na dúvida, pergunta pro Claude: "preciso do mcp.template.json pra alguma coisa?" — a resposta pra maioria é não.
