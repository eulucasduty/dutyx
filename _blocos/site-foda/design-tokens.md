# Bloco — sistema de design + tokens (as duas rotas)

> O "gosto" que separa site de agência de site genérico. Brand-neutral: cores/fontes saem de `_contexto/marca.md`. **Motor principal: a skill global `claude-design`** — ela monta o visual de alta fidelidade; este bloco é a régua que garante que TUDO na página obedece o mesmo sistema. Componentes do 21st.dev são complemento turbo (`componentes-famosos.md`), nunca o motor.

## Da marca pros tokens (o mapa)
De `_contexto/marca.md` você extrai: **primária** (a cor da marca), **acento** (a cor do clique/destaque — se a marca só tem 1 cor, o acento é um tom vibrante dela), **neutras** (fundo + texto, derivados: quase-preto e quase-branco COM um pingo da primária, nunca #000/#fff puros), **fonte display** (títulos) e **fonte texto** (corpo). Marca "no zero"? Monte um default elegante e AVISE que é provisório.

## Tokens em CSS (Rota Rápida — cola no `<style>` e tudo obedece)
```css
:root {
  /* cor — da marca do cliente */
  --primaria: #___;  --acento: #___;
  --fundo: #___;     --texto: #___;   --texto-suave: color-mix(in srgb, var(--texto) 65%, var(--fundo));

  /* tipo — fluida (cresce com a tela, sem media query) */
  --f-display: clamp(2.5rem, 6vw + 1rem, 5rem);
  --f-titulo:  clamp(1.75rem, 3vw + .5rem, 2.75rem);
  --f-corpo:   clamp(1rem, .3vw + .9rem, 1.125rem);

  /* espaço — grade de 8px */
  --e-1: 8px; --e-2: 16px; --e-3: 24px; --e-4: 32px; --e-6: 48px; --e-8: 64px; --e-12: 96px;
  --secao: clamp(64px, 10vw, 140px);   /* respiro vertical entre seções */

  /* forma e movimento — UMA identidade */
  --raio: 12px;
  --sombra: 0 8px 32px rgb(0 0 0 / .12);
  --dur: .3s;  --curva: cubic-bezier(.22, 1, .36, 1);
}
```
Na **Rota Pro**, esses mesmos valores viram o `tailwind.config` / CSS vars do projeto. O que importa: **os números são decididos UMA vez** — nada de raio 8 num card e 16 no outro.

## As 4 réguas do sistema único (coesão = 1 site, não "8 pedaços colados")
1. **Título de seção: UMA classe** (`.section-title`) — mesmo peso/tamanho/leading em todas as seções.
2. **Botão: UMA forma** — mesmo canto, fonte, cor de acento. Nada de um pill aqui e um reto ali.
3. **Raio, sombra, gutter, respiro vertical: só os tokens.** Componente que chegar com outros valores é reescrito pros tokens antes de entrar.
4. **Divisórias invisíveis:** sem linha marcando onde a seção acaba — transição contínua (o fundo muda de tom, o respiro separa).

## 🚫 Os 7 pecados da "cara de IA" (proibidos por padrão)
1. **Grade (grid) de fundo** repetida em toda seção — o tell nº1.
2. **Bordas finas + cards genéricos** (borda 1px com listrinha) — shadcn cru.
3. **Dark + mono ESTÁTICO** — sem movimento nem ousadia = rascunho.
4. **Roxo/azul/gradiente arco-íris** — cor "default de componente". Tudo vai pra paleta da MARCA.
5. **Colar componente cru** — tudo que entra é reescrito nos tokens e recolorido.
6. **Zero storytelling no scroll** — a página não pode só "descer".
7. **Conteúdo que nasce invisível esperando animação** — se o JS falhar, tela preta (regra nº0 do `motion-presets.md`).

## Regras de gosto (o que o `claude-design` já faz — você confere)
- Contraste real (texto legível SEMPRE, inclusive sobre fundo animado — halo de `text-shadow`, ver lição).
- Espaço generoso: na dúvida, dobre o respiro. Hierarquia: o olho sabe pra onde ir sem pensar.
- Componente/efeito só entra se serve à mensagem. Beleza serve à conversão.

## Prompt inicial (Rota Pro — preencha os [colchetes])
> Construa um site premium para [PRODUTO/SERVIÇO], com a skill `claude-design` como motor de design.
> - Next.js (App Router) + Tailwind; GSAP + ScrollTrigger + Lenis pro motion (presets em `_blocos/site-foda/motion-presets.md`)
> - Design tokens acima preenchidos com a marca de `_contexto/marca.md` — grade 8px, tipo fluida, raio/sombra únicos
> - Navbar fixa, herói com headline + CTA, features, prova social, oferta, FAQ, footer
> - Mobile-first; budget: primeira carga ≤ 2 MB, LCP < 2,5s, 1 efeito forte por página
> - Construa **seção por seção, me mostrando cada uma antes de seguir**
> (Opcional turbo: se o Magic MCP do 21st.dev estiver ligado, puxe componentes famosos via `inspiration` e reescreva nos tokens.)

## A ordem que evita retrabalho
Base (estrutura + copy) → **tokens** → seções com `claude-design` → componentes turbo (se tiver, reescritos nos tokens) → motion → 3D (se servir) → checagem de performance. Tokens ANTES de qualquer componente — é 10x mais barato definir a régua do que consertar frankenstein.
