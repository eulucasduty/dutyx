# 🧩 Componentes famosos (21st.dev / Magic MCP) + animação

Pra Rota Pro do `/site-foda` (o "site de US$10k"). O jeito FODA de verdade usa os **componentes famosos** do 21st.dev — rebrandeados pra sua marca.

## O jeito certo: Magic MCP → tool `inspiration` (NÃO `builder`)
O **Magic MCP do 21st.dev** dá acesso à biblioteca de componentes famosos direto no Claude Code.
- Use a tool **`inspiration`** → busca os componentes EXISTENTES/famosos (Shiny Button, Aurora, Beams, Bento Grid, Marquee, Container Scroll, Spline…). Lista curada em `_blocos/site-foda/componentes-famosos.md`.
- **NÃO use o `builder`** → ele gera do zero (no nosso teste voltou como `[object Object]`, inútil e sem alma).
- **SEMPRE rebrandeia:** o famoso vem roxo/azul → troca pra preto/branco/laranja (ou a paleta da marca), fonte e logo da marca. Nunca cola cru.

## Ligar o Magic MCP (precisa de API key — uma vez)
1. Pegue a key em **21st.dev/magic** (freemium — tem tier grátis, depois pago).
2. Adicione (rode VOCÊ, não cole a key no chat — vaza em log):
   ```
   claude mcp add magic --scope user --env API_KEY="SUA_KEY" -- npx -y @21st-dev/magic@latest
   ```
3. **⚠️ REINICIE o Claude Code** — MCP só carrega na inicialização.
> É um MCP LOCAL (roda com chave), não o "Conectores → Novo conector". A chave fica no seu ambiente, nunca num arquivo versionado (`.mcp.json` está no `.gitignore`).

## Sem o Magic MCP (modo básico, grátis)
Funciona: acesse **21st.dev** no navegador, **copie o código** do componente e cole no Claude Code pedindo *"integra esse componente, adapta aos meus design tokens e troca o placeholder pelo meu texto"*. Só dá um pouco mais de trabalho.

## Animação (instalar no projeto React/Next)
```
npm install framer-motion lenis gsap
```
- **Framer Motion** — reveals/hover/transições.
- **Lenis** — scroll suave (o "feel de agência" — não pule).
- **GSAP** (+ ScrollTrigger) — pin, scrub, parallax, scroll horizontal, e o 3D-no-scroll.
(Na Rota Rápida em HTML puro, GSAP sozinho já resolve — sem precisar de projeto React.)

## 3D
- **Spline** (`spline.design`, grátis, sem key): monta a cena, exporta `.splinecode`, embeda com `@splinetool/react-spline`.
- **ffmpeg** (grátis): pra fatiar vídeo em frames no 3D-no-scroll (ver `_blocos/site-foda/motion-presets.md`).

## Skill de design (o gosto)
Sistema de design em `_blocos/site-foda/design-tokens.md` + a skill pública **`frontend-design`** como motor de taste.

## Regra de ouro
Nada é obrigatório: a Rota Rápida (HTML + GSAP) faz site bonito sem instalar nada. O Magic MCP é o que destrava o "de agência". Se algo não instalar, **não trave** — volte pro básico.
