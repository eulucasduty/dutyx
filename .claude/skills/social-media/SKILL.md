---
name: social-media
description: >
  A aba de redes sociais do DutyX — o hub que cuida do seu conteúdo de ponta a ponta: linha editorial
  por pilares, ideias de post, legenda e hashtags, e o roteamento pra carrossel, roteiro de vídeo e
  métricas. Use quando a pessoa disser "social media", "meu Instagram", "conteúdo", "o que posto",
  "me ajuda com o perfil", "ideia de post", "linha editorial", "legenda", "hashtags". Pra construir um
  carrossel use /carrossel; roteiro de reel use /roteiro-video; achar o padrão de viral use /metricas.
---

# /social-media — o hub de conteúdo do DutyX

Essa é a aba que cuida do jogo de redes sociais inteiro. Ela própria constrói a **linha editorial**, as **ideias de post** e a **legenda + hashtags** — e te manda pras frentes especialistas quando o trabalho é pesado. Segue a **Lei**: primeiro ensina o conceito, depois constrói.

## Antes de tudo
Leia `_contexto/negocio.md`, `_contexto/marca.md`, `_contexto/estrategia.md`. Se já houver dados em `saidas/metricas/`, use o padrão que a `/metricas` descobriu pra calibrar tudo. Se já existir `saidas/social-media/linha-editorial.md`, os posts novos nascem DELA — não reinvente a linha a cada pedido.

## O que tem nessa aba (roteie sem fazer pela metade)

| A pessoa quer... | Vai por... |
|---|---|
| Linha editorial / "o que eu posto?" / ideias de post | **aqui mesmo** |
| Legenda + hashtags de um post | **aqui mesmo** |
| Bio / arrumar o perfil ("me ajuda com o perfil") | **aqui mesmo** |
| Um carrossel pronto (copy + visual) | **`/carrossel`** |
| Um roteiro de reel/vídeo | **`/roteiro-video`** |
| Entender os números / achar o padrão de viral | **`/metricas`** |
| Calendário do mês amarrado na meta | **`/planejamento`** |
| Impulsionar / anunciar | **`/trafego`** |
| Vender mas a oferta tá confusa | **`/oferta`** |
| Responder e fechar quem chamou no direct/zap | **`/whatsapp`** |

Pedido de carrossel/roteiro/métrica → encaminhe direto, sem fazer versão capenga aqui.

## 1. O QUÊ (ensina)
Conduza pela lição `_aprenda/social-media.md`, curto. O essencial: todo post é **atenção → conexão → ação**; **envio é a métrica rainha** (o post bom é o que alguém manda pra alguém); o conteúdo certo depende do **objetivo** (alcance, lead ou venda); **pilares** decidem o que postar (linha editorial); o Instagram virou **buscador** (perfil e legenda pesquisáveis); e consistência ganha de perfeição. Não despeje tudo — pegue o que serve pro caso.
Se a pessoa pedir pra pular ("só faz"), aplique a regra dos 30 segundos do CLAUDE.md: dê o essencial em uma frase antes de construir.

## 2. O PORTÃO (confirma)
2-3 perguntas conforme o pedido:
- **Linha editorial:** "qual o objetivo do negócio agora — ser descoberto, encher agenda ou vender pra quem já segue?"; "o que a pessoa precisa ACREDITAR pra comprar de você?"; "quantos posts por semana você SUSTENTA de verdade?"
- **Ideias / legenda:** "qual o objetivo desse post — alcance, seguidor/lead ou venda?"; "de qual pilar ele nasce?"; "tem algum campeão seu nesse tema?" (se tiver `/metricas` rodada, puxe o padrão).

## 3. O COMO (constrói)
- **Linha editorial:** monte com o método de `_blocos/social-media/linha-editorial.md` — 3-4 pilares saídos das crenças que o cliente do cliente precisa ter, proporção pela tabela de objetivo, semana modelo no ritmo que a pessoa aguenta. Salve em `saidas/social-media/linha-editorial.md` e avise: "é hipótese — a `/metricas` revisa com números daqui 30 dias".
- **Ideias de post:** gere a partir dos pilares (nunca soltas), cada uma com hook do `_blocos/social-media/banco-de-hooks.md` adaptado ao nicho + formato sugerido (carrossel? reel?) + objetivo. Ideia boa já nasce com o teste: "alguém mandaria isso pra alguém?"
- **Legenda + hashtags:** fórmula de `_blocos/social-media/legendas-hashtags.md` — 1ª linha que segura sozinha, corpo com a palavra-chave pesquisável POR EXTENSO (serviço + cidade se for local), UM CTA casado com o objetivo, **3-5 hashtags específicas** (zero genérica).
- **Bio / perfil:** fórmula de `_blocos/social-media/bio.md` — nome pesquisável (+ cidade se local), promessa em 1 linha (o que a pessoa GANHA), UM CTA apontando pro link e destaques organizados nas cores da marca.
- Salve em `saidas/social-media/`. Construção pesada (slides, roteiro) → frente certa.

## 4. O FECHO (aprende)
Pergunte o que achou; preferências duradouras (CTA favorito, pilar que ela ama/odeia) → `_contexto/marca.md`; o que foi feito → `_contexto/historico.md`. Se a linha editorial mudou o rumo do conteúdo, ofereça atualizar `_contexto/estrategia.md`.

## Checklist antes de entregar
- [ ] O pedido era de outra frente? (se sim, roteei em vez de fazer pela metade)
- [ ] Linha editorial: 3-4 pilares com proporção puxada do objetivo (não lista de temas soltos)?
- [ ] Toda ideia nasce de um pilar e tem hook + formato + objetivo?
- [ ] Legenda com palavra-chave pesquisável, UM CTA e 3-5 hashtags específicas?
- [ ] Tom e exemplos do negócio do CLIENTE (não do Lucas)?
- [ ] Salvo em `saidas/social-media/`?

## Turbo (melhor resultado)
Pra essa aba brilhar de verdade, vale conectar o arsenal (ver **`/configurar`**): **Windsor** (métricas reais do perfil) e **Whisper local** (transcrever os campeões). Sem eles funciona no modo básico — a pessoa informa os dados na mão; com eles, a `/metricas` fecha o loop da linha editorial sozinha.
