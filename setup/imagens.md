# 🖼️ Imagem real no carrossel — geradores grátis

O carrossel do DutyX é feito em **HTML (jeito Claude nativo)** — texto, layout e design nascem em código, nítidos e na sua marca. Mas HTML **não cria foto/ilustração realista**. Quando um slide pedir uma **imagem real** (uma foto, uma cena, um personagem), você conecta um gerador de imagem. Todas as opções abaixo são **grátis**:

## Grátis pra todo mundo (recomendado)
- **Pollinations** — o mais fácil: **sem cadastro, sem chave**. Gera a imagem por um link. Perfeito pra começar hoje. (Modelos tipo Flux.)
- **Cloudflare Workers AI** — grátis, ~100 mil imagens/dia, **sem cartão**; só precisa criar uma conta Cloudflare. Bom pra quem vai gerar muito.
- **Gemini (Google AI Studio)** — tier grátis (~500 imagens/dia, modelo "Nano Banana"); precisa de uma chave grátis do AI Studio.

## Pago (opcional — só se quiser estilo/qualidade premium)
- **Higgsfield**, Midjourney, etc. — pagos. Ficam como upgrade pra quem precisa de um visual muito específico. **Não são necessários.**

## Como o DutyX usa
1. Quando o `/carrossel` decidir que um slide precisa de imagem real, ele **te avisa** e pergunta se você já tem um gerador conectado.
2. Se não tiver, ele te manda pro caminho grátis mais simples (Pollinations) — e segue montando o resto do carrossel em HTML enquanto isso.
3. A imagem gerada entra como fundo/elemento do slide; o texto e a marca continuam em HTML (nítidos).

> Resumo: **layout e texto = HTML (sempre, grátis). Foto realista = gerador grátis, só quando precisar.** Você nunca fica travado: se não quiser conectar nada, o carrossel sai 100% em HTML mesmo.

## Se travar
Me fala qual gerador você quer usar que eu te passo o passo exato de conexão (e confirmo os limites grátis atuais, que mudam de tempos em tempos).
