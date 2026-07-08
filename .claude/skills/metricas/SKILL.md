---
name: metricas
description: >
  Analisa as métricas do seu perfil, acha o SEU padrão de viral a partir dos seus próprios campeões, e
  passa a pontuar roteiros/ideias novos contra esse padrão. Funciona 100% no modo básico: você cola os
  prints/números dos Instagram Insights e a fala dos vídeos na mão. Windsor (puxa métricas sozinho) e
  Whisper local (transcreve sozinho) são turbo opcional. Use quando a pessoa disser "métricas", "analisa
  meu perfil/Instagram", "por que esse vídeo bombou", "o que tá funcionando", "esse roteiro tem chance de
  viralizar?", "acha meu padrão", "monta meu banco de virais".
---

# /metricas — ache seu padrão de viral e calibre o próximo (parte da aba /social-media)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. Fecha o loop: medir → transcrever campeões → achar padrão → pontuar o próximo. **O caminho principal é o modo básico** — a pessoa cola prints/números na mão e funciona hoje, sem ligar nada. Windsor e Whisper só tiram a digitação do caminho: ofereça como "se tiver X fica melhor, quer?", nunca como pré-requisito.

## Antes de tudo
Leia `_contexto/negocio.md` (nicho, objetivo), `_contexto/marca.md` (tom) e `_contexto/estrategia.md` (gargalo — o sinal a priorizar muitas vezes já mora aqui). Se `saidas/metricas/padrao.md` e `banco.md` já existirem, **continue de lá** — o loop é cumulativo, não recomeça do zero.

## 1. O QUÊ (ensina — não pule)
Conduza pela lição `_aprenda/metricas.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- **Vaidade (view/curtida) ≠ sinal** — e o sinal nº 1 do Instagram hoje é o **envio** (compartilhamento), seguido de retenção, salvamento e seguidor ganho.
- **Número absoluto mente: tudo vira taxa por alcance** (envios ÷ alcance, salvamentos ÷ alcance...). É assim que se compara post com post.
- O **funil do perfil**: alcance → visita ao perfil → seguiu. Cada degrau fraco denuncia um problema diferente (conteúdo sem assinatura vs. bio/vitrine confusa).
- **Seu padrão > trend dos outros**: os campeões da própria conta já contaram a fórmula.
Se a pessoa pedir pra pular ("só faz"), aplique a regra dos 30 segundos do CLAUDE.md: dê o essencial em uma frase antes de construir.

## 2. O PORTÃO (confirma)
2-3 perguntas que checam entendimento e coletam o que falta:
- "O que pra você é 'deu certo' — mais seguidor, mais salvamento, mais cliente chamando? (define o SINAL que a gente vai usar pra escolher os campeões)"
- "Qual a janela — últimos 90 dias ou o ano todo?"
- "Você me traz os números colando print dos Insights aqui mesmo (funciona já — eu leio imagem), ou quer ligar o Windsor pra puxar sozinho?" (turbo opcional; se não, segue no básico sem fricção)

## 3. O COMO (constrói)
1. **Medir (modo básico = caminho principal):** peça os tops da janela — a pessoa abre os Instagram Insights e **cola PRINTS aqui (você lê imagem) ou digita os números** (`setup/instagram-metricas.md` mostra onde achar cada um). Calcule as taxas por alcance e separe os **campeões pelo sinal escolhido** — não só por view. *Turbo:* Windsor conectado → puxe você mesmo (`setup/windsor.md`).
2. **Transcrever os campeões:** modo básico — a pessoa cola a legenda/fala de cada campeão. *Turbo:* Whisper local (`setup/whisper-local.md`, `scripts/transcrever.mjs`) transcreve os vídeos sozinho. O arquivo do vídeo pro Whisper: quase sempre é o original que ela já tem no celular/PC de quando postou; se não tiver, no app do Instagram dá pra baixar o próprio reel (abrir o reel → **⋯ → Adicionar ao dispositivo**) e passar pro PC. Sem o arquivo, sem drama: cola a legenda e segue.
3. **Montar o banco:** salve cada campeão em `saidas/metricas/banco.md` no formato de `_blocos/metricas/banco.md` (métricas + taxas + hook + estrutura + transcrição + hipótese). Notion é espelho opcional (`setup/notion.md`).
4. **Achar o padrão:** com 5-10 campeões, escreva `saidas/metricas/padrao.md` — o hook que se repete, os temas, a estrutura, a duração, o CTA que converte. Cruze com as heurísticas da lição (onde ela está acima/abaixo da régua), mas a régua que manda é a comparação entre os posts DELA.
5. **Calibrar o próximo:** roteiro/ideia nova → pontue contra `padrao.md`: o que casa com o padrão, o que destoa, 2-3 ajustes concretos. Veredito honesto — probabilidade baseada nos dados dela, **nunca promessa de viral**.

## 4. O FECHO (aprende)
Pergunte se o padrão encontrado bateu com a intuição dela (quando não bate, é ouro — anote a surpresa). Novos campeões entram no banco e o `padrao.md` se atualiza — o loop melhora com o uso. Se o gargalo revelado for estratégico (ex: perfil não converte visita), ofereça registrar em `_contexto/estrategia.md`. Anote em `_contexto/historico.md` o que foi feito. Se ela curtiu e quer menos digitação, aponte `/configurar` (Windsor + Whisper, grátis).

## Checklist antes de entregar
- [ ] Campeões escolhidos pelo SINAL da pessoa (não só view)?
- [ ] Taxas calculadas por alcance (não comparei números absolutos)?
- [ ] Banco salvo em `saidas/metricas/banco.md` no formato do bloco?
- [ ] Padrão escrito em `saidas/metricas/padrao.md` (hook/tema/estrutura/duração/CTA)?
- [ ] Roteiro novo pontuado com ajustes concretos — sem prometer viralização?
- [ ] Tudo funcionou no modo básico (sem exigir Windsor/Whisper)?
- [ ] Registrado em `_contexto/historico.md`?

## Quando mandar pra outra frente
- Calibrar/escrever o próximo roteiro com o padrão → `/roteiro-video`; virar carrossel → `/carrossel`.
- Ideias e linha editorial a partir do padrão → `/social-media`.
- O padrão descoberto vira anúncio (colocar verba no que já performa) → `/trafego`.
- Os números mostram gargalo de negócio (alcance ok, venda zero) → `/planejamento` ou `/vendas`.
