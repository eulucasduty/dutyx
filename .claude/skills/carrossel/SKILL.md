---
name: carrossel
description: >
  Cria um carrossel de Instagram que para o scroll, na voz e na marca de quem usa o DutyX. Ensina
  primeiro o que faz um carrossel prender (o hook do slide 1, a sequência, pouco texto, legibilidade no
  mobile, o CTA) e só depois constrói a copy dos slides + sugestão visual. Use quando a pessoa pedir
  "carrossel", "post de Instagram", "post arrastável", "sequência de slides", "post em carrossel",
  "carrossel educativo". Para roteiro de vídeo/reel, use a frente /roteiro-video.
---

# /carrossel — carrossel que para o scroll (frente DutyX)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. Motor visual: a skill global `claude-design` (e geração de imagem quando precisar de fundo/ilustração). O visual e o tom são os **da marca do cliente** (lê `_contexto/marca.md`), nunca os do Lucas.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, pra quem), `_contexto/marca.md` (tom + visual) e `_contexto/estrategia.md` (objetivo atual, gargalo). É isso que faz o carrossel falar a língua do cliente.

## 1. O QUÊ (ensina — não pule)
Conduza a pessoa pela lição `_aprenda/carrossel.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- O **slide 1 (hook) é 80% do jogo** — sem capa que para o dedo, ninguém vê o resto.
- A sequência: **hook → desenvolvimento (uma ideia por slide) → virada → CTA**.
- **Pouco texto por slide** — cada slide é um outdoor, não um parágrafo.
- **Legibilidade no mobile**: fonte grande, contraste alto, formato 4:5.
- O **último slide pede UMA ação** (salvar / comentar / seguir / compartilhar).
Não despeje a lição inteira — pegue os pontos que importam pro caso dela e dê um exemplo curto na marca dela.

## 2. O PORTÃO (confirma)
Faça 2-3 perguntas que ao mesmo tempo checam entendimento e coletam o que precisa pra construir:
- "Qual é a UMA ideia que esse carrossel inteiro entrega? (se você tivesse que resumir num slide só)"
- "Qual a ação que você quer no fim — salvar, comentar uma palavra (qual?), seguir ou compartilhar?" (uma só)
- "Esse post é mais pra alcance frio (gancho/curiosidade) ou pra ensinar e converter quem já te acompanha?"
Só siga pro como depois das respostas. Se a ideia central ainda estiver vaga ("falar sobre meu produto"), ajude a afunilar pra UMA promessa antes de construir — carrossel sem foco não para scroll.

## 3. O COMO (constrói)
1. Confirme em 1 linha a rota: "vou montar a copy dos slides no seu tom e usar o `claude-design` pra te dar a cara visual na sua marca."
2. Monte a copy seguindo a estrutura de `_blocos/carrossel/estrutura.md`, no **tom do cliente** (de `_contexto/marca.md`). Regra de ferro: **uma ideia por slide, uma frase de impacto por slide**.
3. Capriche no **slide 1** — gere 3 opções de capa/hook e deixe a pessoa escolher. É onde mora 80% do resultado.
4. Para cada slide, entregue: **(a)** o texto que vai na tela (curto), **(b)** a sugestão visual (cor de fundo da marca, imagem/ícone, layout), **(c)** uma nota de design se precisar.
5. Escreva também a **legenda do post** (1ª linha que prende + corpo que aprofunda + CTA + 3-5 hashtags do nicho dela).
6. Se a marca pedir visual de alta fidelidade, use `claude-design` pra montar os slides em HTML/4:5 com as cores/fontes do cliente; gere imagem de fundo/ilustração quando o conceito pedir. Se a pessoa estiver "no zero" de marca, use um default elegante e avise.
7. Salve em `saidas/carrosseis/<tema>-<data>/` (copy em `slides.md`, e os visuais quando gerados).
8. Ofereça conferir o resultado (screenshot dos slides) e ajustar.

## 4. O FECHO (aprende)
Pergunte o que ela achou — principalmente da capa. Se ela ajustar algo de tom/visual/CTA que pareça valer pra sempre ("meu CTA é sempre comentar X", "não gosto de fundo escuro"), ofereça salvar em `_contexto/marca.md`. Anote no `_contexto/historico.md` o que foi feito e o tema.

## Checklist antes de entregar
- [ ] O slide 1 para o scroll? (testei: eu pararia o dedo nele?)
- [ ] Uma ideia por slide, frase curta?
- [ ] Sequência com fio condutor (cada slide puxa o próximo)?
- [ ] Último slide pede UMA ação clara?
- [ ] Legível no mobile (fonte grande, contraste, 4:5)?
- [ ] Visual e tom são da marca do CLIENTE (não do Lucas)?
- [ ] Copy sem cara de guru, no tom da pessoa?
- [ ] Legenda com CTA e hashtags do nicho?
- [ ] Salvo em `saidas/carrosseis/`?

## Quando mandar pra outra frente
- Quer vídeo curto/reel em vez de carrossel → `/roteiro-video`.
- Quer planejar o calendário de posts → `/planejamento`.
- Quer mandar gente pro perfil/post (impulsionar) → `/trafego`.
