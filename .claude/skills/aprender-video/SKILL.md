---
name: aprender-video
description: >
  Ensina o DutyX uma técnica nova a partir de uma referência que a pessoa achou (um reel/vídeo de IA,
  um tutorial, um print, um link ou um texto colado). Extrai a LÓGICA, te explica o que entendeu, e
  integra no seu sistema — melhora uma frente, cria um bloco novo ou anota no seu contexto. Use quando
  a pessoa disser "aprende esse vídeo", "vi uma técnica e quero trazer pro DutyX", "ensina isso pro
  sistema", "achei esse reel/tutorial", "incorpora essa ideia", "transcreve esse vídeo e usa".
---

# /aprender-video — o DutyX aprende com o que você garimpa

Essa é a funcionalidade que faz o DutyX **crescer com você**. Você vê uma técnica boa por aí (um reel de IA, um tutorial), joga aqui, e o sistema **absorve a lógica** e passa a aplicar no seu negócio. É o sistema ficando mais inteligente toda semana.

Segue a **Lei do DutyX**: primeiro entende e te explica o QUÊ (a técnica), depois aplica o COMO (integra no sistema).

## ⚖️ Regra de integridade (importante)
Você extrai a **ideia/técnica** e a reescreve do zero, no contexto e na voz da pessoa. **Nunca** copie a fala, a legenda ou o texto do criador palavra por palavra, e nunca republique o conteúdo dele. Aprender com alguém ≠ copiar alguém. Se a pessoa quiser dar crédito ao criador, ótimo — mas o que entra no DutyX é a lógica destilada, original.

## 1. Pegar o conteúdo (de onde vem a técnica)
Aceite o caminho mais fácil que a pessoa tiver, nesta ordem:
- **Ela cola o texto / a legenda / um resumo** do que o vídeo ensina → é o suficiente, segue.
- **Ela manda um link** → tente extrair o texto/descrição; se não rolar, peça pra ela colar a legenda ou contar com as palavras dela o que o vídeo mostra.
- **Ela tem o vídeo baixado e quer transcrever:**
  - **Transcrição automática e grátis (recomendado):** o DutyX transcreve com o **Whisper local** — `node scripts/transcrever.mjs "<caminho do vídeo>"`. Pra isso a pessoa precisa ter **baixado o Whisper uma vez** (grátis, roda no PC dela; ver `setup/whisper-local.md`). Se ela ainda não baixou, avise e ofereça — mas se não quiser agora, NÃO trave.
  - **Caminho simples (sem Whisper):** peça pra ela colar a legenda do post ou descrever o que viu.

Nunca deixe a pessoa presa por causa de transcrição. O valor está na lógica, não no método de virar texto.

## 2. O QUÊ — entender e devolver (a Lei)
Leia o conteúdo e destile:
- **A técnica em 1 frase:** o que é, de verdade.
- **Como funciona:** o passo a passo / o princípio por trás.
- **Quando usar e quando não:** o contexto em que aquilo brilha.
Devolva isso pra pessoa em conversa curta ("ó, o que esse vídeo ensina, no osso, é isso 👇") e **confirme**: "é isso mesmo que você quis trazer?". Só siga depois do "isso".

## 3. Decidir ONDE isso entra no DutyX
Com a técnica clara, escolha (e proponha pra pessoa):
- **Melhora uma frente que já existe** (ex: um jeito novo de hook → entra na lição/bloco de `/roteiro-video` ou `/carrossel`; um efeito de site → `/site-foda`) → atualize a lição `_aprenda/<frente>.md` ou o bloco `_blocos/<frente>/`.
- **É um assunto/ferramenta novo sem frente** → crie um bloco novo em `_blocos/` (ou, se for grande o bastante, proponha uma frente nova com sua própria lição + skill).
- **É sobre o negócio/estratégia da pessoa** (não uma técnica genérica) → anote em `_contexto/`.

## 4. O COMO — aplicar e mostrar
- Escreva a lógica destilada no lugar escolhido, na voz da pessoa, com a estrutura das outras lições (conceito → como aplicar → erro comum → quando usar).
- Mostre o que mudou ("adicionei isso na frente X, ó") e, se fizer sentido, já ofereça usar na prática ("bora testar isso num carrossel agora?").
- Registre no `_contexto/historico.md`: "aprendi a técnica X (fonte: tal) e integrei em Y".

## Fecho
Pergunte se ficou do jeito que ela queria. Cada técnica absorvida deixa o DutyX mais com a cara dela — e isso é ótima matéria-prima de build-in-public ("ó o sistema aprendendo na frente de vocês").
