# Bloco — passo a passo REAL no Gerenciador de Anúncios (Meta)

> O caminho de cliques, botão por botão, em português — pra quem nunca abriu o Gerenciador. O DutyX monta o plano; ESTE bloco é o mapa pra pessoa publicar sozinha. Os nomes dos botões são os do painel em português; o Meta muda detalhe de layout de vez em quando — se um botão estiver com nome levemente diferente, é o mesmo lugar. Nunca deixe a pessoa travada: se ela descrever a tela, ache o próximo clique com ela.

## Antes de criar (checklist de 1x só)

1. **Página do Facebook** criada (mesmo que você só use Instagram — o anúncio sai em nome de uma Página). Instagram profissional vinculado a ela: no app do Instagram, **Editar perfil → Página** (ou Configurações → Central de contas).
2. **Gerenciador de Anúncios** aberto: entre em **facebook.com/adsmanager** logado no seu Facebook. (O botão "Impulsionar" do Instagram NÃO é isso — impulsionar é o atalho fraco; o Gerenciador é onde se escolhe o objetivo certo.)
3. **Forma de pagamento** cadastrada: no Gerenciador, menu ☰ → **Configurações de pagamento** → **Adicionar forma de pagamento** (cartão ou Pix, disponível no Brasil).
4. **Pixel — só se o destino for um site/landing page.** Campanha pra WhatsApp ou formulário de cadastro **não precisa de pixel** (é o caminho sem código, ótimo pra começar). Se for site: menu ☰ → **Gerenciador de Eventos** → **Conectar fontes de dados** → **Web** → cria o Pixel e cola o código no site (numa landing feita com o DutyX, ele cola pra você — pede na `/landing-page`).

## Passo 1 — Criar a campanha

1. No Gerenciador, clique no botão verde **+ Criar**.
2. Escolha o objetivo — só existem 3 que interessam pra quem tá começando:
   - **Engajamento** → pra receber **mensagem no WhatsApp** (o melhor pra serviço local e pra quem não tem site).
   - **Cadastros** → pra coletar **leads num formulário** que abre dentro do próprio Instagram/Facebook (sem site, sem pixel).
   - **Vendas** → pra **venda no site** (precisa do pixel instalado na página).
   - ⚠️ Ignore "Reconhecimento" e "Tráfego" por ora — trazem view e clique barato, não cliente.
3. Se o painel oferecer a **configuração recomendada / campanha Advantage+**: **aceite.** É a estrutura simplificada que funciona hoje — o DutyX já montou seu plano contando com ela.
4. Dê um nome que você entenda depois (ex: `whatsapp-promo-julho`), e clique **Continuar**.

## Passo 2 — Orçamento (nível campanha)

1. Procure **Orçamento da campanha Advantage** (o CBO) e deixe **ativado** — o Meta distribui a verba sozinho pro que performa.
2. **Orçamento diário:** o valor do seu plano (teste típico: **R$30-50/dia**). Começa no menor valor do plano — subir depois é fácil, o difícil é queimar verba no dia 1.

## Passo 3 — Conjunto de anúncios (destino + conversão + público)

1. **Local da conversão / destino:**
   - Objetivo Engajamento → escolha **Aplicativos de mensagem** → marque **WhatsApp** → conecte o número (precisa do WhatsApp Business no celular, grátis).
   - Objetivo Cadastros → **Formulários instantâneos** → crie o formulário (nome, telefone/WhatsApp, 1 pergunta no máximo — cada campo a mais derruba a conversão).
   - Objetivo Vendas → **Site** → selecione seu **Pixel** e o **evento de conversão** (ex: "Compra" ou "Lead"). Se o evento aparecer cinza/inativo, o pixel não está disparando — ver "Erros comuns".
2. **Público:** deixe o **público Advantage+** (aberto). Ajuste só:
   - **Localização:** Brasil — ou sua cidade + raio (ex: "Curitiba + 20 km") se o negócio é local. Clientes só da sua região? Isso aqui é o único filtro que importa.
   - **Idade mínima** se fizer sentido (ex: 25+ pra ticket alto).
   - **NÃO adicione interesses/segmentações detalhadas.** Sério. O criativo é a segmentação — tá na lição (`_aprenda/trafego.md`).
