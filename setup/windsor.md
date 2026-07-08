# 📊 Windsor — métricas do seu Instagram (conector grátis)

Serve pra: a frente **`/metricas`** puxar os números do seu perfil sozinha — post a post: alcance, envios, salvamentos, retenção, seguidores ganhos — sem você tirar print nem digitar. Também turbina o **`/social-media`** (ideias baseadas no que já funciona). **Tem plano gratuito**, que dá e sobra pro uso do DutyX.

> É turbo, não pré-requisito: a `/metricas` funciona 100% no modo básico (print dos Insights — ver `instagram-metricas.md`). O Windsor só tira a digitação do caminho.
>
> O plano grátis tem limites (quantidade de contas e de histórico), e condição de plano muda de vez em quando. Se um dia esbarrar em algo pago lá: não gasta nada — volta pro modo básico, que entrega o mesmo loop.

## Como conectar (é nativo do Claude)
O Windsor é um **conector nativo do Claude** — não instala nada, não edita arquivo:

> **Conectores → Novo conector → Windsor → fazer login.**

No login, você cria/entra na conta Windsor e autoriza o acesso ao seu **Instagram**. Pronto — quando rodar `/metricas`, o DutyX já puxa seus dados. (É o mesmo conector que a operação do Lucas usa.)

## Erro comum
- **"O Windsor não acha meu Instagram":** ele precisa de conta **profissional** (criador/empresa — grátis, ver `instagram-metricas.md`) e, em alguns casos, vinculada a uma Página do Facebook. Ativa isso no app do Instagram e autoriza de novo.

## Sem o Windsor?
Funciona igual no modo básico: você abre os **Instagram Insights** (grátis, no app), tira print dos seus tops e cola no `/metricas`. Mesmo loop, mesmo resultado.
