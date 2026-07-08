---
name: roteiro-video
description: >
  Cria o roteiro de um reel / vídeo curto que prende nos 3 primeiros segundos e converte (envio,
  comentário, seguir, salvar), no tom da marca de quem usa o DutyX. Ensina primeiro o que faz um reel
  reter e converter (o hook com técnica, a retenção no segundo 2, o CTA certo) e só depois escreve.
  Use quando a pessoa pedir "roteiro de reel", "roteiro de vídeo", "script pro vídeo", "ideia de reel",
  "me dá o reel de hoje", "roteiro pro TikTok/Shorts". Para carrossel estático, use a frente /carrossel.
---

# /roteiro-video — reel que prende e converte (parte da aba /social-media)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, escreve o COMO, fecha aprendendo. O tom é o **da marca do cliente** (lê `_contexto/marca.md`), nunca a voz do Lucas — o sistema escreve no jeito de quem está usando, sobre o negócio dele.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, pra quem), `_contexto/marca.md` (tom de voz, bordões, jeito de falar) e `_contexto/estrategia.md` (objetivo atual: crescer seguidor? gerar lead? vender?). O CTA certo depende do objetivo. Se houver padrão de viral em `saidas/metricas/`, use pra calibrar hook e tema.

## 1. O QUÊ (ensina — não pule)
Conduza a pessoa pela lição `_aprenda/roteiro-video.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- **Os 3 primeiros segundos decidem tudo** — e tem técnica: corta o "oi gente", começa no meio da ação, primeiro quadro com movimento, overlay que complementa a fala.
- **O segundo 2 é o penhasco:** se a retenção despenca no início, o problema é o hook, não o vídeo.
- **Envio é a métrica rainha:** o vídeo bom é o que alguém manda pra um amigo.
- A estrutura: hook → problema → promessa → passo a passo → prova → CTA. Cada frase puxa a próxima.
- O CTA bom gera **envio, comentário ou seguir**, não só "curte".
Não despeje a lição inteira — pegue os pontos que importam pro caso dela.
Se a pessoa pedir pra pular ("só faz"), aplique a regra dos 30 segundos do CLAUDE.md: dê o essencial em uma frase antes de construir.

## 2. O PORTÃO (confirma)
Faça 2-3 perguntas que ao mesmo tempo checam entendimento e coletam o que precisa pra escrever:
- "Sobre o que é esse vídeo, em uma frase? (uma ideia só por reel)"
- "Nos 3 primeiros segundos, por que alguém PARA de rolar pra ver isso? E quem mandaria esse vídeo pra quem?"
- "Qual a ÚNICA ação que você quer no fim — envio, comentário, seguidor ou salvamento? (escolhe uma)"
Só siga pro como depois das respostas. Se o hook que ela deu for fraco ("oi gente, hoje vou falar de..."), aponte e proponha alternativas do banco de hooks antes de escrever — esse é o coração do trabalho.

## 3. O COMO (escreve)
1. Confirme em 1 linha a rota: "vou escrever no teu tom, com marcação de cena e overlay, focado em [ação escolhida]."
2. **Hook primeiro:** proponha **3 hooks de mecanismos DIFERENTES** do `_blocos/social-media/banco-de-hooks.md`, adaptados ao nicho dela, e deixe escolher.
3. Escreva o roteiro seguindo `_blocos/roteiro-video/estrutura.md`, **no tom da marca do cliente** — bordões dele, jeito dele de falar, sobre o negócio dele. Se o objetivo for busca (cliente local/serviço), faça a palavra-chave ser FALADA nos primeiros segundos.
4. Entregue no formato:
   - **TIPO** (educativo / bastidor / história) | **CTA escolhido** | **DURAÇÃO ALVO** (a conta: 2,5-3 palavras/segundo → 30s ≈ 80 palavras)
   - **HOOK (0-3s):** a primeira fala + a instrução do primeiro quadro (movimento/ação em cena)
   - **FALA:** em blocos curtos, com [marcação de cena] — troca de enquadramento a cada 2-3s
   - **TEXTO NA TELA (overlays):** o que aparece escrito em cada momento (complementa a fala, não repete)
   - **LEGENDA:** fórmula de `_blocos/social-media/legendas-hashtags.md` (1ª linha + palavra-chave por extenso + CTA + 3-5 hashtags específicas)
   - **GANCHO DE RETENÇÃO:** o que mantém a pessoa até o fim
5. Se for hook/tema/formato novo pra ela, sugira publicar como **trial reel** (testa só com quem não segue; performou, publica de verdade) — teste sem queimar o feed.
6. Salve em `saidas/roteiros/<tema>-<data>.md`.
7. Ofereça uma ideia reserva. Se ela quiser produzir o vídeo (edição/legenda): com a skill `hyperframes` disponível no Claude Code dela, dá pra montar por aqui; sem ela, o caminho leigo é o **CapCut** (grátis, celular ou PC) — grava, joga o roteiro e usa a legenda automática. Nunca trave por ferramenta.

## 4. O FECHO (aprende)
Pergunte o que ela achou. Se ela ajustar algo de tom recorrente (um bordão, um jeito de fechar, um tipo de CTA que prefere), ofereça salvar em `_contexto/marca.md`. Anote no `_contexto/historico.md` o que foi feito.

## Checklist antes de entregar
- [ ] O hook para o scroll nos 3 primeiros segundos — e o primeiro quadro tem movimento?
- [ ] Uma ideia só no vídeo, com promessa clara do que a pessoa ganha?
- [ ] O vídeo passa no teste "quem mandaria isso pra quem?"
- [ ] O CTA gera envio/comentário/seguir/salvar (não só "curte")?
- [ ] Tem overlay marcado (pra quem assiste sem som) — complementando a fala, não repetindo?
- [ ] Legenda com palavra-chave pesquisável + 3-5 hashtags específicas?
- [ ] Tom é o da marca do CLIENTE, não a voz do Lucas?
- [ ] Salvo em `saidas/roteiros/`?

## Quando mandar pra outra frente
- Quer um carrossel estático (slides) → `/carrossel`.
- Quer a linha editorial / o que postar na semana → `/social-media`; calendário do mês → `/planejamento`.
- Quer saber se o roteiro tem a cara dos teus campeões → `/metricas`.
- Quer transformar o roteiro em vídeo editado/legendado → skill `hyperframes` (se disponível) ou CapCut (grátis, legenda automática).
