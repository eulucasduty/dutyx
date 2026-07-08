# Catálogo do DutyX — tudo que o sistema faz

> A lista rápida. Os comandos com `/` você digita direto no Claude Code. Toda frente segue a Lei do DutyX: te ensina o **quê** antes de mostrar o **como**. Prefere ver desenhado? O guia visual é o `GUIA.html`.

## 🔄 Ciclo de vida (o dia a dia do sistema)

| Comando | O que faz | Chama quando |
|---|---|---|
| `/instalar` | Setup inicial: te entrevista (~5 min), monta a memória em `_contexto/` e cola seu perfil no cérebro do sistema. | acabou de baixar. Roda **uma vez**. |
| `/abrir` | Começo de sessão: carrega contexto + histórico e te diz o que dá pra atacar hoje. | todo dia, ao sentar pra trabalhar. |
| `/fechar` | Fim de sessão: resume o que saiu, registra entrada datada no `_contexto/historico.md` e oferece o `/salvar`. | vai parar ("terminei", "até amanhã"). |
| `/salvar` | Backup no seu GitHub — repositório **PRIVADO**, incluindo `saidas/` (o backup guarda o SEU trabalho). Na primeira vez, te ajuda a criar/conectar o repo. | fim de sessão importante, ou "quero guardar". |
| `/atualizar` | Reconcilia a memória com a realidade: detecta o que mudou no negócio e propõe ajustes no `_contexto/`. | mudou o foco/oferta/negócio, ou a memória envelheceu. |
| `/configurar` | Liga o arsenal turbo (Whisper local, Windsor, Meta, Notion, render de carrossel; Higgsfield é o único pago — opcional) — quase tudo grátis. Ver pasta `setup/`. | quer o melhor resultado. Opcional: o básico funciona sem nada. |
| `/aprender-video` | Você joga uma técnica que achou por aí (reel, tutorial, print, link, texto) e o DutyX **absorve a lógica** e integra no sistema. | "aprende esse vídeo", "traz essa técnica pro DutyX". |

## 🏗️ Construção (páginas e sites)

| Frente | Comando | O que entrega | Chama quando |
|---|---|---|---|
| **Landing Page** | `/landing-page` | página que converte, do zero, na sua marca (motor `claude-design`). Se a oferta ainda não existe, ela te manda pra `/oferta` antes — página é embalagem. | "página pra vender X", "página de captura", "LP". |
| **Site Foda** | `/site-foda` | o "site de US$10k": Rota Rápida (CSS puro, zero instalação) ou Rota Completa (GSAP + ScrollTrigger + Lenis, 3D), sempre rápido de carregar. Componentes 21st.dev = turbo opcional. | "site profissional", "efeito wow", "site tipo agência". |

> Construiu? O `setup/deploy.md` põe no ar — degrau 0 é o Netlify Drop (arrasta a pasta, zero terminal).

## 📱 Conteúdo

| Frente | Comando | O que entrega | Chama quando |
|---|---|---|---|
| **Social Media** (hub) | `/social-media` | a aba de redes sociais: linha editorial por pilares (com proporções por objetivo), ideias, legenda e hashtags (3-5 específicas) — e roteia pro resto. | "meu Instagram", "o que posto", "linha editorial". |
| ↳ Carrossel | `/carrossel` | carrossel que para o scroll: copy slide a slide + arte em HTML na sua marca. Exporta com **print no navegador** (render PNG automático = turbo via `/configurar`). | "post arrastável", "carrossel", "sequência de slides". |
| ↳ Roteiro de Vídeo | `/roteiro-video` | roteiro de reel/vídeo curto que prende nos 3 primeiros segundos e converte. | "roteiro de reel", "ideia de vídeo", "script pro TikTok/Shorts". |
| ↳ Métricas | `/metricas` | acha o SEU padrão de viral a partir dos seus campeões e pontua ideias novas. Modo básico: **cola print dos Insights** (Windsor/Whisper = turbo). | "por que esse post bombou", "o que tá funcionando". |

## 💼 Negócio

| Frente | Comando | O que entrega | Chama quando |
|---|---|---|---|
| **Oferta** 🆕 | `/oferta` | a fundação — promessa, mecanismo, preço com âncora, garantia e urgência honesta. Canvas salvo em `saidas/ofertas/`. | "quanto eu cobro", "ninguém compra", "empacotar meu serviço". |
| **Planejamento** | `/planejamento` | plano de 90 dias: UMA meta com número, o gargalo, a métrica-norte, calendário e a prioridade da semana. | "tô perdido, por onde começo", "metas do trimestre". |
| **Tráfego** | `/trafego` | plano de tráfego (orgânico + pago), passo a passo real do Gerenciador de Anúncios e a régua escalar/matar por CPA. | "quero anunciar", "impulsionar", "gasto e não vende". |
| **Vendas** | `/vendas` | proposta enxuta, banco de objeções e follow-up d+1/d+3/d+7 com coleta de depoimento. | "proposta", "o cliente disse que tá caro", "copy de venda". |
| **WhatsApp** 🆕 | `/whatsapp` | scripts de atendimento por etapa + follow-up pra fechar no chat, na sua voz. Salva em `saidas/whatsapp/`. | "lead some no zap", "como respondo", "visualizou e sumiu". |

## Como o sistema é organizado (pra você se achar)

- `_contexto/` — a memória do SEU negócio (o sistema preenche no `/instalar`).
- `_aprenda/` — as aulas "o quê" de cada frente. Pode ler quando quiser, valem sozinhas.
- `_blocos/` — a matéria-prima que o sistema usa pra construir: banco de hooks, arquétipos de carrossel, canvas de oferta, scripts de zap, objeções, efeitos CSS, copy de LP...
- `perfis/` — os dois modos de usar (empresário / vibecoder). O `/instalar` escolhe o seu.
- `setup/` — guias do arsenal (turbo, opcional) + o `socorro.md` (primeiros socorros do dia 1).
- `scripts/` — utilitários (ex: transcrever vídeo; `node scripts/transcrever.mjs --check` diagnostica).
- `saidas/` — tudo que você criar fica aqui. E vai junto no backup privado do `/salvar`.

> O DutyX cresce. Frentes e aulas novas vão sendo adicionadas — quando chegar uma, ela aparece aqui.

## O que NÃO vira frente (de propósito)

Sistema bom é o que cabe na cabeça. O critério pra virar frente: **só entra o que o dono repete toda semana E que ensina um QUÊ próprio.** Por isso, de propósito, NÃO viram frente:

- **E-mail marketing e CRM** — pro tamanho de negócio do DutyX, o "CRM" é o WhatsApp + o `_contexto/`. Ferramenta a mais = fricção a mais.
- **Bot de WhatsApp / automação de disparo** — quem escreve é o DutyX, quem envia é você (regra de segurança). Robô respondendo cliente esfria venda quente.
- **Precificação e análise de concorrente como frentes separadas** — preço mora dentro da `/oferta`; olhar concorrente é pesquisa pontual, não rotina semanal.
- **Branding como frente** — a marca vive em `_contexto/marca.md` e entra em TUDO que o sistema constrói. Frente de "identidade visual" solta vira exercício de estética sem venda.
- **Uma frente por plataforma (TikTok, YouTube, LinkedIn...)** — o QUÊ de conteúdo é o mesmo (hook, retenção, CTA); muda o formato, não a lógica. `/roteiro-video` e `/carrossel` cobrem isso.

Se um dia uma dessas repetir toda semana no SEU negócio e pedir um QUÊ próprio, ela entra — o DutyX cresce pelo uso, não pelo catálogo.
