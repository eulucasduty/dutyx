# Bloco — presets de motion (GSAP/ScrollTrigger)

> Receitas de movimento que funcionam e rodam liso. Brand-neutral. Regra de ouro: anime **transform** (x, y, scale, rotate) e **opacity** — nunca propriedades que forçam recálculo de layout (width, top, margin). É isso que faz a animação não engasgar.

## Presets que resolvem 90% dos casos

1. **Reveal no scroll** — elemento entra suave (de baixo + fade) quando aparece na tela.
   - GSAP + ScrollTrigger: `from { y: 40, opacity: 0 }` disparado quando o bloco entra na viewport.
   - Uso: títulos de seção, cards, blocos de prova. O efeito "o site se conta enquanto eu rolo".

2. **Stagger** — vários itens entram em sequência rápida (um atrasado do outro).
   - Uso: lista de features, galeria, depoimentos. Dá ritmo sem cansar.

3. **Parallax sutil** — fundo/elemento se move mais devagar que o scroll.
   - Uso: hero, imagens grandes. SUTIL — exagero embrulha o estômago.

4. **Pin + scrub (storytelling)** — uma seção "trava" e a cena evolui conforme a pessoa rola.
   - Uso: explicar um processo em passos, mostrar um produto girando. É o efeito "awwwards". Usar com parcimônia (1 por página).

5. **Hover delicado** — botão/card reage ao mouse (leve scale + sombra).
   - Uso: CTAs e cards. Dá sensação premium e responsiva. No mobile não existe hover — garanta que funciona sem ele.

## Performance (não-negociável)
- Carregue a biblioteca de animação de forma que não trave a primeira dobra.
- `prefers-reduced-motion`: respeite quem pediu menos animação no sistema (acessibilidade + não enjoar).
- Teste no celular. Se travar, simplifique — rápido > bonito.

## 3D (quando entrar)
- Spline: monte a cena na ferramenta, embede leve, e carregue depois do conteúdo principal.
- Three.js: só se precisar de controle fino; cuide do peso.
- No mobile: considere uma versão estática (imagem) no lugar do 3D pesado.

## Referências de técnica (puxar via find-skills, adaptar — nunca copiar marca de terceiro)
- `eng0ai/eng0-template-skills@gsap-awwwards-website`
- `secondsky/claude-skills@motion`
- `github/awesome-copilot@gsap-framer-scroll-animation`
