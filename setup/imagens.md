# 🖼️ Imagem real (carrossel, LP, site) — geradores grátis

O visual do DutyX nasce em **código** (o motor é a skill `claude-design`) — texto, layout e design saem nítidos e na sua marca. Mas código **não cria foto/ilustração realista**. Quando um slide de carrossel, o herói de uma LP ou uma seção do site pedir uma **imagem real** (uma foto, uma cena, um personagem), você conecta um gerador de imagem. Todas as opções abaixo são **grátis**:

## Grátis pra todo mundo (recomendado)
- **Pollinations** — o mais fácil: **sem cadastro, sem chave**. Gera a imagem por um link. Perfeito pra começar hoje. (Modelos tipo Flux.)
- **Cloudflare Workers AI** — tem tier grátis generoso, **sem cartão**; só precisa criar uma conta Cloudflare. Bom pra quem vai gerar muito.
- **Gemini (Google AI Studio)** — tier grátis de imagem (modelo "Nano Banana"); precisa de uma chave grátis do AI Studio.
> Os limites grátis mudam de tempos em tempos — na hora de conectar eu confirmo o atual com você.

## Pago (opcional — só se quiser estilo/qualidade premium)
- **Higgsfield** e cia — pagos, mas conectam fácil: são **conectores nativos do Claude** (**Conectores → Novo conector → login**). Ficam como upgrade pra quem quer um visual muito específico. **Não são necessários.**

## Como o DutyX usa
1. Quando uma frente (`/carrossel`, `/landing-page`, `/site-foda`) decidir que precisa de imagem real, ela **te avisa** e pergunta se você já tem um gerador conectado.
2. Se não tiver, ela te manda pro caminho grátis mais simples (Pollinations) — e segue montando o resto em código enquanto isso.
3. A imagem gerada entra como fundo/elemento; o texto e a marca continuam em código (nítidos). Em LP/site: comprima antes de subir (webp, herói ≤ 250 KB — imagem pesada mata a página no 4G).

> Resumo: **layout e texto = código (sempre, grátis). Foto realista = gerador grátis, só quando precisar.** Você nunca fica travado: se não quiser conectar nada, tudo sai 100% em código mesmo (foto sua/do cliente também sempre vale — real de verdade converte mais que gerada).

## Se travar
Me fala qual gerador você quer usar que eu te passo o passo exato de conexão (e confirmo os limites grátis atuais, que mudam de tempos em tempos).
