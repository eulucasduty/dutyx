---
name: salvar
description: >
  Faz backup do trabalho no GitHub da pessoa (git add + commit + push) e atualiza o histórico.
  Na primeira vez, checa git, identidade e remote, e cria/aponta um repositório PRIVADO dela.
  Use quando a pessoa disser "salvar", "fazer backup", "guardar", "subir pro GitHub",
  ou quando o /fechar oferecer o backup.
---

# /salvar — backup e versão

Guarda tudo num "save game" na nuvem, pra pessoa nunca perder o trabalho e poder voltar no tempo. Ela pode ser leiga: **um estado de cada vez, traduzindo cada erro, nunca a deixando presa.**

**O que ENTRA no backup:** tudo, incluindo `saidas/` (é o trabalho dela — o repo é PRIVADO, então pode e DEVE ir). **O que fica de fora:** chaves e segredos (`.env`, `.mcp.json` etc. — o `.gitignore` já cuida).

## A máquina de estados (siga NA ORDEM — cheque cada estado antes de avançar)

### Estado 1 — git instalado?
Rode `git --version`. Se der "não reconhecido"/"command not found":
- **Windows:** `winget install --id Git.Git -e` no PowerShell (ou baixar em git-scm.com, next-next-next). Depois **fechar e reabrir o terminal**.
- **Mac:** `xcode-select --install` (ou git-scm.com).
Explique em 1 frase ("git é o programa que tira as fotos do seu projeto") e confira de novo antes de seguir.

### Estado 2 — identidade configurada?
Rode `git config --get user.name` e `git config --get user.email`. Se algum vier vazio, pergunte nome e email (o mesmo do GitHub, se tiver) e rode:
`git config --global user.name "Nome"` e `git config --global user.email "email@exemplo.com"`.

### Estado 3 — pra onde aponta o remote?
Rode `git remote -v` e decida:
- **origin contém `eulucasduty/dutyx`** → é o repo do Lucas, de onde ela baixou. Ela NÃO consegue subir pra lá (e nem deve). Vá pro Estado 4 usando `git remote set-url`.
- **Não existe origin** → vá pro Estado 4 usando `git remote add`.
- **origin já é um repo DELA** → pule direto pro Estado 5.

### Estado 4 — criar/apontar o repo PRIVADO da pessoa
Explique em 1 frase: "vou criar um cofre privado seu no GitHub — só você vê."
- **Se tiver o `gh`** (`gh --version` responde): confira o login com `gh auth status` (se não estiver logado: `gh auth login`, opção navegador). Depois: `gh repo create meu-dutyx --private` e aponte: `git remote set-url origin https://github.com/USUARIO/meu-dutyx.git` (ou `git remote add origin ...` se não havia origin).
- **Se NÃO tiver o `gh`:** guie no site — github.com → botão **New** (repositório novo) → nome `meu-dutyx` → marcar **Private** → **NÃO** marcar "Add a README" → Create. Aí rode o mesmo `set-url`/`add` acima com a URL que o GitHub mostrar.
- **Sem conta GitHub?** Criar é grátis: github.com/signup (2 min). Espere ela terminar e retome daqui.
- **Não quer criar conta agora?** De boa: faça só o Estado 5 (commit local) e pule o push — "o save fica guardado no seu PC; quando quiser a cópia na nuvem, a gente liga o GitHub em 2 minutos." Nunca termine sem pelo menos o commit local e o histórico atualizado.

### Estado 5 — commit
1. `git status` pra ver o que mudou. **Bata o olho: se aparecer chave/token/senha em algo que vai subir, NÃO commite** — mova pra `.env`/`.mcp.json` (já ignorados) e avise (ver `SEGURANCA.md`).
2. Pergunte em 1 linha o que foi feito (ou resuma você mesmo) → vira a mensagem.
3. `git add .` e `git commit -m "resumo curto"`.

### Estado 6 — push
Primeira vez (ou se der erro de upstream): `git push -u origin main` (confira o nome do branch com `git branch --show-current` — pode ser `master`). Das próximas: `git push`. Confirme com o link: "Salvo. Tá guardado aqui: https://github.com/USUARIO/meu-dutyx".

## Erros comuns (e como desenrolar)

| Sintoma | Ação |
|---|---|
| "git não é reconhecido" / "command not found" | git não instalado (ou terminal aberto antes da instalação) → Estado 1; feche e reabra o terminal |
| "Please tell me who you are" | identidade vazia → Estado 2 (`git config --global user.name/email`) |
| "no upstream branch" | primeiro push sem destino → `git push -u origin main` (ou `master`) |
| Abriu uma janela pedindo login | é o Git Credential Manager, é NORMAL → loga com a conta do GitHub no navegador, uma vez só |
| "permission denied" / "403" ao dar push | origin aponta pro repo do Lucas ou de outra pessoa → Estado 3/4 (`git remote set-url origin <repo dela>`) |
| "rejected (fetch first)" | o repo na nuvem tem algo que a pasta não tem → `git pull origin main --rebase`, depois `git push` de novo |
| "repository not found" | URL errada ou repo não criado → confira a URL no GitHub e refaça o `set-url` |
| Não tem conta no GitHub | criar grátis em github.com/signup e voltar pro Estado 4 |

Nunca despeje o erro cru na pessoa: traduza, resolva junto, confirme que passou.

## Sempre, no fim
Anexe uma entrada datada em `_contexto/historico.md` (formato `### AAAA-MM-DD — título` + 1-2 linhas: o que foi salvo). É o que mantém a continuidade do `/abrir`.
