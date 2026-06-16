---
name: trafego
description: >
  Monta um plano de tráfego (orgânico + pago) na realidade de quem usa o DutyX: objetivo, públicos por
  temperatura, oferta certa, ideia de criativo, orçamento de teste e a métrica-norte — e depois ajuda a
  ler os resultados pra decidir o que escalar ou cortar. Ensina primeiro o que faz tráfego trazer cliente
  (e não só view) e só depois constrói. Use quando a pessoa pedir "tráfego", "anúncio", "campanha", "ads",
  "impulsionar", "anunciar no Instagram/Facebook", "como conseguir cliente", "quero mais lead/venda",
  ou disser que tá "gastando e não vende". Integração com conta de anúncio/API é OPCIONAL e fica fora do
  caminho crítico — a frente entrega o PLANO que a pessoa aplica, mesmo sendo leiga.
---

# /trafego — plano de tráfego que traz cliente (frente DutyX)

Segue a **Lei do DutyX**: ensina o QUÊ, confirma no PORTÃO, constrói o COMO, fecha aprendendo. O que essa frente entrega é **plano + estrutura de campanha + ideia de criativo + leitura de métrica** — coisa que a pessoa aplica na mão, sem depender de integração técnica. Conectar conta de anúncio/API é **opcional** e nunca pré-requisito.

## Antes de tudo
Leia `_contexto/negocio.md` (o que vende, ticket, pra quem), `_contexto/marca.md` (tom de voz) e `_contexto/estrategia.md` (objetivo e gargalo atual). Se já tem landing page ou perfil rodando, isso é o destino do tráfego — anote.

## 1. O QUÊ (ensina — não pule)
Conduza a pessoa pela lição `_aprenda/trafego.md` em conversa curta. O essencial que ela TEM que sair entendendo:
- **Temperatura do público** (frio / morno / quente) e que **a oferta tem que casar com a temperatura** — não pede casamento no primeiro "oi".
- **Os 3 primeiros segundos do criativo decidem** se a pessoa fica — o gancho é onde mora o esforço.
- **Métrica de vaidade (view) ≠ métrica que importa (custo por resultado).** Boleto não se paga com curtida.
- **Orgânico aquece, pago escala.**
- **Funil simples: criativo → página → ação.** O elo mais fraco define o resultado.
- **Começa por remarketing** — quem já te conhece é o cliente mais barato.
Não despeje a lição inteira — pegue os pontos que importam pro caso dela (ex: se ela é leiga e nunca anunciou, foque em temperatura + custo por resultado + remarketing).

## 2. O PORTÃO (confirma)
Faça 2-3 perguntas que ao mesmo tempo checam entendimento e coletam o que precisa pra montar o plano. **Só passe pro como depois do "entendi".** A pergunta-âncora é obrigatória:
- **"Qual é a ÚNICA ação que vale dinheiro pra você — lead, venda ou agendamento — e quanto você topa pagar por ela?"** (define objetivo + métrica-norte + se a conta fecha).
- "Pra que temperatura a gente vai falar primeiro? Tem gente que já te conhece (lista, seguidores, quem visitou o site) pra começar por remarketing?"
- "Você quer (e pode) colocar dinheiro agora, ou a gente começa no orgânico testando a mensagem?"
Se a pessoa não souber o quanto pode pagar por resultado, ajude a estimar a partir do ticket (ex: "se sua venda é R$300, pagar R$30 por lead é tranquilo se ~1 em 10 fecha"). Não invente número — raciocine com ela.

## 3. O COMO (constrói)
1. Confirme em 1 linha a rota: "vou montar seu plano de tráfego com objetivo, públicos, oferta, ideia de criativo, orçamento de teste e a métrica-norte — e a gente lê o resultado junto depois."
2. Monte o plano usando o bloco `_blocos/trafego/estrutura-campanha.md`, preenchido com o contexto dela e no **tom da marca do cliente** (de `_contexto/marca.md`). Inclua:
   - **Objetivo** (a ação que vale dinheiro) e a **métrica-norte** (custo por resultado-alvo).
   - **Públicos** por temperatura, **começando por remarketing/morno** quando existir audiência.
   - **Oferta** casada com cada temperatura (valor de graça pro frio, baixo atrito pro morno, oferta direta pro quente).
   - **Ideia de criativo**: 2-3 ganchos pros 3 primeiros segundos + o desenrolar (dor → virada → CTA), no tom dela.
   - **Orçamento de teste**: um valor pequeno pra "aprender" antes de escalar, com janela de dias (não julgar em 1 dia).
   - **Destino**: pra onde o tráfego vai (landing page / WhatsApp / perfil). Se não tiver página com objetivo, sinalize `/landing-page`.
3. Se a pessoa **quiser e tiver acesso técnico**, ofereça como passo opcional configurar a campanha na ferramenta de anúncio dela — mas deixe claro que o plano funciona sem isso e que ela pode aplicar sozinha seguindo o passo a passo. Nunca trave a entrega numa integração.
4. Salve em `saidas/trafego/<nome>-<data>/plano.md`.
5. **Leitura de resultado** (quando ela voltar com números): pegue os dados que ela tiver (gasto, cliques, leads, vendas, custo por resultado) e traduza em decisão simples — escalar o que tá abaixo do custo-alvo, cortar o que tá acima, ajustar criativo se o gancho não segura. Sempre puxe a conversa de volta pro **custo por resultado**, nunca pra view. Registre a leitura no mesmo `saidas/trafego/`.

## 4. O FECHO (aprende)
Pergunte o que ela achou e se o plano fez sentido pra realidade dela. Se ela revelar algo recorrente (ticket, público que converte melhor, canal preferido, verba mensal), ofereça salvar em `_contexto/negocio.md` ou `_contexto/estrategia.md`. Anote no `_contexto/historico.md` o que foi feito e o que ficou pra acompanhar (ex: "rodar teste 7 dias, voltar com custo por lead").

## Checklist antes de entregar
- [ ] O objetivo é uma ação que vale dinheiro (não "mais views)?
- [ ] Tem métrica-norte (custo por resultado-alvo) definida?
- [ ] A oferta casa com a temperatura do público?
- [ ] Começou por remarketing/morno quando havia audiência?
- [ ] Tem 2-3 ganchos pensados pros 3 primeiros segundos?
- [ ] Tem orçamento de teste com janela de dias (não julgar em 1 dia)?
- [ ] O destino do tráfego é uma página/canal com objetivo claro?
- [ ] Tom do criativo é o da marca do CLIENTE, sem cara de guru?
- [ ] Salvo em `saidas/trafego/`?
- [ ] A entrega funciona mesmo sem integração de conta de anúncio?

## Quando mandar pra outra frente
- O tráfego precisa de uma página com objetivo → `/landing-page` (ou `/site-foda` pro efeito wow).
- A ideia de criativo vira vídeo curto → `/roteiro-video`.
- A ideia de criativo vira post/carrossel pra aquecer no orgânico → `/carrossel`.
- A pessoa precisa transformar lead em venda na conversa → `/vendas`.
