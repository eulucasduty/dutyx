# 📚 O QUÊ — Site foda: motion, 3D e aquele efeito que prende o olho

> Esse é o nível premium. Aquele site que você vê e pensa "como é que faz isso?". A boa notícia: tem regra por trás. A má: a maioria erra e faz um site lindo que ninguém aguenta usar. Lê isso antes de construir — é o que separa "uau" de "pesado e confuso".

## Primeiro: o que faz um site ser FODA (e não só "cheio de efeito")

Site foda **não é** o que tem mais animação. É o que usa movimento **com intenção** pra contar uma história e guiar o olho. Os princípios:

1. **Movimento com propósito.** Cada animação tem que ter um motivo: revelar algo, mostrar relação entre coisas, dar feedback. Animação aleatória cansa e distrai.
2. **Storytelling no scroll.** O site premium se conta enquanto a pessoa rola — elementos entram, transformam, reagem. A rolagem vira uma narrativa, não só "descer a página".
3. **Hierarquia e respiro.** Espaço em branco (ou preto) generoso, tipografia grande e confiante, contraste forte. Menos elementos, melhor feitos.
4. **3D no ponto certo.** Um objeto 3D que a pessoa pode girar, ou que reage ao mouse/scroll, dá o "uau" — MAS só quando serve ao produto (mostrar o produto, criar atmosfera). 3D enfiado à força só deixa lento.

## A tecnologia por trás (você não programa, mas entende pra pedir certo)

- **GSAP** = a biblioteca rei de animação na web. Faz elementos se moverem com suavidade profissional. O pedaço mais importante dela é o **ScrollTrigger**: liga a animação ao scroll (a pessoa rola, a cena acontece). É isso que faz os sites "awwwards".
- **Spline** ou **Three.js** = o que coloca **3D** na página. Spline é mais fácil (você monta o 3D numa ferramenta visual e embeda); Three.js é mais poderoso e mais pesado. Pra começar, Spline resolve 90% dos casos.
- **HTML/CSS/JS** = o esqueleto, a roupa e o comportamento (ver a lição de `_aprenda/landing-page.md`). O motion é uma camada POR CIMA de uma base bem feita — sem base boa, motion não salva.

## ⚠️ Performance: o assassino silencioso (a regra mais importante daqui)

Um site lindo que demora 8 segundos pra abrir no celular **converte menos** que um site simples e rápido. A maioria das pessoas vai abrir no 4G, num celular mediano. Então:
- 3D pesado = veneno no mobile. Use leve, otimizado, ou só no desktop.
- Toda imagem otimizada; nada de arquivo gigante.
- Animação que trava (engasga) é pior que nenhuma. Tem que rodar liso (o segredo técnico: animar as propriedades certas — transform e opacity — não o resto).
- **Teste no celular sempre.** O que é lindo no seu notebook pode ser injogável no telefone do cliente.

## Quando 3D/motion AJUDA e quando ATRAPALHA

| Ajuda | Atrapalha |
|---|---|
| Mostrar um produto por todos os ângulos | 3D decorativo que não diz nada e pesa |
| Revelar conteúdo conforme a pessoa rola | Tudo se mexendo ao mesmo tempo (epilepsia visual) |
| Dar atmosfera premium a uma marca que pede isso | Marca simples/local que só precisa converter rápido |
| Um detalhe que reage ao mouse (delícia sutil) | Animação que atrasa a pessoa de ver a oferta |

## Os erros que arruínam um site foda

- Priorizar o efeito antes da mensagem (a pessoa achou bonito mas não entendeu o que você vende).
- Animação demais — vira parque de diversão, cansa.
- Esquecer o mobile e o tempo de carregamento.
- 3D pesado sem necessidade.
- Não ter CTA claro no meio de tanto efeito.

## A pergunta-chave antes de construir

**O efeito que eu quero serve pra contar minha história e vender — ou é só pra eu me achar foda?** Se serve, bora. Se é só vaidade, corta. O melhor motion é o que a pessoa nem percebe que é motion: ela só sente que o site é "premium" e entende tudo.
