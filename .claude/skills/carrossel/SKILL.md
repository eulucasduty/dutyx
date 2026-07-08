---
name: carrossel
description: >
  Cria um carrossel de Instagram que para o scroll, na voz e na marca de quem usa o DutyX. Ensina
  primeiro o que faz um carrossel prender (o hook do slide 1, o slide 2 como segunda capa, pouco texto,
  legibilidade no mobile, o CTA) e só depois constrói a copy dos slides + o visual em HTML. Use quando
  a pessoa pedir "carrossel", "post de Instagram", "post arrastável", "sequência de slides", "post em
  carrossel", "carrossel educativo". Para roteiro de vídeo/reel, use a frente /roteiro-video.
---

# /carrossel — carrossel que para o scroll (parte da aba /social-media)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. O visual e o tom são os **da marca do cliente** (lê `_contexto/marca.md`), nunca os do Lucas.

## Como as imagens nascem — o jeito Claude nativo (importante)
O Claude **não usa um "gerador de imagem" pra fazer o carrossel** — ele **desenha em código** (HTML/CSS), do mesmo jeito que cria qualquer visual. Isso te dá controle total: texto nítido, marca exata, layout no capricho, sem cara de "imagem de IA". Então:
- **Layout, texto e design dos slides = HTML/CSS** (motor `claude-design`), cada slide um quadro **1080×1350 (4:5)**.
- **Geração de imagem (Gemini/Pollinations)** entra SÓ quando o slide precisa de uma **foto/ilustração real** — nunca pro layout/texto.
- **Virar imagem pra postar:** print no navegador — sem instalar nada (ver "O COMO", passo 7).

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, pra quem), `_contexto/marca.md` (tom + visual) e `_contexto/estrategia.md` (objetivo atual, gargalo). É isso que faz o carrossel falar a língua do cliente.

