# ⚙️ Setup do arsenal — DutyX (turbo é de graça)

O DutyX funciona **sem instalar nada** (modo básico). E o **modo turbo** — o melhor resultado — roda **só com ferramentas GRATUITAS**. (A skill **`/configurar`** te conduz por aqui, uma coisa de cada vez.)

## 🔌 Como ligar os conectores (o jeito mais fácil)
A maior parte do arsenal são **conectores NATIVOS do Claude** — você não instala nada nem edita arquivo. É só:

> **Conectores → Novo conector → escolher a ferramenta → fazer login.**

Funciona assim pra **Windsor, Meta, Higgsfield, Notion** e companhia. Depois de logar, o DutyX já usa.

## O arsenal grátis (o turbo pra todo mundo)

| O que | Ferramenta | Como liga | Custo |
|---|---|---|---|
| Métricas do Instagram | **Windsor** (conector) | Conectores → Novo conector → login | **grátis** |
| Métricas (modo básico) | **Instagram Insights** (nativo do app) | cola os prints — o Claude lê imagem | grátis |
| Anúncios | **Meta** (conector) | Conectores → Novo conector → login | grátis |
| Transcrever vídeo | **Whisper local** (no seu PC) | o Claude instala pra você (ver `whisper-local.md`) | **grátis** |
| Imagem real no carrossel/LP | **Pollinations** (sem cadastro) / Gemini free | gera por link / chave grátis | grátis |
| Render PNG automático do carrossel | **Node + Playwright** | via `/configurar` (o padrão — print no navegador — não precisa disso) | grátis |
| Banco de campeões | no próprio sistema (`saidas/`) | automático | grátis |

## Upgrades opcionais (só se quiser)
- **Higgsfield** (conector) — imagem premium. Pago. Liga igual: Conectores → Novo conector → login.
- **Notion** (conector) — banco na nuvem. Tem tier grátis.
- **Magic MCP / 21st.dev** — componentes famosos prontos pro `/site-foda`. Freemium. O motor de design (`claude-design`) já vem de fábrica — isso aqui é só acelerador.

> Nada pago é necessário. O turbo grátis já entrega o melhor resultado.

## Os guias, na ordem da jornada

1. **`socorro.md`** — 🚑 primeiros socorros do dia 1: os 7 travamentos clássicos do terminal (npm, política de execução, Node, git...), cada um com causa e solução. Travou instalando? Começa aqui.
2. **`deploy.md`** — pôr o site no ar, em escada: Netlify Drop (arrasta a pasta, zero terminal) → Vercel → GitHub Pages, + domínio próprio. Serve o `/landing-page` e o `/site-foda`.
3. **`imagens.md`** — geradores de imagem grátis (Pollinations, Cloudflare, Gemini free) pra quando o carrossel/LP/site pedir foto real.
4. **`componentes-21st.md`** — o turbo opcional do `/site-foda`: Magic MCP (21st.dev) pra componentes famosos. Sem ele tudo funciona — o motor é o `claude-design`.
5. **`whisper-local.md`** — transcrição grátis e offline no seu PC. O caminho normal é o Claude instalar pra você; verificação com `node scripts/transcrever.mjs --check`.
6. **`instagram-metricas.md`** — métricas no modo básico: onde ficam os Insights e o que printar pra `/metricas`.
7. **`windsor.md`** — métricas no modo turbo: conector grátis que puxa os números do perfil sozinho.
8. **`meta-ads.md`** — conector do Gerenciador de Anúncios pro `/trafego` ler as campanhas sozinho (o modo básico é print das colunas).
9. **`notion.md`** — espelhar o banco de campeões na nuvem. 100% opcional.
10. **`mcp.template.json`** + **`mcp.template.leia-me.md`** — só pra MCP local/customizado. A maioria **não** precisa disso (o leia-me explica em 30 segundos por quê).

## Regra de ouro
Se algo não conectar, **não trave** — volta pro modo básico e segue. O DutyX foi feito pra você nunca ficar preso.
