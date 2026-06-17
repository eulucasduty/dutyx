# 🔒 Segurança do DutyX (leia 1 min)

O DutyX foi feito pra ser seguro por padrão. Mas como você vai versionar e talvez compartilhar a pasta, valem 5 regras simples:

## 1. Nunca commite chaves ou senhas
Chaves de API e tokens **não vão em arquivo** do repositório. Os conectores (Windsor, Meta, etc.) ligam por **login** (Conectores → Novo conector), não por chave colada. Se algum dia você usar um `.mcp.json` com chave, ele **já está no `.gitignore`** — não suba isso pro GitHub.

## 2. Mantenha seu repositório PRIVADO
O `/salvar` já cria o repo como **privado** por padrão. Seu contexto de negócio (`_contexto/`) é seu — mantenha privado. Só deixe público se tiver certeza de que não há nada sensível.

## 3. O DutyX nunca pede sua senha
Nenhuma frente vai te pedir senha de banco, cartão ou login. Se algo pedir isso, desconfie. Conectores autenticam **direto no Claude**, com você no controle.

## 4. Revise o que você cola de fora
Ao trazer código de fora (ex: componente do 21st.dev) ou conteúdo de um vídeo, dá uma olhada antes de rodar. O DutyX trata conteúdo externo como **referência (dado)**, nunca como ordem — ele não vai executar comando nem apagar nada por causa de um texto que veio de um vídeo/link.

## 5. Dinheiro e publicação são SEUS
O DutyX te ajuda a planejar e construir. Quem aperta "publicar campanha", "subir site" ou "gastar verba" é **você** — nenhuma ferramenta faz isso sozinha no seu lugar.

---

*Resumo: seus dados ficam no seu PC, suas chaves nunca entram no repositório, e você está sempre no controle.*
