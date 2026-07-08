# 🧩 Componentes 21st.dev / Magic MCP — o turbo opcional do `/site-foda`

Antes de tudo, o que já vem de fábrica: **o motor de design do DutyX é a skill global `claude-design`** — já mora no seu Claude Code, não instala nada, e constrói site premium completo na sua marca. Este guia liga um **complemento turbo**: o **Magic MCP do 21st.dev**, que dá acesso aos componentes famosos prontos (Shiny Button, Aurora, Bento Grid, Marquee…) pra acelerar a Rota Pro. **Sem ele o `/site-foda` funciona 100%** — com ele, algumas peças chegam mais rápido.

## O jeito certo de usar: tool `inspiration` (NÃO `builder`)
- **`inspiration`** → busca os componentes famosos EXISTENTES. Lista curada em `_blocos/site-foda/componentes-famosos.md`.
- **`builder`** → gera do zero. **Não use** — no nosso teste voltou `[object Object]`, inútil e sem alma. Gerar do zero é trabalho do `claude-design`, que faz melhor.
- **SEMPRE rebrandeie:** o famoso vem roxo/azul → reescreve nos tokens da marca (`_blocos/site-foda/design-tokens.md`). Nunca cola cru.

## Sem o Magic MCP (o caminho grátis, que já funciona hoje)
Dois jeitos, nenhum exige instalar nada:
1. **Só o `claude-design`:** peça o efeito ("um fundo aurora nas cores da minha marca") — ele constrói. Vários efeitos têm receita pronta em CSS puro em `_blocos/site-foda/efeitos-css-puro.md`.
2. **Copiar do navegador:** abra **21st.dev**, copie o código do componente e cole no Claude Code pedindo *"integra, adapta aos meus design tokens e troca o placeholder pelo meu texto"*.

## Ligar o Magic MCP (opcional — precisa de API key, uma vez)
1. Pegue a key em **21st.dev/magic** (freemium — tem tier grátis, depois pago).
2. Adicione (rode VOCÊ no terminal, não cole a key no chat — vaza em log). Windows (PowerShell) e Mac, mesmo comando:
   ```
   claude mcp add magic --scope user --env API_KEY="SUA_KEY" -- npx -y @21st-dev/magic@latest
   ```
   *Esse comando usa `npx` (vem com o Node). Sem Node no PC ("npx não é reconhecido"): instale o LTS em nodejs.org e reabra o terminal — ou simplesmente fique no caminho grátis acima, que não precisa de nada.*
3. **⚠️ REINICIE o Claude Code** — MCP só carrega na inicialização. Confira com `claude mcp list` se aparece conectado.
4. **Windows: apareceu "failed" depois de reiniciar?** É um jeitão do Windows com `npx` — refaz o comando com o wrapper `cmd /c`:
   ```
   claude mcp add magic --scope user --env API_KEY="SUA_KEY" -- cmd /c npx -y @21st-dev/magic@latest
   ```
   (remova o antigo antes: `claude mcp remove magic`). E reinicie de novo.
> É um MCP LOCAL (roda com chave), não o "Conectores → Novo conector". A chave fica no seu ambiente, nunca num arquivo versionado (`.mcp.json` tá no `.gitignore`).

## Libs de animação (só na Rota Pro, projeto React/Next)
```
npm install gsap lenis
```
- **GSAP + ScrollTrigger** — pin, scrub, parallax, 3D-no-scroll (grátis, todos os plugins). **Lenis** — scroll suave (o "feel de agência").
- Na **Rota Rápida** (HTML único) nada disso instala: GSAP/Lenis entram por CDN, ou o site sai 100% em CSS puro (`efeitos-css-puro.md`). Receitas: `_blocos/site-foda/motion-presets.md`.

## 3D (opcional, quando o produto pede)
- **Spline** (`spline.design`, grátis, sem key): monta a cena, exporta e embeda — preset com lazy no `motion-presets.md`.
- **ffmpeg** (grátis): fatia vídeo em frames pro 3D-no-scroll. Instalar: Windows `winget install Gyan.FFmpeg` (fecha e reabre o terminal); Mac `brew install ffmpeg`.

## Regra de ouro
**Nada aqui é obrigatório.** O caminho crítico do `/site-foda` é: `claude-design` + tokens + efeitos CSS/CDN — zero instalação. O Magic MCP é aceleração, não dependência. Se algo não instalar, **não trave** — o modo básico entrega o site do mesmo jeito.
