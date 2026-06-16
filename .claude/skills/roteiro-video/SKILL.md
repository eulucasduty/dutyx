---
name: roteiro-video
description: >
  Cria o roteiro de um reel / vídeo curto que prende nos 3 primeiros segundos e converte (comentário,
  seguir, salvar), no tom da marca de quem usa o DutyX. Ensina primeiro o que faz um reel reter e
  converter (o hook, a estrutura, o CTA certo, a retenção) e só depois escreve. Use quando a pessoa
  pedir "roteiro de reel", "roteiro de vídeo", "script pro vídeo", "ideia de reel", "me dá o reel de hoje",
  "roteiro pro TikTok/Shorts". Para carrossel estático, use a frente /carrossel.
---

# /roteiro-video — reel que prende e converte (frente DutyX)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, escreve o COMO, fecha aprendendo. O tom é o **da marca do cliente** (lê `_contexto/marca.md`), nunca a voz do Lucas — o sistema escreve no jeito de quem está usando, sobre o negócio dele.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, pra quem), `_contexto/marca.md` (tom de voz, bordões, jeito de falar) e `_contexto/estrategia.md` (objetivo atual: crescer seguidor? gerar lead? vender?). O CTA certo depende do objetivo.

## 1. O QUÊ (ensina — não pule)
Conduza a pessoa pela lição `_aprenda/roteiro-video.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- **Os 3 primeiros segundos decidem tudo** — sem hook que para o scroll, o resto não existe.
- A estrutura: hook → ruptura/problema → promessa → passo a passo → prova → CTA.
- **Retenção:** cada frase puxa a próxima; corta tempo morto.
- O CTA bom gera **comentário ou seguir**, não só "curte".
Não despeje a lição inteira — pegue os pontos que importam pro caso dela.

## 2. O PORTÃO (confirma)
Faça 2-3 perguntas que ao mesmo tempo checam entendimento e coletam o que precisa pra escrever:
- "Sobre o que é esse vídeo, em uma frase? (uma ideia só por reel)"
- "Nos 3 primeiros segundos, por que alguém PARA de rolar pra ver isso? Qual é o hook?"
- "Qual a ÚNICA ação que você quer no fim — gerar comentário, ganhar seguidor ou salvar? (escolhe uma)"
Só siga pro como depois das respostas. Se o hook que ela deu for fraco ("oi gente, hoje vou falar de..."), aponte e proponha 2-3 hooks mais fortes antes de escrever — esse é o coração do trabalho.

## 3. O COMO (escreve)
1. Confirme em 1 linha a rota: "vou escrever no teu tom, com marcação de cena e overlay, focado em [ação escolhida]."
2. Escreva o roteiro seguindo a estrutura de `_blocos/roteiro-video/estrutura.md`, **no tom da marca do cliente** (de `_contexto/marca.md`) — bordões dele, jeito dele de falar, sobre o negócio dele.
3. Entregue no formato:
   - **TIPO** (educativo / bastidor / história) | **CTA escolhido**
   - **HOOK (0-3s):** a primeira fala/frase
   - **FALA (roteiro do que falar):** em blocos curtos, com [marcação de cena] entre colchetes
   - **TEXTO NA TELA (overlays):** o que aparece escrito em cada momento
   - **LEGENDA:** 1ª linha de identidade + CTA + 3-5 hashtags
   - **GANCHO DE RETENÇÃO:** o que mantém a pessoa até o fim
4. Salve em `saidas/roteiros/<tema>-<data>.md`.
5. Ofereça uma ideia reserva e, se ela quiser, produzir o vídeo (legenda/edição) via skill `hyperframes`.

## 4. O FECHO (aprende)
Pergunte o que ela achou. Se ela ajustar algo de tom recorrente (um bordão, um jeito de fechar, um tipo de CTA que prefere), ofereça salvar em `_contexto/marca.md`. Anote no `_contexto/historico.md` o que foi feito.

## Checklist antes de entregar
- [ ] O hook para o scroll nos 3 primeiros segundos (ruptura/medo/promessa/pergunta)?
- [ ] Uma ideia só no vídeo?
- [ ] Tem promessa clara do que a pessoa ganha?
- [ ] O CTA gera comentário/seguir/salvar (não só "curte")?
- [ ] Tem overlay marcado (pra quem assiste sem som)?
- [ ] Tom é o da marca do CLIENTE, não a voz do Lucas?
- [ ] Salvo em `saidas/roteiros/`?

## Quando mandar pra outra frente
- Quer um carrossel estático (slides) → `/carrossel`.
- Quer um plano de quais vídeos postar e quando → `/planejamento`.
- Quer transformar o roteiro em vídeo editado/legendado → skill `hyperframes`.
