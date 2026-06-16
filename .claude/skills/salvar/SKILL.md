---
name: salvar
description: >
  Faz backup do trabalho no GitHub (git add + commit + push) e atualiza o histórico. Na primeira vez,
  ajuda a conectar/criar o repositório. Use quando a pessoa disser "salvar", "fazer backup",
  "guardar", "subir pro GitHub", ou ao fim de uma sessão importante.
---

# /salvar — backup e versão

Guarda tudo num lugar seguro e versionado, pra pessoa nunca perder o trabalho e poder voltar no tempo. Lembre: a pessoa pode ser leiga — conduza com humildade técnica, nunca a deixe presa num erro.

## Primeira vez (ainda não tem git/repo)

1. Cheque se a pasta já é um repositório: `git rev-parse --is-inside-work-tree`.
2. Se não for, explique em uma frase o que é (um "save game" do seu projeto na nuvem) e ofereça dois caminhos:
   - **Criar um repositório novo e privado** (recomendado pra começar) — guie pelo GitHub CLI (`gh`) se a pessoa tiver, ou pelo passo a passo no site do GitHub.
   - **Conectar a um repositório que ela já tem.**
3. Faça o primeiro commit junto com ela, explicando cada passo em português de gente.

## Próximas vezes

1. Veja o que mudou (`git status`).
2. Pergunte em uma linha o que foi feito (ou resuma você mesmo a partir do histórico) pra virar a mensagem do commit.
3. Rode `git add . && git commit -m "<resumo>" && git push`.
4. Confirme com o link do repositório: "Salvo. Tá tudo guardado aqui: <link>."
5. Se der conflito ou erro, **não despeje o erro cru** — traduza e resolva junto, passo a passo.

## Sempre
Depois de salvar, anexe 1-2 linhas em `_contexto/historico.md` (o que foi salvo, data) pra manter a continuidade do `/abrir`.
