# 🚑 Socorro do dia 1 — o terminal cuspiu erro? Começa aqui

Você tá instalando o Claude Code ou baixando o DutyX e apareceu uma mensagem vermelha? Respira, cara. 90% dos travamentos do primeiro dia são um destes 7 — e todos têm conserto de 1 minuto. Acha embaixo a mensagem parecida com a sua e segue a receita.

**Regra de ouro antes de tudo:** instalou qualquer coisa (Node, git, ffmpeg)? **Fecha TODAS as janelas do terminal e abre de novo.** O terminal só enxerga programa novo quando nasce de novo — ele lê a lista de programas na hora que abre, não depois. Metade desta página se resolve com isso.

---

## 1. "npm não é reconhecido"

**Sintoma:** `npm : O termo 'npm' não é reconhecido como nome de cmdlet...` (ou em inglês: `'npm' is not recognized`).

**Causa:** o PowerShell que tá aberto nasceu ANTES do Node ser instalado — ele nem sabe que o Node existe.

**Solução:**
1. Fecha todas as janelas do PowerShell.
2. Abre de novo: menu Iniciar → digita "PowerShell" → Enter.
3. Testa: `node -v` — apareceu um número (tipo `v22.14.0`)? Roda de novo o `npm install -g @anthropic-ai/claude-code`.
4. Não apareceu número? Você ainda não tem o Node → pula pro item 3.

## 2. "a execução de scripts foi desabilitada neste sistema"

**Sintoma:** `npm.ps1 cannot be loaded because running scripts is disabled on this system` (ou "O arquivo npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema").

**Causa:** o Windows vem de fábrica com uma trava que impede o PowerShell de rodar scripts — e o npm usa um.

**Solução:**
1. Cola no PowerShell: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
2. Se ele perguntar, responde `S` (ou `Y`) e Enter.
3. Roda de novo o comando que tinha falhado.

Isso libera scripts confiáveis só pro SEU usuário — não abre porta pra nada. É configuração padrão de qualquer dev no Windows.

## 3. Não tem o Node

**Sintoma:** o item 1 não resolveu — `node -v` também dá "não é reconhecido".

**Causa:** o Node (o motor que roda o Claude Code) não tá instalado.

**Solução Windows:** cola no PowerShell: `winget install OpenJS.NodeJS.LTS` — ou baixa a versão **LTS** em https://nodejs.org e instala no next-next-next.
**Solução Mac:** baixa em https://nodejs.org, ou `brew install node` se você usa Homebrew.

Depois: **fecha e reabre o terminal** → `node -v` → apareceu o número, segue o jogo.

## 4. Instalou o Claude Code e "claude não é reconhecido"

**Sintoma:** o `npm install -g @anthropic-ai/claude-code` terminou sem erro, mas digitar `claude` dá "não é reconhecido".

**Causa:** a pasta onde o npm guarda os programas ainda não entrou no "catálogo de endereços" (PATH) do seu terminal.

**Solução:**
1. Fecha e reabre o PowerShell → tenta `claude` de novo. (Resolve quase sempre.)
2. Ainda não? Roda `npm config get prefix` — vai aparecer uma pasta (tipo `C:\Users\você\AppData\Roaming\npm`).
3. Menu Iniciar → digita "variáveis de ambiente" → abre → botão "Variáveis de Ambiente" → em "Path" (do seu usuário) → Editar → Novo → cola a pasta do passo 2 → OK em tudo.
4. Fecha e reabre o terminal → `claude`.

No Mac, o passo 1 (fechar e reabrir o Terminal) resolve praticamente sempre.

## 5. "git não é reconhecido"

**Sintoma:** `git : O termo 'git' não é reconhecido...` na hora de clonar o DutyX.

**Causa:** o git (o programa que baixa coisas do GitHub) não vem instalado no Windows.

**Solução Windows:** `winget install --id Git.Git -e` → **fecha e reabre o terminal** → `git --version`.
**Solução Mac:** digita `git --version` — o próprio Mac oferece instalar as "Command Line Tools"; aceita e espera.

**Atalho sem git:** dá pra baixar o DutyX como ZIP — na página do GitHub, botão verde **Code → Download ZIP** → extrai → abre o PowerShell dentro da pasta → `claude`. (Vale instalar o git depois com calma: o `/salvar` e o `/atualizar` usam ele pro seu backup.)

## 6. Instalou e o terminal continua "não achando"

**Sintoma:** você JÁ instalou (Node, git, ffmpeg...), o instalador disse sucesso — e o comando segue "não é reconhecido".

**Causa:** terminal aberto não relê a lista de programas. Ele precisa renascer.

**Solução:** fecha **todas** as janelas de terminal — inclusive o terminal de dentro do VS Code/Cursor, se estiver usando — e abre de novo. Persistiu? Reinicia o computador: resolve os casos teimosos do winget. Se nem assim, é o item 4 (PATH na mão).

## 7. Antivírus ou SmartScreen barrando

**Sintoma:** janela azul **"O Windows protegeu o computador"** na hora de rodar um instalador; ou o antivírus apaga/bloqueia um arquivo e acusa o node/claude.

**Causa:** o Windows desconfia de programa que ele ainda não conhece. Node, git e Claude Code são oficiais e seguros — desde que baixados do site oficial.

**Solução SmartScreen:** na janela azul, clica em **"Mais informações"** → **"Executar assim mesmo"**. Só faça isso com instalador que VOCÊ baixou do site oficial (nodejs.org, git-scm.com) — pra qualquer outro programa da vida, essa janela merece respeito.
**Solução antivírus:** abre o antivírus → Quarentena → restaura o arquivo → adiciona uma exceção pra pasta do DutyX. Se for o Windows Defender: Segurança do Windows → Proteção contra vírus → Histórico de proteção.

---

## Nada disso resolveu? Me descreve o erro que eu te desenrolo.

O jeito certo de pedir socorro (leva 30 segundos):

1. **Copia a mensagem vermelha inteira** — seleciona no terminal e Ctrl+C (ou manda um print).
2. Diz **qual comando** você rodou antes dela aparecer.
3. Cola no Claude: *"tava rodando [comando] e deu esse erro: [mensagem]"*.

Eu leio, te explico o que houve em português de gente e conserto junto com você. E se o Claude Code ainda nem abre no seu PC, cola o erro no **claude.ai** pelo navegador — é o mesmo cérebro, e ele conhece esta página.

Você nunca fica preso. Essa é a regra da casa.
