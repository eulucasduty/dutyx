# Bloco — componentes famosos do 21st.dev (complemento TURBO, opcional)

> **O motor do site é a skill global `claude-design`** — ela constrói tudo isso sozinha, do zero, na marca do cliente. Estes componentes são o **turbo opcional**: peças famosas prontas que aceleram quando o **Magic MCP** tá ligado (`setup/componentes-21st.md`). Sem ele, zero drama — o `claude-design` faz o equivalente (e vários efeitos têm versão CSS pura em `efeitos-css-puro.md`).
>
> **Regra de ouro se usar: puxe pela tool `inspiration` (não `builder`) e SEMPRE rebrandeie** — o famoso vem roxo/azul; reescreva nos tokens (`design-tokens.md`): paleta, fonte, raio, sombra da marca. Nunca cola cru.

## CTA / botões
- **Shiny Button** — CTA com brilho passando. O botão principal do herói.

## Fundos animados (um por seção)
- **Aurora Background** — aurora suave atrás do herói. *(versão CSS pura: gradiente animado do `efeitos-css-puro.md`)*
- **Background Beams** — feixes de luz cruzando a seção.
- **Meteors** — meteoros caindo (detalhe sutil).
- **Background Gradient Animation** — mesh de gradiente vivo (rebrandear as cores!).
- **Spotlight** — foco de luz no título.
- **Sparkles** — partículas de brilho (com parcimônia).

## Estrutura / layout
- **Bento Grid** — grade de blocos de tamanhos diferentes (features, provas).
- **Marquee** — faixa infinita (logos, depoimentos). *(versão CSS pura no `efeitos-css-puro.md`)*
- **Resizable Navbar** — navbar que encolhe/muda ao rolar.

## Scroll / 3D
- **Container Scroll / Macbook Scroll** — o "produto" aparecendo num mockup conforme rola.
- **Cenas Spline** — 3D interativo ao vivo (objeto que segue o mouse) — preset com lazy no `motion-presets.md`.

## Prova social
- **Animated Testimonials** — depoimentos trocando com animação.

---

### O fluxo certo (quando o turbo tá ligado)
1. No `/site-foda`, escolha 3-6 conforme as seções — componente só entra se serve à mensagem.
2. Puxe pelo **Magic MCP `inspiration`** (ou copie do site 21st.dev no navegador, grátis).
3. **Rebrandeie TODOS** nos tokens da marca — senão vira frankenstein colorido.
4. Unifique com o sistema único (`design-tokens.md`) antes de considerar pronto — e confira o budget de performance (`motion-presets.md`).
