# Bloco — sistema de design + prompt inicial (Rota Pro)

> O "gosto" que separa site de agência de site genérico. Brand-neutral: as cores/fontes saem de `_contexto/marca.md`. Motor de taste: a skill global `frontend-design`.

## Design tokens (a régua do site)
- **Espaçamento — grade de 8px:** todo espaço é múltiplo de 8 (8, 16, 24, 32, 48, 64…). Nada de margens aleatórias. É o que dá ritmo.
- **Escala tipográfica (sistema, não tamanho aleatório):** ex. 12 · 14 · 16 (corpo) · 20 · 24 · 32 · 48 · 64+ (display). Máx. 2 famílias: uma de display, uma de leitura.
- **Tokens de cor (não hex solto):** `primária`, `neutra` (fundo/texto em tons), `acento` — todos da marca do cliente. Defina e reutilize; nada de cor nova por seção.
- **Padrões de componente:** estados de botão (normal/hover/ativo/desabilitado), estrutura de card, layout de formulário — consistentes no site todo.

## 🚫 Os 7 pecados da "cara de IA" (evitar por PADRÃO)
1. **Grade (grid) de fundo** repetida em toda seção — o tell nº1. Proibido.
2. **Bordas finas + cards genéricos** (borda 1px arredondada com listrinha) — shadcn cru.
3. **Dark + mono ESTÁTICO** — sem movimento nem ousadia = rascunho.
4. **Roxo/azul/gradiente arco-íris** — cor "default". Tudo vai pra paleta da MARCA.
5. **Gerar componente do zero** — use os famosos rebrandeados (`componentes-famosos.md`).
6. **Zero storytelling no scroll** — a página não pode só "descer".
7. **Matar o efeito com `prefers-reduced-motion`** — o efeito-assinatura anima SEMPRE.

## Sistema de design ÚNICO (coesão = 1 site, não "8 componentes colados")
Quando você puxa vários componentes famosos, cada um vem num estilo. Unifique ANTES de considerar pronto:
- **Título de seção:** UMA classe (`.section-title`) — mesmo peso/leading/tamanho em todas.
- **Botão de ação:** UMA forma (mesmo canto, fonte, cor). Nada de um pill, um reto, um roxo.
- **Raios, gutters, espaçamento vertical, bordas:** tokens únicos, reutilizados.
- **Divisórias invisíveis:** sem linha marcando onde a seção acaba — transição contínua.

## Regras anti-"estética genérica de IA"
- Contraste real (texto legível), espaço generoso, hierarquia clara.
- Componente só entra se serve à mensagem. Beleza serve à conversão.
- **Paleta da marca SEMPRE** — todo componente famoso é recolorido pra marca do cliente.

## Prompt inicial (Rota Pro — a pessoa preenche o [produto])
> Construa uma landing page moderna para [SEU PRODUTO/SERVIÇO].
> Requisitos:
> - Next.js 14 (App Router) + Tailwind CSS
> - Framer Motion em todas as animações (revelações no scroll, hover, transições de página)
> - Puxar hero, features e pricing de componentes do 21st.dev
> - Seguir os design tokens (grade 8px, escala tipográfica, tokens de cor da marca)
> - Navbar fixa, hero com headline + CTA, 3 cards de feature, prova social, pricing, FAQ e footer
> - Mobile-first, totalmente responsivo
> - Performance alta (lazy-load de imagens, fontes otimizadas)
> Comece montando a estrutura do projeto e depois construa **seção por seção, me mostrando cada uma antes de seguir**.

## Lembrete
Base boa primeiro → tokens → componentes (adaptados à marca) → animação → 3D (se servir) → checagem de performance. A configuração vem ANTES do prompt.
