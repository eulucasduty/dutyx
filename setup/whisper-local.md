# 🎙️ Whisper local — transcrever vídeo no seu PC (de graça)

Serve pra: o DutyX transcrever vídeos (seus campeões na `/metricas`, ou referências no `/aprender-video`) **sem pagar ferramenta nenhuma e sem mandar seu conteúdo pra fora**. É o modo **turbo** — avançado, mas vale.

> **Não quer instalar agora?** Sem problema. No modo básico você cola a legenda/fala do vídeo e o DutyX trabalha igual. Volte aqui quando quiser automatizar.

## O que você vai precisar (3 coisas)
1. **ffmpeg** — separa o áudio do vídeo. (Pesquisa "instalar ffmpeg" pro seu sistema; no Windows dá pra instalar com `winget install Gyan.FFmpeg`.)
2. **whisper.cpp** — o transcritor que roda no seu PC. Baixa uma versão pronta (release) do whisper.cpp pro seu sistema.
3. **Um modelo** — o "cérebro" do whisper. O `ggml-small` é um ótimo começo (rápido e bom em português). Baixa o arquivo do modelo e guarda numa pasta.

## Como ligar no DutyX
1. Anota os caminhos de onde ficaram **o whisper** e **o modelo** no seu PC.
2. Abre o `scripts/transcrever.mjs` (na pasta do DutyX) e confere/edita as duas linhas do topo (`WHISPER` e `MODEL`) pra apontarem pros seus arquivos. (Ou define as variáveis de ambiente `DUTYX_WHISPER` e `DUTYX_MODEL`.)
3. Pra transcrever um vídeo:
   ```
   node scripts/transcrever.mjs "caminho/do/seu/video.mp4"
   ```
   Sai um `.txt` com a fala, em português, na pasta `saidas/transcricoes/`.

## Bom saber
- Precisa do **Node** instalado (o mesmo que você já usa pro Claude Code).
- O whisper às vezes escreve "Cloud" quando a pessoa fala "Claude" — normal, é só ignorar.
- Funciona offline depois de instalado. Seu conteúdo não sai do seu PC.

## Se travar
Me fala em que passo travou (qual mensagem apareceu) que eu te desenrolo. E enquanto isso, seguimos no básico — você não fica parado por causa disso.
