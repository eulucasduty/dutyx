# 📚 O QUÊ — Site foda: motion, 3D e aquele efeito que prende o olho

> Aquele site que você vê e pensa "como é que faz isso?". Tem regra por trás. Lê antes de construir — é o que separa "site de agência" de "template com cara de IA". (Escrito a partir do 1º site real do DutyX: na primeira tentativa saiu com PUTA cara de IA. Aqui tá tudo que faltou pra acertar de primeira.)

## Primeiro: o que faz um site ser FODA

Não é ter MAIS animação. É movimento **com intenção** pra contar história e guiar o olho:
1. **Movimento com propósito** — cada animação revela algo, mostra relação ou dá feedback.
2. **Storytelling no scroll** — a página se conta enquanto rola: coisas entram, pinam, transformam, reagem.
3. **Hierarquia e respiro** — tipografia grande e confiante, contraste, espaço. Menos elementos, melhor feitos.
4. **3D no ponto certo** — objeto que reage ao mouse/scroll dá o "uau" — quando serve ao produto.
5. **E abre RÁPIDO.** Essa é a que ninguém conta: **site foda que demora 8 segundos pra abrir não é foda** — é um site lento com enfeite. O visitante no 4G desiste antes do wow carregar. Performance não é etapa final: é regra desde o primeiro pixel.

## As 2 rotas (escolha antes de começar — as duas são dignas)

- **Rota Rápida — CSS puro, zero instalação:** um arquivo HTML com efeitos leves e elegantes (gradiente vivo, grain, reveal no scroll, marquee, tilt, cursor custom — kit completo em `_blocos/site-foda/efeitos-css-puro.md`). Fica pronto HOJE, pesa quase nada, e já parece "site caro". É o caminho padrão do leigo e de quem tem pressa.
- **Rota Completa — GSAP + ScrollTrigger + Lenis (e 3D se servir):** scrollytelling de verdade — seção que trava, cena que evolui com o scroll, produto girando, 3D interativo. É o "awwwards". Custa mais horas e mais cuidado com peso. React/Next só se o projeto pedir; GSAP roda num HTML único.
- Não é escadinha de status: um portfólio matador pode ser Rota Rápida; um lançamento de produto físico pede a Completa. E dá pra começar na Rápida e evoluir.

**Quem constrói é sempre o mesmo motor:** a skill `claude-design` (já vem no Claude Code). Os componentes famosos do 21st.dev são um turbo opcional da Rota Completa — aceleram, não são pré-requisito.

## 🚫 Os 7 pecados que dão "cara de IA" (evite por PADRÃO)

Foi exatamente isso que estragou a primeira versão:
1. **Grade (grid) de fundo repetida em toda seção** — o tell nº1 de "gerado por IA".
2. **Bordas finas repetidas + cards genéricos** (borda 1px com listrinha) — shadcn cru.
3. **Dark + mono tímido e ESTÁTICO** — sem movimento nem ousadia tipográfica = rascunho.
4. **Roxo/azul/gradiente arco-íris** — cor "default de componente". Tudo vai pra paleta da MARCA.
5. **Colar componente cru** (ou gerar sem sistema) — sai sem alma. Tudo é reescrito nos tokens da marca.
6. **Zero storytelling no scroll** — a página só "desce". Nada pina, nada revela, nada reage.
7. **Conteúdo que nasce invisível esperando animação** — a receita do desastre (história completa abaixo).

## A tecnologia por trás (você não programa, mas entende pra pedir certo)

- **GSAP + ScrollTrigger** — a base da animação premium: liga efeito ao scroll (pin, scrub, parallax, scroll horizontal). Desde 2025 é **100% grátis, todos os plugins**.
- **Lenis** — scroll suave/com inércia. O truque nº1 do "feel de agência" — sem ele o scroll é seco.
- **Spline / Three.js** — 3D na página. Spline resolve 90% (monta o visual, embeda, grátis).
- **21st.dev (turbo opcional)** — biblioteca de componentes famosos que você **rebrandeia** nos seus tokens.

