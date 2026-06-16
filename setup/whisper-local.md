# 🎙️ Whisper local — a transcrição do DutyX (grátis, no seu PC)

**A funcionalidade de transcrição do DutyX roda com o Whisper local.** É o que faz o `/aprender-video` (aprender com vídeos) e o `/metricas` (transcrever seus campeões) funcionarem. É **100% grátis** e roda **na sua máquina** (offline, privado) — mas, justamente por rodar no seu PC, **você precisa baixar ele uma vez** pra usar. Diferente dos outros (Windsor, Meta…), o Whisper **não é um conector** — é um programa gratuito que fica no seu computador.

> ⚠️ **Consciência:** sem o Whisper baixado, o DutyX **não transcreve sozinho**. Você ainda pode usar tudo colando a legenda/fala na mão (modo básico) — mas pra ter a transcrição automática e grátis, instale o Whisper (uma vez só).

## O que baixar (3 coisas, tudo grátis)
1. **ffmpeg** — separa o áudio do vídeo. (Windows: `winget install Gyan.FFmpeg`.)
2. **whisper.cpp** — o transcritor que roda no seu PC (baixa uma versão pronta/release pro seu sistema).
3. **Um modelo** — o "cérebro" do Whisper. O `ggml-small` é ótimo começo (rápido e bom em português).

## Ligar no DutyX
1. Anote onde ficaram **o whisper** e **o modelo**.
2. No `scripts/transcrever.mjs` (pasta do DutyX), aponte as linhas `WHISPER` e `MODEL` pros seus arquivos (ou use as variáveis de ambiente `DUTYX_WHISPER` / `DUTYX_MODEL`).
3. Transcreva: `node scripts/transcrever.mjs "caminho/do/video.mp4"` → sai um `.txt` em `saidas/transcricoes/`.

(Precisa do **Node** instalado — o mesmo que roda o Claude Code. O Whisper às vezes escreve "Cloud" no lugar de "Claude" — normal.)

## Se travar
Me diz em que passo travou que eu te desenrolo — e enquanto isso seguimos no básico (colar a legenda). Você nunca fica parado.