## 1. O QUÊ (ensina — não pule)
Conduza a pessoa pela lição `_aprenda/carrossel.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- O **slide 1 (hook) é 80% do jogo** — sem capa que para o dedo, ninguém vê o resto.
- O **slide 2 é a segunda capa**: o Instagram reentrega o post mostrando ele pra quem não deslizou — tem que segurar sozinho.
- **Envio é a métrica rainha**: o post bom de 2026 é o que alguém manda num grupo.
- **Pouco texto por slide** — cada slide é um outdoor, não um parágrafo. Legível no mobile (fonte grande, contraste, 4:5).
- O **último slide pede UMA ação** (enviar / salvar / comentar / seguir).
Não despeje a lição inteira — pegue os pontos que importam pro caso dela e dê um exemplo curto na marca dela.
Se a pessoa pedir pra pular ("só faz"), aplique a regra dos 30 segundos do CLAUDE.md: dê o essencial em uma frase antes de construir.

## 2. O PORTÃO (confirma)
Faça 2-3 perguntas que ao mesmo tempo checam entendimento e coletam o que precisa pra construir:
- "Qual é a UMA ideia que esse carrossel inteiro entrega? (se você tivesse que resumir num slide só)"
- "Esse post é pra quê: alcançar gente nova, provar que teu trabalho funciona, ou vender pra quem já te segue?" (isso define o arquétipo)
- "Qual a ação que você quer no fim — mandar pra alguém, salvar, comentar uma palavra (qual?) ou seguir?" (uma só)
Só siga pro como depois das respostas. Se a ideia central estiver vaga ("falar sobre meu produto"), ajude a afunilar pra UMA promessa antes — carrossel sem foco não para scroll.

## 3. O COMO (constrói)
1. **Escolha o arquétipo** com a pessoa em `_blocos/carrossel/estrutura.md` (7 opções: educativo, lista, storytelling, quebra de mito, antes-e-depois, bastidor, oferta) conforme o objetivo do portão. Confirme em 1 linha: "pelo teu objetivo, o arquétipo certo é [X] — bora?"
2. Monte a copy slide a slide seguindo a estrutura do arquétipo, no **tom do cliente**. Regra de ferro: **uma ideia por slide, uma frase de impacto por slide** — e o slide 2 segurando sozinho.
3. Capriche no **slide 1**: gere **3 opções de capa de mecanismos DIFERENTES** do `_blocos/social-media/banco-de-hooks.md` e deixe a pessoa escolher. É onde mora 80% do resultado.
4. Para cada slide, entregue: **(a)** o texto que vai na tela (curto), **(b)** a sugestão visual (cor da marca, imagem/ícone, layout), **(c)** nota de design se precisar.
5. Escreva a **legenda** com a fórmula de `_blocos/social-media/legendas-hashtags.md`: 1ª linha que segura sozinha + corpo com a palavra-chave pesquisável por extenso + CTA do objetivo + **3-5 hashtags específicas**.
6. **Monte os slides em HTML/CSS** com `claude-design` (se o motor não estiver disponível, monte o HTML/CSS direto do mesmo jeito — o resultado é o mesmo) — um `carrossel.html` com cada slide num quadro 1080×1350, nas cores/fontes do cliente. "No zero" de marca → default elegante, e avise.
   - **Se o slide pedir IMAGEM REAL** (foto, cena): o HTML não faz isso. Caminho **grátis** primeiro (Pollinations sem cadastro, ou Gemini free — `setup/imagens.md`); Higgsfield é opção paga (conector nativo: Conectores → Novo conector → login). **Nunca trave:** sem gerador, monte o slide 100% em HTML (cor, tipografia, formas) e siga.
7. **Vire imagem pra postar — o caminho padrão é print, sem instalar NADA:**
   - Abra o `carrossel.html` no navegador (Windows: clica duas vezes no arquivo, ou `start saidas/carrosseis/<pasta>/carrossel.html` no PowerShell; Mac: `open .../carrossel.html`).
   - Tire um print de cada quadro: **Windows: `Win+Shift+S`** (arrasta a seleção em volta do slide); **Mac: `Cmd+Shift+4`**. Salva um por um, na ordem.
   - Erro comum: "o slide ficou pequeno/cortado no print" → dá zoom no navegador (`Ctrl` e `+` / `Cmd` e `+`) até o quadro encher a tela e capture de novo. O Instagram aceita numa boa — print de tela cheia tem resolução de sobra.
   - Prefere montar no **Canva**? Usa o `slides.md` (a copy pronta, slide a slide) e cola lá — o trabalho de pensar já tá feito.
   - **Turbo (opcional):** com Node/Playwright instalados (ver `/configurar`), você escreve e roda na hora um script que fotografa cada slide em PNG 1080×1350 automático. É luxo, não necessidade — o print resolve 100%.
8. Salve em `saidas/carrosseis/<tema>-<data>/` (`carrossel.html` + `slides.md` com copy e legenda + PNGs se rolarem). Ofereça conferir e ajustar.

## 4. O FECHO (aprende)
Pergunte o que ela achou — principalmente da capa. Se ela ajustar algo de tom/visual/CTA que pareça valer pra sempre ("meu CTA é sempre comentar X", "não gosto de fundo escuro"), ofereça salvar em `_contexto/marca.md`. Anote no `_contexto/historico.md` o que foi feito e o tema.

## Checklist antes de entregar
- [ ] O slide 1 para o scroll? (testei: eu pararia o dedo nele?)
- [ ] O slide 2 segura SOZINHO (sem depender da capa)?
- [ ] Uma ideia por slide, frase curta, fio condutor até o fim?
- [ ] Último slide pede UMA ação clara — e o post passa no teste "alguém mandaria isso num grupo?"
- [ ] Legível no mobile (fonte grande, contraste, 4:5)?
- [ ] Visual e tom são da marca do CLIENTE (não do Lucas)?
- [ ] Legenda com palavra-chave pesquisável + CTA + 3-5 hashtags específicas?
- [ ] Salvo em `saidas/carrosseis/`?

## Quando mandar pra outra frente
- Quer vídeo curto/reel em vez de carrossel → `/roteiro-video`.
- Quer planejar o calendário de posts / linha editorial → `/social-media` (linha) ou `/planejamento` (calendário).
- Carrossel de OFERTA mas a oferta tá confusa (promessa, preço) → `/oferta` primeiro.
- Quer impulsionar o post → `/trafego`. Fechar quem chamou no direct/zap → `/whatsapp`.
