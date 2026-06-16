---
name: metricas
description: >
  Analisa as métricas do seu perfil, acha o SEU padrão de viral a partir dos seus próprios campeões, e
  passa a pontuar roteiros/ideias novos contra esse padrão. Usa Windsor (métricas reais) + Whisper local
  (transcrição dos campeões) + um banco no próprio sistema (Notion opcional). Use quando a pessoa disser
  "métricas", "analisa meu perfil/Instagram", "por que esse vídeo bombou", "o que tá funcionando",
  "esse roteiro tem chance de viralizar?", "acha meu padrão", "monta meu banco de virais".
---

# /metricas — ache seu padrão de viral e calibre o próximo (frente DutyX)

Fecha o loop: medir → transcrever campeões → achar padrão → pontuar o próximo. Segue a **Lei**: ensina o conceito antes de rodar. Inspirada no fluxo Windsor (métricas) + transcrição + banco — mas com **Whisper local no lugar do Algrow** (o transcritor do vídeo original).

## Setup (tudo grátis)
- **Métricas:** **Windsor** (conector nativo do Claude, grátis — Conectores → Novo conector → login) puxa os números sozinho; OU **Instagram Insights** (você traz os tops na mão). Ver `setup/instagram-metricas.md`.
- **Transcrição dos campeões:** **Whisper local** (grátis, roda no PC — a pessoa precisa ter baixado, ver `setup/whisper-local.md`). Sem ele, a pessoa cola as falas/legendas (modo manual).
- **Banco:** no próprio sistema (`saidas/`). Notion é opcional.
- **Nunca trave a pessoa por falta de ferramenta** — ofereça o caminho manual na hora.

## 1. O QUÊ (ensina — não pule)
Conduza pela lição `_aprenda/metricas.md`: vaidade vs sinal; o loop dos 4 passos; e o ponto-chave — achar o SEU padrão em vez de copiar trend. Curto.

## 2. O PORTÃO (confirma)
2-3 perguntas: "o que pra você é 'deu certo' — mais seguidor, mais salvamento, mais venda?" (define o sinal); "você tem Windsor e Whisper ligados, ou vamos no modo básico?"; "qual a janela — últimos 90 dias, 365?".

## 3. O COMO (constrói)
1. **Medir:** com Windsor (MCP), puxe as métricas do perfil e separe os **campeões** pelo sinal escolhido (não só view). No básico, peça à pessoa a lista dos top posts com os números.
2. **Transcrever os campeões:** rode o Whisper local nos vídeos campeões (script de transcrição — ver `/configurar` e `scripts/`). No básico, peça as legendas/falas.
3. **Montar o banco:** salve cada campeão em `saidas/metricas/banco.md` (uma linha por vídeo) no formato de `_blocos/metricas/banco.md` — métrica + transcrição + tema/hook. (Notion é opcional: se a pessoa usar, dá pra espelhar lá.)
4. **Achar o padrão:** analise o banco e escreva, em `saidas/metricas/padrao.md`, o que os campeões têm em comum: tipo de hook, tema, estrutura, duração, CTA. Esse arquivo vira a régua.
5. **Calibrar o próximo:** quando a pessoa trouxer um roteiro/ideia novo, cruze com `padrao.md` e dê um veredito honesto: o que casa com o padrão de viral dela, o que destoa, e 2-3 ajustes concretos pra aumentar a chance. Sem prometer viralização — é probabilidade baseada nos dados dela.

## 4. O FECHO (aprende)
Atualize `saidas/metricas/padrao.md` conforme novos campeões entram (o loop melhora com o tempo) e registre em `_contexto/historico.md`. Ofereça já calibrar o próximo roteiro com a `/roteiro-video`.

## Conexões
- O padrão descoberto alimenta `/roteiro-video`, `/carrossel` e o `/social-media` (ideias). 
- Pra agir nos números, manda pra `/planejamento`.
