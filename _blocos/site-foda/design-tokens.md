# Bloco — sistema de design + prompt inicial (Rota Pro)

> O "gosto" que separa site de agência de site genérico. Brand-neutral: as cores/fontes saem de `_contexto/marca.md`. Motor de taste: a skill global `frontend-design`.

## Design tokens (a régua do site)
- **Espaçamento — grade de 8px:** todo espaço é múltiplo de 8 (8, 16, 24, 32, 48, 64…). Nada de margens aleatórias. É o que dá ritmo.
- **Escala tipográfica (sistema, não tamanho aleatório):** ex. 12 · 14 · 16 (corpo) · 20 · 24 · 32 · 48 · 64+ (display). Máx. 2 famílias: uma de display, uma de leitura.
- **Tokens de cor (não hex solto):** `primária`, `neutra` (fundo/texto em tons), `acento` — todos da marca do cliente. Defina e reutilize; nada de cor nova por seção.
- **Padrões de componente:** estados de botão (normal/hover/ativo/desabilitado), estrutura de card, layout de formulário — consistentes no site todo.

## Regras anti-"estética genérica de IA"
- Sem gradiente roxo/azul agressivo de fundo; sem card de canto arredondado com listrinha colorida na borda; sem emoji como bullet (a menos que a marca use).
- Contraste real (texto legível), espaço em branco generoso, hierarquia clara.
- Componente só entra se serve à mensagem. Beleza serve à conversão.

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
