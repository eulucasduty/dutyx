---
name: trafego
description: >
  Monta um plano de tráfego (orgânico + pago) na realidade de quem usa o DutyX: objetivo, oferta certa,
  criativos, orçamento de teste em reais e a régua de decisão (escalar ou matar) — e entrega o passo a
  passo REAL do Gerenciador de Anúncios pra pessoa publicar sozinha, mesmo leiga. Ensina primeiro o que
  faz tráfego trazer cliente (e não só view) e só depois constrói. Use quando a pessoa pedir "tráfego",
  "anúncio", "campanha", "ads", "impulsionar", "anunciar no Instagram/Facebook", "como conseguir cliente",
  "quero mais lead/venda", ou disser que tá "gastando e não vende". Conector Meta é OPCIONAL (só leitura
  de números) — o caminho crítico é 100% na mão.
---

# /trafego — plano de tráfego que traz cliente (frente DutyX)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. Entrega **plano + estrutura de campanha + criativos + o mapa de cliques do Gerenciador + leitura de resultado**. Conector Meta (`setup/meta-ads.md`) é turbo de LEITURA — nunca pré-requisito, e nunca publica nem mexe em verba sozinho.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, ticket, pra quem), `_contexto/marca.md` (tom) e `_contexto/estrategia.md` (objetivo e gargalo). Se já tem landing page, WhatsApp ativo ou perfil rodando, isso é o destino do tráfego — anote. **Se não existe oferta clara (promessa + preço + por que agora), pare e mande pra `/oferta` primeiro — anúncio não conserta oferta fraca.**

## 1. O QUÊ (ensina — não pule)
Conduza pela lição `_aprenda/trafego.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- **A oferta casa com a temperatura** do público — e hoje a temperatura mora na COPY, não no painel.
- **Público aberto (broad) é o padrão atual; o CRIATIVO é a segmentação de verdade.** Micro-segmentar por interesse é o jeito velho — queima dinheiro.
- **Estrutura simples ganha:** 1 campanha Advantage+, orçamento na campanha (CBO), 1 conjunto amplo, 3-5 criativos competindo.
- **Fase de aprendizado:** publicou, não mexe em NADA por 3-7 dias. Cada edição zera o progresso.
- **Métrica de vaidade (view) ≠ custo por resultado.** E a decisão é matemática: **CPA-alvo calculado do ticket** → matar criativo que gastou 2x o alvo sem resultado; escalar +20% o que fica abaixo do alvo por 3-4 dias.
- **Orçamento realista: R$30-50/dia de teste, R$300-500 no total** antes de julgar. Não cabe agora? Orgânico primeiro, sem drama.
Não despeje a lição inteira — pegue o que importa pro caso (quem nunca anunciou: temperatura + broad/criativo + orçamento + aprendizado).
Se a pessoa pedir pra pular ("só faz"), aplique a regra dos 30 segundos do CLAUDE.md: dê o essencial em uma frase antes de construir.

## 2. O PORTÃO (confirma)
2-3 perguntas que checam entendimento e coletam o que falta. **Só passe pro como depois do "entendi".** A âncora é obrigatória:
- **"Qual é a ÚNICA ação que vale dinheiro pra você — lead, venda ou mensagem — e quanto você topa pagar por ela?"** (se não souber, calcule juntos: ticket × taxa de fechamento → teto por lead → mire a metade).
- "Pra onde o clique vai — WhatsApp, formulário ou uma página? Tem isso pronto?"
- "Você tem R$30-50/dia por 7-10 dias sem apertar o caixa, ou a gente testa a mensagem no orgânico primeiro?"

## 3. O COMO (constrói)
1. Confirme a rota em 1 linha: "vou montar plano + criativos + o passo a passo do Gerenciador pra você publicar, e a gente lê o resultado junto."
2. Monte o plano preenchendo `_blocos/trafego/estrutura-campanha.md` com o contexto dela, no **tom da marca do cliente**: objetivo + CPA-alvo, estrutura simples (broad/CBO), copy por temperatura, 3-5 ganchos de criativo, destino, orçamento de teste com janela.
3. **Entregue o mapa de cliques:** conduza (ou deixe pronto pra ela seguir) o `_blocos/trafego/passo-a-passo-gerenciador.md` — do "+ Criar" ao "Publicar", com os erros comuns traduzidos. Quem clica em Publicar e mexe em dinheiro é sempre ela.
4. Salve em `saidas/trafego/<nome>-<data>/plano.md`.
5. **Leitura de resultado** (quando ela voltar com números — Resultados, Custo por resultado, Valor usado; com o conector Meta ligado, puxe você): aplique a régua do bloco — matar criativo (2x alvo sem resultado), escalar +20% (abaixo do alvo 3-4 dias), diagnosticar gancho vs. página. Sempre custo por resultado, nunca view. Registre em `saidas/trafego/`.

## 4. O FECHO (aprende)
Pergunte se o plano coube na realidade dela. Se revelar algo recorrente (ticket, CPA que funciona, canal preferido, verba mensal), ofereça salvar em `_contexto/negocio.md` ou `_contexto/estrategia.md`. Anote em `_contexto/historico.md` o que foi feito e o combinado (ex: "publicou dia X, não mexer até dia Y, voltar com custo por resultado").

## Checklist antes de entregar
- [ ] O objetivo é uma ação que vale dinheiro (não view/seguidor)?
- [ ] CPA-alvo calculado a partir do ticket (e a conta fecha)?
- [ ] Estrutura simples: broad + CBO + 3-5 criativos (sem fatiamento de interesse)?
- [ ] Ganchos chamam a pessoa certa pelo nome da dor (criativo = segmentação)?
- [ ] Orçamento realista (R$30-50/dia) com janela de 7-10 dias e aviso da fase de aprendizado?
- [ ] Regra escalar/matar explicada com número, não achismo?
- [ ] Destino com UM objetivo (WhatsApp/formulário/página — nunca feed)?
- [ ] Passo a passo do Gerenciador entregue/percorrido?
- [ ] Tom do criativo é o da marca do CLIENTE, sem cara de guru?
- [ ] Salvo em `saidas/trafego/` — e tudo funciona sem conector?

## Quando mandar pra outra frente
- Não existe oferta clara pra anunciar → `/oferta` (antes de qualquer verba).
- O destino precisa de uma página → `/landing-page` (ou `/site-foda` pro efeito wow).
- O criativo vira vídeo curto → `/roteiro-video`; vira post pra aquecer no orgânico → `/carrossel`.
- O clique cai no WhatsApp e precisa virar venda na conversa → `/whatsapp`.
- Lead chegou e empacou em proposta/objeção → `/vendas`.
