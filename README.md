# DutyX

> O sistema que te ensina e constrói o seu negócio com IA — dentro do Claude Code.

Você não baixa um curso. Você **instala um sistema** numa pasta e usa com o Claude Code. Ele te conhece, te ensina e constrói com você: oferta, landing page, site, tráfego, conteúdo, WhatsApp, métricas, vendas. Em minutos você sai do zero pro primeiro projeto na mão.

---

## Passo 1 — Ter o Claude Code (uma vez na vida)
É o "cérebro" que vai rodar o DutyX. Precisa de 3 coisas:
1. **Conta na Claude** ([claude.ai](https://claude.ai)) com um plano que libere o Claude Code (Pro/Max).
2. **Node.js** instalado (pesquisa "Node.js", baixa a versão LTS, next-next-next).
3. **O Claude Code** — abre o terminal (no Windows, "PowerShell"; no Mac, "Terminal") e cola:
   ```
   npm install -g @anthropic-ai/claude-code
   ```

> **Travou aqui?** Desce pra seção "🚑 Travou? Socorro rápido" no fim desta página — ou abre direto o `setup/socorro.md`. Você nunca fica preso.

---

## Passo 2 — Baixar o DutyX (escolhe um caminho)

### 🟠 Caminho A — Pelo Claude (mais fácil)
Abre o Claude Code em **qualquer pasta** (digita `claude` no terminal) e **cola isto**:

```
Clona o https://github.com/eulucasduty/dutyx.git na pasta atual,
entra na pasta dutyx e roda o /instalar.
```

O Claude baixa o DutyX, entra na pasta e já dispara a entrevista de setup. **Você só responde.** (Se o seu PC não tiver o git, ele te avisa — aí é instalar quando ele pedir, ou ir de Caminho C.)

### ⚙️ Caminho B — Pelo terminal (mais previsível)
Precisa do **git** instalado (se não tem: [git-scm.com](https://git-scm.com), baixa e next-next-next).
```
git clone https://github.com/eulucasduty/dutyx.git
cd dutyx
claude
```
Com o Claude Code aberto na pasta, digita `/instalar`.

### 📦 Caminho C — Sem git? Vai de ZIP
Zero terminal até o final:
1. Abre **github.com/eulucasduty/dutyx** no navegador.
2. Clica no botão **verde "Code" → "Download ZIP"**.
3. Extrai o ZIP (botão direito → "Extrair tudo") e abre a pasta extraída.
4. Abre o terminal **dentro dessa pasta** (no Windows: barra de endereço do Explorador → digita `powershell` → Enter), digita `claude` e depois `/instalar`.

> O git só vai fazer falta lá na frente, na hora do backup (`/salvar`) — e nessa hora o próprio Claude te ajuda a instalar. Não trava nada hoje.

---

## Passo 3 — Já era 🚀
O `/instalar` roda **uma vez**: te entrevista sobre o negócio (uns 5 min), monta sua memória e deixa tudo com a sua cara. Depois disso, o ciclo de todo dia é `/abrir` → trabalhar → `/fechar`:

- **Chegou pra trabalhar?** `/abrir` — ele lembra de tudo e te diz o que dá pra fazer hoje.
- **Quer construir?** Chama a frente: `/oferta`, `/landing-page`, `/site-foda`, `/trafego`, `/social-media`, `/carrossel`, `/roteiro-video`, `/whatsapp`, `/vendas`, `/planejamento`, `/metricas`.
- **Vai parar?** `/fechar` — registra onde você parou (é o que faz o `/abrir` de amanhã saber de hoje) e já oferece o backup.
- **Quer guardar?** `/salvar` — backup no seu GitHub **privado**, com tudo que você criou junto.
- **Quer o melhor resultado?** `/configurar` liga o arsenal grátis (opcional).

Guia completo de tudo que ele faz: abre o `GUIA.html` (dois cliques → navegador). Lista rápida: `_catalogo.md`.

---

## 🚑 Travou? Socorro rápido

90% dos travamentos do dia 1 são estes:

| O erro que apareceu | O que fazer |
|---|---|
| `npm não é reconhecido` | Fecha **todas** as janelas do PowerShell e abre de novo. O terminal só enxerga o Node quando nasce de novo. |
| `a execução de scripts foi desabilitada` | Trava de fábrica do Windows. Cola no PowerShell: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` → responde `S` → roda o comando de novo. |
| Instalou tudo e o `claude` não abre | Reabre o terminal e tenta de novo. Seguiu mudo? O `setup/socorro.md` tem o passo a passo completo. |
| O `claude` abre, mas responde genérico (sem boas-vindas do DutyX, `/instalar` não aparece) | Você abriu o Claude **fora** da pasta. Fecha, abre o terminal dentro da pasta do DutyX (a do ZIP chama `dutyx-main`) e roda `claude` lá. |

A página oficial de primeiros socorros — 7 travamentos, cada um com causa e solução — é o **`setup/socorro.md`**. E se nada resolver: descreve o erro pro Claude (vale até pelo [claude.ai](https://claude.ai) no navegador, se o Claude Code nem abrir) que ele te desenrola.

**Bora. Cola o pedido do Passo 2 no Claude.**
