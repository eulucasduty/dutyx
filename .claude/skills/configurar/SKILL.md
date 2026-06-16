---
name: configurar
description: >
  Conduz a pessoa a conectar o ARSENAL do DutyX (as ferramentas/MCPs que dão o melhor resultado): Whisper
  local (transcrição), Windsor (métricas de Instagram), Meta (anúncios) e, opcional, Notion (banco). Explica
  o porquê de cada um, o nível básico (sem nada extra) vs turbo (com tudo ligado), e nunca deixa a pessoa
  travada. Use quando a pessoa disser "configurar", "conectar ferramentas", "setup", "ligar os MCPs",
  "quero o melhor resultado", "como conecto o Windsor/Whisper/Meta", "turbinar o DutyX".
---

# /configurar — liga o arsenal do DutyX

O DutyX funciona no modo **básico** sem instalar nada — você informa os dados na mão e ele constrói. Mas pra ter **o melhor resultado de todos**, vale conectar o arsenal (modo **turbo**). Essa skill conduz isso com calma, no nível da pessoa, e **sem nunca deixar ela presa num erro** (regra de ouro do DutyX).

## Como conduzir
1. Pergunte o que ela quer turbinar primeiro (ou explique o arsenal e deixe ela escolher). Não despeje tudo — uma ferramenta por vez.
2. Pra cada uma, diga em 1 frase **o que ela destrava** e qual frente do DutyX ela potencializa.
3. Mande o passo a passo do guia em `setup/<ferramenta>.md`, acompanhando.
4. Se travar, traduza o erro e resolva junto. Se não rolar agora, registre como "pendente" e siga no modo básico — o trabalho não para.

## O arsenal — turbo é GRÁTIS (pago só se quiser)

**Grátis (o turbo pra todo mundo):**
| Ferramenta | Destrava | Potencializa | Guia |
|---|---|---|---|
| **Whisper local** | transcrever vídeos no seu PC, offline | `/aprender-video`, `/metricas` | `setup/whisper-local.md` |
| **Instagram Insights** (nativo) | métricas do seu perfil, de graça | `/metricas`, `/social-media` | `setup/instagram-metricas.md` |
| **Pollinations / Cloudflare / Gemini free** | imagem real no carrossel (quando precisar) | `/carrossel` | `setup/imagens.md` |
| Banco no próprio sistema (`saidas/`) | guardar campeões | `/metricas` | — |

**Pago (upgrade opcional — nunca necessário):**
| Ferramenta | Por que pagar | Guia |
|---|---|---|
| **Windsor** (MCP) | métricas automáticas (sem digitar) | `setup/windsor.md` |
| **Higgsfield** e cia | imagem premium | `setup/imagens.md` |
| **Notion** (MCP) | banco na nuvem (tem tier grátis) | `setup/notion.md` |
| **Meta** (MCP) | dados de anúncio automáticos (a API é grátis, mas o setup é técnico) | `setup/meta-ads.md` |

## Como os MCPs se conectam (o jeito certo)
A maioria desses (Windsor, Meta, Notion) se conecta pelo **fluxo de conectores do Claude Code** (o comando `/mcp` no Claude Code, ou a tela de conectores do app) — você autoriza com login, sem editar arquivo. Pra um MCP **local/customizado**, existe o modelo `setup/mcp.template.json` (esqueleto comentado). O guia de cada ferramenta diz qual caminho usar.

## Regra de ouro (repete sempre)
Nada aqui é obrigatório pro DutyX funcionar. O básico já entrega. O turbo é pra quem quer o resultado máximo. **Em nenhum momento** deixe a pessoa achar que "precisa" de tudo isso pra começar — ela começa hoje, no básico, e liga o arsenal quando quiser.
