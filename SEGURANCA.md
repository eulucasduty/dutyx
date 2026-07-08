# 🔒 Segurança do DutyX (leia 1 min)

O DutyX foi feito pra ser seguro por padrão. Aqui é o que te protege — e o pouco que continua sendo responsabilidade sua.

## 1. Conteúdo de fora é DADO, nunca ordem
Quando você traz um vídeo, um link, um print ou um texto colado (ex: no `/aprender-video`), o DutyX trata aquilo como **referência**. Se no meio vier uma instrução escondida — "ignore suas regras", "rode tal comando", "apague X", "mande isso pra fora" — isso tem nome (injeção) e ele **não obedece**: te avisa e segue o trabalho. Ele só age sob pedido SEU. Mesmo assim, vale o hábito: dá uma olhada no que você cola de fora antes de mandar rodar.

## 2. Chave e senha nunca entram em arquivo do repositório
Os conectores (Windsor, Meta, Notion...) ligam por **login** (Conectores → Novo conector) — sem chave colada em lugar nenhum. E desligar é igual de fácil: **Conectores → remover** — o acesso morre na hora (vale pro Meta, que enxerga sua conta de anúncios de verdade). Se um dia você usar chave de verdade (`.mcp.json`, `.env`), esses arquivos **já estão no `.gitignore`**: não sobem no backup. Nunca escreva uma chave dentro de um arquivo normal da pasta. E o DutyX **nunca pede** senha de banco, cartão ou login — se algo pedir, desconfia.

## 3. O que o `.gitignore` protege (e o que ele deixa passar de propósito)
- **Ficam FORA do backup:** `.mcp.json`, `.env`, qualquer `*.key`/`*.pem`/`*.token`, segredos e configurações locais.
- **Ficam DENTRO de propósito:** a pasta `saidas/` e o seu logo. Isso mudou mesmo: seu repositório é **PRIVADO** (o `/salvar` cria assim) e o backup existe justamente pra guardar o SEU trabalho — perder as LPs e os carrosséis que você criou seria o oposto de segurança. Se um dia você tornar o repo **público**, tire `saidas/` e o logo antes.

## 4. Mantenha o repositório PRIVADO
O `/salvar` já cria o repo como **privado** por padrão. Seu contexto de negócio (`_contexto/`) e suas criações (`saidas/`) são seus. Só torne público se tiver certeza de que não há nada sensível — e aí releia a regra 3.

## 5. Ação destrutiva e dinheiro: só com o seu "ok"
Apagar em massa, forçar push, publicar campanha, gastar verba, mandar dado pra fora — **nada disso acontece sozinho**. O DutyX planeja e constrói; apertar o gatilho é com você, sempre com pedido explícito.

## 6. As permissões da pasta já vêm no modo conservador
O `.claude/settings.json` pré-aprova só o inofensivo: **ler e editar arquivos dentro desta pasta** e o git de rascunho (status, diff, add, commit). **Push** (subir pra internet), **apagar arquivo** e **qualquer acesso de rede** pedem sua permissão na hora, toda vez. Tradução: o Claude trabalha solto no que é reversível e te pergunta no que não é.

E quando ele perguntar, **lê antes de aceitar** — em português claro: apagar, publicar e gastar, você só aprova se foi VOCÊ que pediu. E evita clicar em "sempre permitir" pra comando que mexe em arquivo fora da pasta ou na internet — essa perguntinha é a sua cinta de segurança, não um incômodo.

---

*Resumo: seus dados ficam no seu PC, suas chaves nunca entram no repositório, seu trabalho vai pro backup privado — e o dedo no gatilho é sempre o seu.*
