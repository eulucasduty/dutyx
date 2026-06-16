# 📊 Windsor — métricas reais do seu Instagram

Serve pra: a frente **`/metricas`** puxar os números do seu perfil sozinha (top vídeos, retenção, seguidores ganhos) em vez de você digitar na mão. Também turbina o **`/social-media`** (ideias baseadas no que já funciona).

> Modo básico (sem Windsor): você informa os números dos seus top posts no chat e o DutyX trabalha igual. O Windsor só automatiza.

## Como conectar
O Windsor é um **conector (MCP)** — você liga pelo **fluxo de conectores do Claude Code**:
1. No Claude Code, abre os conectores (comando `/mcp`, ou a tela de conectores do app).
2. Procura **Windsor** e clica em conectar.
3. Faz login na sua conta Windsor e autoriza o acesso à sua conta de Instagram.
4. Pronto — quando você rodar `/metricas`, o DutyX já consegue puxar seus dados.

(Você precisa de uma conta no Windsor.ai com o Instagram ligado. É o mesmo conector que a operação do Lucas usa.)

## Se não conectar
Sem estresse: roda `/metricas` no **modo básico** (você cola a lista dos seus melhores posts com os números) — o loop de achar seu padrão funciona do mesmo jeito, só dá um pouco mais de trabalho.
