# Catálogo do DutyX — tudo que o sistema faz

> Os comandos com `/` você digita direto no Claude Code. Toda frente segue a Lei do DutyX: te ensina o **quê** antes de mostrar o **como**.

## Comandos de sistema

| Comando | O que faz |
|---|---|
| `/instalar` | Setup inicial. Te entrevista e ensina o sistema a te conhecer. Roda uma vez. |
| `/abrir` | Começo de sessão. Carrega seu contexto e te diz o que dá pra atacar hoje. |
| `/salvar` | Faz backup de tudo no seu GitHub (histórico + segurança). |
| `/atualizar` | Revisa e arruma sua memória quando algo mudou no negócio. |
| `/aprender-video` | Você joga um vídeo/técnica que achou por aí (reel de IA, tutorial, print, link ou texto) e o DutyX **absorve a lógica** e passa a aplicar no seu negócio. O sistema cresce com você. |
| `/configurar` | Liga o **arsenal** (Whisper local, Windsor, Meta, Notion) pro melhor resultado. Modo básico funciona sem nada; turbo é com tudo conectado. Ver pasta `setup/`. |

## Frentes (o que dá pra construir)

| Frente | Comando | O que entrega |
|---|---|---|
| **Landing Page** | `/landing-page` | uma página que converte, do zero, na sua marca |
| **Site Foda** | `/site-foda` | site/LP com motion e 3D (o efeito "uau" que prende o olho) |
| **Tráfego** | `/trafego` | plano de tráfego (orgânico + pago), anúncio e leitura de métrica |
| **Social Media** 🆕 | `/social-media` | a aba de redes sociais: ideias, linha editorial, legenda e hashtags — e o hub que liga carrossel, roteiro e métricas |
| ↳ Carrossel | `/carrossel` | carrossel de Instagram, feito em código (jeito Claude nativo) → exporta PNG |
| ↳ Métricas | `/metricas` | acha o SEU padrão de viral (Windsor + Whisper) e pontua roteiros novos |
| ↳ Roteiro de Vídeo | `/roteiro-video` | roteiro de reel/vídeo curto que prende e converte |
| **Planejamento** | `/planejamento` | metas, calendário de conteúdo e prioridade do que fazer |
| **Vendas** | `/vendas` | proposta, copy de venda e quebra de objeção pra fechar |

## Como o sistema é organizado (pra você se achar)

- `_contexto/` — a memória do SEU negócio (o sistema preenche no `/instalar`).
- `_aprenda/` — as aulas "o quê" de cada frente. Pode ler quando quiser, valem sozinhas.
- `_blocos/` — os modelos prontos que o sistema usa pra construir.
- `setup/` — guias pra ligar o arsenal (Whisper, Windsor, Meta, Notion). Opcional, modo turbo.
- `scripts/` — utilitários (ex: transcrever vídeo). Modo turbo.
- `saidas/` — tudo que você criar fica aqui.

> O DutyX cresce. Frentes e aulas novas vão sendo adicionadas — quando chegar uma, ela aparece aqui.
