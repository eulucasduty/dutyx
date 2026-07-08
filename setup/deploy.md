# 🚀 Deploy — pôr o site no ar (do mais fácil pro mais técnico)

Fecha o ciclo do `/landing-page` e do `/site-foda`: construiu, publica. É uma escada — **começa sempre no degrau 0**. Só desce pro degrau seguinte se o projeto pedir (e eu te aviso quando pede). Nenhum degrau aqui exige saber programar.

## Qual degrau é o seu?

| Seu site | Degrau |
|---|---|
| Uma pasta com `index.html` dentro (Rota Rápida, LP, site em HTML/CSS/JS) | **0 — Netlify Drop** |
| Projeto React/Next (Rota Pro do `/site-foda`) | **1 — Vercel** |
| Quer o site num repositório GitHub de graça pra sempre | **2 — GitHub Pages** |

## Degrau 0 — Netlify Drop (arrasta a pasta e pronto; zero terminal)

O caminho padrão. Não instala nada, não abre terminal, não precisa de GitHub.

1. Confira que a pasta do site tem o **`index.html` direto dentro dela** (não escondido numa subpasta).
2. Abra **app.netlify.com/drop** no navegador.
3. **Arraste a PASTA inteira** (não só o arquivo) pra área da página. No Windows: abre o Explorador de Arquivos do lado do navegador e arrasta a pasta de um pro outro.
4. Segundos depois: seu site tá no ar num link tipo `nome-aleatorio.netlify.app`. Abre no celular e confere.
5. **Crie a conta grátis** (dá pra entrar com o Google) — sem conta o link é temporário e some. Com conta, fica no ar de vez.
6. Nome feio? **Site configuration → Change site name** → vira `seunome.netlify.app`.

**Pra atualizar o site depois:** entra no site no painel da Netlify → aba **Deploys** → arrasta a pasta de novo. Substitui na hora.

## Degrau 1 — Vercel (pra projeto React/Next da Rota Pro)

A Rota Pro do `/site-foda` gera um projeto que precisa de "build" — a Vercel faz isso sozinha.

**Caminho A — pelo navegador (sem terminal):**
1. Suba o projeto pro GitHub (o `/salvar` te ajuda com isso).
2. Entre em **vercel.com** → login com o GitHub → **Add New → Project** → importa o repositório → **Deploy**.
3. Bônus: todo `git push` daí em diante republica sozinho.

**Caminho B — pelo terminal (se você já tem Node):**
1. Teste se tem Node: PowerShell (Windows) ou Terminal (Mac) → `node -v`. Se der "não é reconhecido", instale o **LTS** em nodejs.org e **feche e reabra o terminal** — ou use o Caminho A.
2. `npm i -g vercel` → na pasta do projeto: `vercel --prod` (na primeira vez ele pede login pelo navegador).

⚠️ Login no site da Vercel ≠ login no `gh` CLI. Se tiver mais de uma conta, confirme a certa (`gh auth switch`).

## Degrau 2 — GitHub Pages (grátis pra sempre, tudo pelo navegador)

Bom pra site estático que você quer versionado no GitHub. Dá pra fazer 100% sem terminal:

1. Conta em **github.com** → **New repository** (público) → crie.
2. Na página do repositório vazio, clique em **"uploading an existing file"** → arrasta os arquivos do site (o `index.html` tem que ficar na raiz) → **Commit changes**.
3. **Settings → Pages** → em "Source": **Deploy from a branch** → branch `main`, pasta `/ (root)` → **Save**.
4. Espera uns minutos → o site aparece em `seuusuario.github.io/nome-do-repositorio`.

⚠️ Como o site fica numa "subpasta" do endereço, os caminhos de imagem/CSS precisam ser **relativos** (`./img/foto.jpg`, nunca `/img/foto.jpg`). Se subir e ficar sem estilo, é quase sempre isso.

## Domínio próprio (ex.: `seunegocio.com.br`)

Funciona nos três degraus — o painel (Netlify: **Domain management** / Vercel: **Domains**) te diz o registro DNS exato pra criar onde você comprou o domínio (Registro.br, Cloudflare, etc.). Regras que evitam dor de cabeça:
- Crie **só o registro que o painel pedir** (um CNAME pro subdomínio, ou o A que ele indicar).
- **Cloudflare: nuvem CINZA (DNS only), NUNCA laranja/proxied** — o proxy briga com o SSL deles e dá "404 + Não seguro".
- Espere propagar (minutos a algumas horas). O SSL (cadeado) é emitido sozinho depois disso.

## 🔧 Erros comuns — sintoma → solução

| Sintoma | O que é | Solução |
|---|---|---|
| Netlify no ar mas mostra "Page not found" | O `index.html` tava dentro de uma subpasta | Arraste a pasta que tem o `index.html` DIRETO dentro |
| Site abre sem estilo / imagem quebrada | Caminho absoluto (`C:\Users\...` ou `/img/...`) | Troque pra caminho relativo (`./estilo.css`, `./img/foto.jpg`) |
| "npm/node não é reconhecido" no Windows | Node não instalado (ou terminal aberto antes de instalar) | Instale o LTS em nodejs.org e reabra o PowerShell — ou volte pro Degrau 0 |
| Vercel entra na conta errada / pede login toda hora | Sessão trocada | `vercel logout` → `vercel login` (e `gh auth switch` se usar gh) |
| GitHub Pages dá 404 | Pages não ativado, branch errada, ou ainda propagando | Confira Settings → Pages; espere até 10 min |
| "Não seguro" no domínio próprio | SSL ainda não emitido ou proxy da Cloudflare no meio | Nuvem cinza na Cloudflare + esperar uns minutos |
| Atualizei o arquivo e o site não mudou | Cache ou deploy antigo | Suba de novo (Netlify: arrastar na aba Deploys) e `Ctrl+F5` no navegador |
| Link da Netlify sumiu depois de umas horas | Deploy sem conta é temporário | Crie a conta grátis e arraste de novo — agora fica |

## Regra de ouro
Leigo começa **sempre** no Degrau 0 — arrastou, tá no ar, mostrou pro cliente. Terminal é opcional, nunca pré-requisito. E nada de site no ar sem conferir **no celular** primeiro (velocidade + legibilidade). Se travar em qualquer passo, me diz o erro exato que eu te desenrolo.
