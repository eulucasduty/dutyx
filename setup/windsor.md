# 📊 Windsor — métricas automáticas (upgrade PAGO, opcional)

> ⚠️ **Isto é um atalho PAGO e 100% opcional.** O jeito **grátis** de alimentar a `/metricas` está em `instagram-metricas.md` (Instagram Insights nativo). Só vale o Windsor se você quer evitar a digitação manual e topa pagar pela comodidade.

Serve pra: a frente **`/metricas`** puxar os números do seu perfil sozinha (top vídeos, retenção, seguidores ganhos) em vez de você informar na mão. Também turbina o **`/social-media`**.

> Modo grátis (recomendado): você traz os tops dos seus Insights (ver `instagram-metricas.md`) e o DutyX faz o mesmo loop. O Windsor só te poupa a digitação.

## Como conectar
O Windsor é um **conector (MCP)** — você liga pelo **fluxo de conectores do Claude Code**:
1. No Claude Code, abre os conectores (comando `/mcp`, ou a tela de conectores do app).
2. Procura **Windsor** e clica em conectar.
3. Faz login na sua conta Windsor e autoriza o acesso à sua conta de Instagram.
4. Pronto — quando você rodar `/metricas`, o DutyX já consegue puxar seus dados.

(Você precisa de uma conta no Windsor.ai com o Instagram ligado. É o mesmo conector que a operação do Lucas usa.)

## Se não conectar
Sem estresse: roda `/metricas` no **modo básico** (você cola a lista dos seus melhores posts com os números) — o loop de achar seu padrão funciona do mesmo jeito, só dá um pouco mais de trabalho.
