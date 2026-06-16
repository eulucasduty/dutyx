# DutyX — instalação do zero

Calma que é tranquilo. Se você sabe instalar um programa, você consegue isso aqui. São 3 partes: ter o Claude Code, baixar o DutyX, e rodar o `/instalar`. Vamos.

> **Não sabe nada de terminal/programação?** Não tem problema — é justamente pra você. Eu (Lucas) ensino esse onboarding ao vivo também. Mas o passo a passo abaixo já te leva sozinho.

---

## Parte 1 — Instalar o Claude Code (uma vez na vida)

O Claude Code é o "cérebro" que vai ler o DutyX e trabalhar com você. Pra ele rodar, você precisa de 3 coisas:

1. **Uma conta na Claude.** Entra em [claude.ai](https://claude.ai), cria sua conta e assina um plano que libere o Claude Code (o Pro/Max). É a assinatura que dá acesso ao "funcionário".
2. **O Node.** É o motorzinho que faz o Claude Code rodar. Pesquisa "Node.js", baixa a versão recomendada (a "LTS") e instala dando next-next-next, igual qualquer programa.
3. **O Claude Code em si.** Abre o terminal do seu computador (no Windows, pesquisa "PowerShell"; no Mac, "Terminal") e cola:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   Dá enter e espera instalar. Pronto.

> Travou em algum passo? O DutyX foi feito pra te tirar de qualquer erro — assim que você abrir a pasta nele, é só falar "travei em tal parte" que ele te guia. Você nunca fica preso.

---

## Parte 2 — Abrir o DutyX

1. Coloca a pasta `dutyx` num lugar fácil do seu computador (ex: a Área de Trabalho).
2. Abre o terminal **dentro dessa pasta**. (Jeito fácil: instala o VS Code de graça, abre a pasta nele com "File → Open Folder", e abre o terminal integrado com `Ctrl + '` / no Mac `Cmd + '`.)
3. Digita:
   ```
   claude
   ```
   e dá enter. O Claude Code acorda dentro da pasta do DutyX.

---

## Parte 3 — Instalar o sistema no SEU negócio

Com o Claude Code aberto na pasta, digita:

```
/instalar
```

Eu vou te fazer umas perguntas rápidas (uns 5 minutos) sobre seu negócio, seu jeito de falar e seu foco. No fim, o DutyX já te conhece — e tudo que você criar daqui pra frente sai com a sua cara, não genérico.

---

## Daí pra frente, o ritmo é esse

- **Começou a trabalhar?** Manda `/abrir` — eu carrego seu contexto e já te falo o que dá pra fazer hoje.
- **Quer construir algo?** Chama a frente: `/landing-page`, `/site-foda`, `/trafego`, `/social-media` (carrossel, métricas, conteúdo), `/roteiro-video`, `/planejamento`, `/vendas`.
- **Quer o melhor resultado?** `/configurar` liga o arsenal (Whisper, Windsor, Meta…) — opcional, modo turbo. O básico funciona sem nada.
- **Quer guardar tudo num lugar seguro?** Manda `/salvar` (faz backup no seu GitHub).
- **Sumiu uma informação ou mudou algo?** Manda `/atualizar` — eu reviso e arrumo a memória.

Lista completa do que o DutyX faz: abre o `_catalogo.md`.

**Bora. Manda `/instalar`.**