3. **Posicionamentos:** deixe **Posicionamentos Advantage+** (automático). Não fique escolhendo "só feed, só stories" — o Meta acha o canto mais barato sozinho.

## Passo 4 — O anúncio (criativo)

1. **Identidade:** confira se a Página e o Instagram certos estão selecionados.
2. **Configurar anúncio → Fazer upload** da mídia (o vídeo/imagem que o DutyX ajudou a criar — reel vertical 9:16 funciona em quase todo posicionamento).
3. **Texto principal:** a copy do plano (gancho na 1ª linha — ela aparece antes do "ver mais").
4. **Título:** a promessa em poucas palavras.
5. **Chamada para ação:** o botão — **"Enviar mensagem pelo WhatsApp"**, **"Cadastre-se"** ou **"Saiba mais"**, conforme o objetivo.
6. Se for WhatsApp: configure a **mensagem de boas-vindas** (o texto que já chega pronto quando a pessoa clica — ex: "Oi! Vi seu anúncio e quero saber mais sobre X"). Facilita a vida do cliente e a sua.
7. Confira a **pré-visualização** à direita (feed, stories, reels). Texto cortado ou rosto tampado pelo botão? Ajusta a mídia.

## Passo 5 — Publicar (e sentar na mão)

1. Botão verde **Publicar**. O anúncio entra **"Em análise"** — o normal é liberar entre alguns minutos e 24h.
2. Aprovou → status **"Ativo"**. Agora a regra sagrada: **não mexa em NADA por 3-7 dias** (fase de aprendizado — cada edição zera o progresso).
3. Onde acompanhar: no Gerenciador, as colunas **Resultados**, **Custo por resultado** e **Valor usado** são as únicas que importam. Volte pro DutyX com esses 3 números que a gente decide junto: escalar, ajustar ou matar (regra na `_aprenda/trafego.md`).

## Erros comuns (traduzidos) + solução

| O que apareceu | O que significa | O que fazer |
|---|---|---|
| **"Anúncio rejeitado"** | Bateu numa política — comum: promessa de resultado em saúde/dinheiro ("emagreça 10 kg", "ganhe R$5 mil"), antes/depois, texto que "aponta" atributo pessoal ("você que está endividado") | Reescreva sem promessa absoluta nem dedo na cara (o DutyX reescreve com você) → **Editar → Publicar** de novo. Rejeição não é punição, é ajuste. |
| **"Conta de anúncios restrita/desativada"** | O Meta desconfiou da conta (comum em conta nova que sobe verba rápido) | Vá em **Qualidade da conta** (facebook.com/accountquality) → **Solicitar análise** e confirme a identidade. Costuma resolver em 1-2 dias. Enquanto isso, não crie outra conta — piora. |
| **"Aprendizado limitado"** | Orçamento baixo demais pro evento escolhido (não junta ~50 resultados/semana) | Otimize por um evento mais frequente (mensagem/lead em vez de compra) ou suba a verba. Não é erro fatal — o anúncio roda, só rende menos. |
| **Pagamento recusado** | Cartão bloqueou "facebook ads" (acontece muito) | **Configurações de pagamento** → tenta de novo, liga no banco liberando, ou usa Pix. |
| **Evento do pixel não aparece / cinza** | O pixel não está disparando na página | **Gerenciador de Eventos → Testar eventos** → abre sua página e vê se o evento pisca lá. Não pisca = código não está na página (o DutyX confere o código com você). |
| **Gastou e o número não mexeu no 1º dia** | Fase de aprendizado — é assim mesmo | Nada. Respira. Julga com 7 dias e o gasto de teste completo. |

## Regra de segurança do bloco

O DutyX **monta, revisa e lê** com você — mas quem clica em **Publicar** e mexe em dinheiro é **sempre a pessoa**. Nunca publique nem altere verba por conta própria, mesmo com o conector Meta ligado.
