# 📚 O QUÊ — Landing page que converte

> Leia isso antes de construir. São 4 minutos que mudam tudo. Uma landing page (LP) é uma página com UM objetivo só: fazer a pessoa tomar UMA ação (comprar, deixar o contato, agendar, chamar no WhatsApp). Não é "site bonito" — é máquina de conversão. Beleza serve à conversão, nunca o contrário.

## Regra zero: LP é a vitrine da OFERTA — a oferta vem antes

O erro nº1 de quem faz LP não é design: é construir a página sem ter oferta. Se você não sabe responder em uma frase **qual a promessa** (o que a pessoa ganha), **quanto custa e por quê**, e **qual a garantia** — você não tem o que colocar na página. Aí sai uma LP linda dizendo nada, e "LP não funciona" leva a culpa.

É como caprichar na vitrine de uma loja vazia. Primeiro `/oferta` (monta promessa, entregáveis, preço, garantia, urgência honesta), depois a página. Com a oferta na mão, a LP quase se escreve sozinha.

## A anatomia de uma LP que vende (de cima pra baixo)

1. **Herói (a primeira dobra — o que aparece sem rolar):** aqui se ganha ou se perde a pessoa em 3 segundos. Tem que ter: uma **promessa clara** (o que ela ganha), um **subtítulo** que diz pra quem é e como entrega, e **um botão de ação** já visível. Se não dá pra entender o que você oferece sem rolar, ela foi embora.
2. **A dor / o problema:** mostre que você entende a cena exata que a pessoa vive. Ela precisa pensar "é exatamente isso que eu sinto". Específico ganha de genérico: "acorda travada e termina o dia no ibuprofeno" > "sofre com dores".
3. **A virada / a solução:** o que você oferece como saída — com o **mecanismo** ("como funciona em 3 passos"). O mecanismo responde a dúvida silenciosa "tá, mas será que funciona PRA MIM?".
4. **Prova:** depoimento com nome e contexto, print de WhatsApp, número real, antes/depois. Sem prova, é só promessa. E prova falsa é pior que nenhuma — quando descobrem (descobrem), a página inteira morre.
5. **A oferta + preço com ancoragem:** o que está incluído (benefício, não só feature), e o preço apresentado depois do valor — comparado a algo que a pessoa já paga ("menos que uma massagem por semana") ou ao valor somado das partes. **Garantia** logo junto: é ela que derruba o último medo.
6. **FAQ (a caça às objeções):** 3-5 perguntas que são as objeções REAIS — as que os clientes falam no WhatsApp ("nunca fiz, vou conseguir?", "e se eu não puder ir?"), não perguntas convenientes que você gostaria que fizessem.
7. **CTA final + urgência honesta:** última chamada, repetindo a promessa em 1 linha.

Exemplos preenchidos de tudo isso (headline por fórmula + página inteira escrita): `_blocos/landing-page/copy-exemplos.md`.

## Objeção não mora só no FAQ

Isso separa LP amadora de profissional: cada medo do cliente tem um lugar da página que o responde.
- "Será que é confiável?" → **prova** (depoimento, número, tempo de mercado).
- "E se não funcionar pra mim?" → **mecanismo** + **garantia**.
- "Tá caro" → **ancoragem** (comparar com o custo de NÃO resolver, ou com alternativa mais cara).
- "Deixa pra depois" → **urgência honesta**.
O FAQ é só a vassoura final que pega o que sobrou.

## Urgência honesta (a linha que não se cruza)

- ✅ Vale: turma que fecha em data real, vagas limitadas de verdade (agenda tem limite mesmo), preço de lançamento com data pra acabar — e que acaba.
- ❌ Queima: contador que reinicia ao recarregar, "últimas unidades" de produto digital, "só hoje" há 6 meses. O cliente brasileiro já viu esse filme — uma mentira detectada e ele não acredita nem no resto verdadeiro da página.
- Não tem urgência real? Não force. Uma garantia forte converte mais que uma escassez falsa.

## Formulário mínimo (cada campo a mais espanta gente)

Peça SÓ o que você vai usar pra dar o próximo passo: **nome + WhatsApp**. E-mail só se a entrega é por e-mail. CPF, endereço, "como nos conheceu" — cada um desses derruba a conversão um degrau. Pra negócio local/serviço, o melhor "formulário" costuma ser **nenhum**: botão direto pro WhatsApp com mensagem pronta.

## Tipografia (o que separa o profissional do amador)

- **Hierarquia:** título grande e forte, subtítulo médio, corpo confortável. O olho tem que saber pra onde ir.
- **No máximo 2 fontes:** uma de destaque (títulos), uma de leitura (corpo).
- **Corpo ≥ 16-18px**, espaçamento entre linhas generoso. Nada de letra miúda.
- **Contraste:** cinza-claro em branco é o erro nº1. Texto se lê sem esforço, sempre.

## A estrutura técnica por trás (você não programa, mas entende pra pedir certo)

- **HTML** é o esqueleto (título, texto, botão, imagem). **CSS** é a roupa (cores, fontes, espaçamento). **JavaScript** dá comportamento (clique, formulário).
- No DutyX, quem transforma isso em página de alta fidelidade é o motor **`claude-design`** — você descreve, ele constrói na SUA marca.
- **GSAP** é a biblioteca de animação premium (o "motion" que prende o olho) — mora na frente `/site-foda`.

## Velocidade também é copy

A maioria abre no celular, no 4G. Página que demora 4 segundos perde gente que a headline tinha ganhado. Imagem comprimida (webp, herói ≤ 250 KB), efeito leve, e teste no celular antes de rodar tráfego. LP pesada = dinheiro de anúncio queimado.

## LP sem pixel = tráfego cego

Se você vai rodar anúncio pra página, ela precisa **medir a conversão**: um pixel (Meta/GA4) no `<head>` e um "obrigado" depois da ação — é esse evento que ensina o algoritmo a achar quem compra. O DutyX já deixa o lugar reservado na página; o código do pixel nasce no `/trafego` e é só colar. (Se a ação é "chamar no WhatsApp", relaxa: campanha de WhatsApp nem precisa de pixel.)

## Os erros que matam conversão (resumo do que evitar)

- Herói confuso (não dá pra entender em 3s) · botão escondido ou só no fim · muro de texto · zero prova · formulário pedindo a certidão de nascimento · urgência fake · página pesada · "site bonito" sem objetivo.

## A pergunta que importa

Antes de construir, responda: **qual é a ÚNICA ação que essa página tem que fazer a pessoa tomar?** Tudo na página existe pra levar a isso. Se um elemento não ajuda nessa ação, ele sai.
