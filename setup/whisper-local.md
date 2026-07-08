# 🎙️ Whisper local — transcrição grátis no seu PC

**Você não precisa entender nada desta página.** O caminho normal é: você fala com o Claude, autoriza, e **ele instala tudo pra você**. Esta página existe pro Claude saber exatamente o que rodar — e pra você conferir, se tiver curiosidade.

O que isso destrava: o `/aprender-video` (aprender com reels e tutoriais) e o `/metricas` (transcrever seus vídeos campeões) passam a transcrever qualquer vídeo **sozinhos**. É 100% grátis, roda **no seu computador** (offline — seus vídeos não saem daí), e baixa **uma vez só**.

> Sem o Whisper, nada trava: você cola a legenda/fala do vídeo no chat (modo básico) e segue o jogo. O Whisper só tira esse trabalho de você.

---

## Caminho 1 — deixa o Claude instalar (recomendado)

Fala no Claude Code, dentro da pasta do DutyX:

> **"roda o /configurar e instala a transcrição pra mim"**

Ele vai pedir sua autorização pra cada passo e rodar os comandos abaixo. Você só diz "sim". São 3 peças (tudo grátis): o **ffmpeg** (separa o áudio do vídeo), o **whisper.cpp** (transforma fala em texto) e o **modelo** (o "cérebro" do Whisper, ~470 MB).

### O que o Claude roda no Windows (PowerShell, a partir da pasta do DutyX)

```powershell
# 1. ffmpeg
winget install --id Gyan.FFmpeg -e --accept-source-agreements --accept-package-agreements

# 2. whisper.cpp — release oficial do GitHub, extraído em setup/whisper/
New-Item -ItemType Directory -Force setup/whisper | Out-Null
Invoke-WebRequest -Uri "https://github.com/ggml-org/whisper.cpp/releases/latest/download/whisper-bin-x64.zip" -OutFile setup/whisper/whisper-bin-x64.zip
Expand-Archive setup/whisper/whisper-bin-x64.zip -DestinationPath setup/whisper -Force
Remove-Item setup/whisper/whisper-bin-x64.zip

# 3. o modelo (~470 MB — demora alguns minutos, é normal)
Invoke-WebRequest -Uri "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin" -OutFile setup/whisper/ggml-small.bin

# 4. garante que esses arquivos grandes NÃO vão pro backup do /salvar
Add-Content .gitignore "`nsetup/whisper/"
```

(Se o link direto do zip falhar, o nome do arquivo mudou de versão: abre https://github.com/ggml-org/whisper.cpp/releases/latest e pega o `.zip` de Windows com "bin-x64" no nome.)

### O que o Claude roda no Mac (Terminal, a partir da pasta do DutyX)

```bash
brew install ffmpeg whisper-cpp
mkdir -p setup/whisper
curl -L -o setup/whisper/ggml-small.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin
printf '\nsetup/whisper/\n' >> .gitignore
```

### Conferir se ficou pronto (o passo que não se pula)

```
node scripts/transcrever.mjs --check
```

Saem 3 linhas: ffmpeg, Whisper e modelo, cada uma com ✓ ou ✗. Se aparecer ✗, **a própria linha diz o que fazer** — normalmente é só rodar `/configurar` de novo ou fechar e reabrir o terminal.

---

## Usar (depois de instalado)

```
node scripts/transcrever.mjs "caminho/do/video.mp4"
```

- Sai um `.txt` em `saidas/transcricoes/` — aí é só falar pro Claude "usa essa transcrição".
- Aceita: mp4, mov, mkv, webm, avi, mp3, wav, m4a, aac, ogg, opus, flac.
- Caminho com espaço vai **entre aspas** — ou arrasta o arquivo pra dentro do terminal, que ele cola o caminho sozinho.
- **Idioma:** ele detecta sozinho (reel em inglês sai em inglês, sem gambiarra). Saiu estranho num vídeo misturado? Pede pro Claude "transcreve forçando português" (ele roda com `DUTYX_LANG=pt`).
- Na prática você nem digita isso: pede pro Claude "transcreve esse vídeo" e ele roda o script.
- Detalhe simpático: o Whisper às vezes escreve "Cloud" onde alguém falou "Claude". Normal, ignora.

---

## Caminho 2 — instalar na mão (se você preferir o volante)

1. **ffmpeg** — Windows: `winget install --id Gyan.FFmpeg -e` no PowerShell. Mac: `brew install ffmpeg`. Depois **feche e reabra o terminal**.
2. **whisper.cpp** — Windows: baixa o zip "whisper-bin-x64" em https://github.com/ggml-org/whisper.cpp/releases/latest e extrai dentro de `setup/whisper/` na pasta do DutyX. Mac: `brew install whisper-cpp`.
3. **Modelo** — baixa https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin e salva em `setup/whisper/`.
4. **Fala pro Claude:** "põe `setup/whisper/` no .gitignore" — 1 linha, e garante que esses ~470 MB nunca entram no backup do `/salvar` (o GitHub recusa arquivo gigante e o backup quebraria).
5. Roda `node scripts/transcrever.mjs --check` até ver os 3 ✓.

Instalou em outro lugar? Sem problema — aponta com variáveis de ambiente: `DUTYX_WHISPER` (caminho do executável) e `DUTYX_MODEL` (caminho do .bin). O script olha nelas primeiro.

---

## Caminho 0 — sem Whisper nenhum (sempre funciona)

Não quer instalar nada hoje? O modo básico segura tudo:

- **Reel/vídeo do Instagram ou TikTok:** liga a legenda automática do próprio app, pausa e copia — ou transcreve de ouvido os trechos que importam (hook e CTA já valem ouro).
- **YouTube:** abre o vídeo → "..." embaixo do player → **"Mostrar transcrição"** → seleciona e copia tudo.
- Cola no chat e fala "essa é a fala do vídeo". O `/aprender-video` e o `/metricas` seguem normal.

---

## Se travar

- **"winget não é reconhecido"** → seu Windows tá sem o instalador da Microsoft. Instala o "Instalador de Aplicativo" pela Microsoft Store e tenta de novo (ou baixa o ffmpeg em https://www.gyan.dev/ffmpeg/builds/).
- **Instalou e o terminal "não acha"** → fecha TODAS as janelas do terminal e abre de novo. É a solução de metade dos problemas (ver `setup/socorro.md`).
- **Download do modelo parou no meio** → o `--check` avisa se o arquivo ficou pequeno demais. Apaga o `.bin` e baixa de novo.
- **Qualquer outra coisa** → cola a mensagem de erro no Claude e fala "deu isso aqui". Ele lê, explica e conserta com você. E enquanto isso, Caminho 0 — você nunca fica parado.
