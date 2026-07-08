# 📣 Meta — dados dos seus anúncios (Facebook/Instagram Ads)

Serve pra: a frente **`/trafego`** ler os números reais das suas campanhas direto do Gerenciador — **Resultados, Custo por resultado, Valor usado** — e aplicar a régua de decisão (escalar/matar) sem você copiar número na mão.

> **Modo básico (sem conector): é o caminho normal.** Você abre o Gerenciador de Anúncios, olha as colunas Resultados / Custo por resultado / Valor usado (ou tira print) e cola aqui. O DutyX lê, decide junto e monta o plano igual. O conector só automatiza essa leitura.

## Como conectar (é nativo do Claude)
O Meta é um **conector nativo do Claude** — não instala nada, não edita arquivo:

> **Conectores → Novo conector → Meta → fazer login** (no Facebook, autorizando a conta de anúncios).

Conectou → quando rodar `/trafego`, o DutyX puxa os números da campanha sozinho.

## O que o conector NÃO faz (de propósito)
- **Não publica campanha, não altera orçamento, não mexe em dinheiro.** O DutyX planeja e lê; quem clica em **Publicar** e mexe em verba é **sempre você** — pelo Gerenciador, seguindo o mapa de cliques `_blocos/trafego/passo-a-passo-gerenciador.md` (feito pra quem nunca anunciou).
- Conectar dá acesso de leitura aos dados da sua conta de anúncios. Nunca deixe ferramenta nenhuma gastar verba sozinha.

## Erro comum
- **"Não achei minha conta de anúncios ao autorizar":** você provavelmente tem mais de um perfil/Página. Entre em facebook.com/adsmanager, veja no topo qual conta tem suas campanhas, e autorize essa no login do conector.

## Se não conectar
Roda `/trafego` no modo básico — você cola os 3 números (ou o print) e ele faz a leitura e a decisão do mesmo jeito. Funciona 100% sem o conector.
