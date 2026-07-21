---
name: configurar
description: >
  Conduz a pessoa a ligar o ARSENAL do DutyX (o que dá o melhor resultado) — quase tudo de graça. Explica
  que os MCPs (Windsor, Meta, Higgsfield, Notion) são conectores nativos do Claude (Conectores → Novo
  conector → login) e que a transcrição usa o Whisper local (baixar 1x, grátis). Use quando a pessoa disser
  "configurar", "conectar ferramentas", "setup", "ligar os conectores/MCPs", "quero o melhor resultado",
  "como conecto o Windsor/Meta/Higgsfield", "turbinar o DutyX".
---

# /configurar — liga o arsenal do DutyX (turbo grátis)

O DutyX funciona no **modo básico** sem nada. Pra ter **o melhor resultado**, vale ligar o arsenal (modo **turbo**) — montado pra rodar **só com ferramentas gratuitas**. Conduza com calma, uma de cada vez, no nível da pessoa, e **sem nunca deixar ela travada** (regra de ouro).

## 🔌 Como ligar os conectores (diga isso à pessoa)
Windsor, Meta, Higgsfield e Notion são **conectores NATIVOS do Claude** — não instala nada, não edita arquivo:

> **Conectores → Novo conector → escolher a ferramenta → fazer login.**

Depois de logar, o DutyX já usa. (O Whisper é a exceção: não é conector, é um programa grátis que a pessoa baixa no PC — ver abaixo.)

**Prove que funcionou (não pule):** conexão sem prova é conexão que o leigo não confia. Logo depois de ligar cada conector, faça um teste real na hora — ligou o Windsor? "me diz teu @ que eu já puxo teus 3 posts com mais alcance." Ligou o Meta? puxe o resumo da conta. Se o conector aparecer mas der erro, o clássico resolve: desconectar e logar de novo.

## O arsenal — quase tudo grátis

**Grátis (o turbo pra todo mundo):**
| Ferramenta | Destrava | Como liga | Frente |
|---|---|---|---|
| **Windsor** (conector) | métricas do Instagram automáticas | Conectores → Novo conector → login | `/metricas`, `/social-media` |
| **Meta** (conector) | dados dos seus anúncios | Conectores → Novo conector → login | `/trafego` |
| **Whisper local** | transcrever vídeos no seu PC | **baixar 1x** (ver `setup/whisper-local.md`) | `/aprender-video`, `/metricas` |
| **Render de carrossel** (Node + Playwright) | exporta os slides do carrossel em PNG automático | `npm install playwright` na pasta, 1x — o Claude escreve e roda o script na hora; sem ele, o fallback é abrir o `carrossel.html` no navegador e tirar print de cada slide | `/carrossel` |
| **Pollinations / Gemini free** | imagem real no carrossel | link sem cadastro / chave grátis (`setup/imagens.md`) | `/carrossel` |
| **21st.dev** (copiar do site) + **Framer Motion** + **claude-design** | site de agência: componentes + animação + gosto de design | copiar componente (grátis) / `npm install framer-motion` (`setup/componentes-21st.md`) | `/site-foda` |
| **Vercel** (deploy grátis) | pôr sua landing/site NO AR com link de verdade | ver `setup/deploy.md` (eu conduzo) | `/landing-page`, `/site-foda` |
| Instagram Insights (manual) | métricas sem conectar nada | você traz os tops | `/metricas` |

**Opcional (pago ou nuvem):**
| Ferramenta | Por quê | Como liga |
|---|---|---|
| **Higgsfield** (conector) | imagem premium | Conectores → Novo conector → login |
| **Notion** (conector) | banco na nuvem (tem tier grátis) | Conectores → Novo conector → login |
| **21st.dev Magic** (`/ui`) | gerar componente automático no editor | freemium, chave própria (MCP local — `setup/componentes-21st.md`) |

## Conscientização sobre o Whisper (transcrição)
A transcrição do DutyX (no `/aprender-video` e no `/metricas`) **roda com o Whisper local** — grátis, no PC da pessoa. **Pra usar, ela precisa baixar o Whisper uma vez** (`setup/whisper-local.md`). Deixe isso claro quando o assunto for transcrição. Sem o Whisper, dá pra colar a legenda/fala na mão (básico) — nunca trave a pessoa.

**Modo diagnóstico:** pra checar se tá tudo no lugar SEM precisar de um vídeo, rode `node scripts/transcrever.mjs --check` — ele confere ffmpeg, o executável do Whisper e o modelo, e diz exatamente o que falta. Use isso ANTES da primeira transcrição de verdade, e sempre que der erro estranho.

## O jeito visual de fazer tudo isso: o painel
O painel do DutyX (`npm run painel` → abre no navegador, só no PC da pessoa) mostra o arsenal inteiro com o status real de cada item — ✅ conectado / ❌ faltando — e deixa: salvar chave de API (vai pro `.env` local), marcar conectores do app como ligados e ver o passo a passo de cada ferramenta. **Ofereça o painel como primeiro caminho** ("quer ver isso em tela, em vez de por texto? roda `npm run painel`"), e conduza por aqui pra quem preferir o chat. Depois de qualquer conexão, o painel/sonda atualiza `_contexto/arsenal.md` — é lá que você confere o que já tá ligado sem perguntar de novo (a sonda também roda por comando: `node scripts/checar_arsenal.mjs`).

## Regra de ouro
Nada aqui é obrigatório pro DutyX funcionar, e o que dá o melhor resultado é **grátis**. Pago (Higgsfield) é só pra quem quer um extra. **Nunca** dê a entender que a pessoa "precisa" de algo pago pra começar — ela começa hoje, no básico, e liga o arsenal grátis quando quiser.