## Scrollytelling (a página que se conta rolando)

Lenis + GSAP ScrollTrigger (receitas corretas em `_blocos/site-foda/motion-presets.md`):
- **Seção pinada com scroll horizontal** (trava e desliza pro lado enquanto rola pra baixo).
- **Parallax** no herói (fundo em velocidade diferente). **Reveals em camadas** (coisas entram em sequência).
- **Pin + scrub**: a cena evolui amarrada ao dedo/roda. **1 efeito forte por página** — é prato principal, não buffet.

## 3D DE VERDADE — os 2 caminhos

- **A — 3D interativo ao vivo (Spline):** monta a cena em `spline.design` (grátis), embeda; reage ao mouse. **Sempre lazy** (carrega depois da primeira dobra) e **sempre com fallback estático bonito** — o 3D é bônus pra quem tem banda, não pedágio pra todo mundo.
- **B — 3D no SCROLL (vídeo → frames → canvas):** a técnica estilo Apple (o AirPod girando quando você rola). Não é vídeo tocando: é sequência de imagens num `<canvas>`, frame amarrado ao scroll. Vídeo do produto girando → ffmpeg fatia em ~120-160 frames → ScrollTrigger com `scrub` mapeia scroll→frame. Budget: ≤ 6 MB no desktop; **no celular entra versão leve** (vídeo curto ou imagem). Esqueleto pronto no `motion-presets.md`.

## Camadas com intenção (profundidade premium)

Empilhamento: **fundo animado (z-0) < 3D/objeto (z-meio) < texto (z-topo).** O 3D como backdrop fixo atrás das letras, reagindo ao mouse — com `pointer-events` liberado pro mouse "atravessar" o texto até ele.

## ⚡ Performance é REGRA (não otimização de depois)

A maioria abre no 4G, num celular mediano. Os números que o DutyX segue:
- **Primeira carga ≤ 2 MB; o site aparece em < 2,5s** (LCP). Herói ≤ 250 KB (webp/avif).
- Anime só **transform** e **opacity** — animar layout (width/top/margin) engasga.
- 3D e sequência de frames: **lazy + fallback, sempre.** Fontes: máx. 2 famílias, woff2.
- Teste que não mente: DevTools → Network "Fast 4G" + CPU 4x, modo mobile. Passou liso aí, passa em qualquer lugar. **Pesou? Corta efeito, não qualidade de imagem do produto.**

## 🔒 A lição do site preto (reduced-motion do jeito certo)

O que aconteceu no 1º site real: o conteúdo **nascia invisível no CSS** (`opacity: 0`, esperando a animação revelar) e o efeito-assinatura foi desligado com `@media (prefers-reduced-motion: reduce) { animation: none }`. O cliente tinha "reduzir movimento" ligado no Windows → a animação nunca rodou → **site preto e parado**. Duas regras pra isso nunca repetir:
1. **Conteúdo NUNCA nasce invisível no CSS.** Quem esconde, na hora de animar, é o JS. Se o script falhar por qualquer motivo, o site aparece inteiro.
2. **Reduced-motion se respeita REDUZINDO, não removendo.** Quem liga "reduzir movimento" (enjoo, vestibular, epilepsia) recebe a **versão calma**: fades curtos no lugar de parallax/pin, fundo quase parado mas bonito — o site completo, digno, nunca quebrado. Testa com a opção ligada antes de entregar.

## Legibilidade sobre fundo animado

Texto branco sobre partículas/3D fica meio ilegível. Solução leve (não escurece nada): halo de sombra herdado no conteúdo —
```css
main { text-shadow: 0 1px 2px rgba(0,0,0,.6), 0 2px 20px rgba(0,0,0,.5); }
```

## A pergunta-chave antes de construir

**O efeito serve pra contar minha história e vender — ou é só vaidade?** Se serve, bora. O melhor motion é o que a pessoa nem percebe: ela só sente "premium" e entende tudo.
