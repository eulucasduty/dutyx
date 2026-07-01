# 📚 O QUÊ — Site foda: motion, 3D e aquele efeito que prende o olho

> Aquele site que você vê e pensa "como é que faz isso?". Tem regra por trás. Lê antes de construir — é o que separa "site de agência" de "template com cara de IA". (Escrito a partir do 1º site real do DutyX: na primeira tentativa saiu com PUTA cara de IA e sem nada de 3D. Aqui está tudo que faltou pra acertar de primeira.)

## Primeiro: o que faz um site ser FODA
Não é ter MAIS animação. É movimento **com intenção** pra contar história e guiar o olho:
1. **Movimento com propósito** — cada animação revela algo, mostra relação ou dá feedback.
2. **Storytelling no scroll** — a página se conta enquanto rola: coisas entram, pinam, transformam, reagem.
3. **Hierarquia e respiro** — tipografia grande e confiante, contraste, espaço. Menos elementos, melhor feitos.
4. **3D no ponto certo** — objeto que reage ao mouse/scroll dá o "uau" — quando serve.

## 🚫 Os 7 pecados que dão "cara de IA" (evite por PADRÃO)
Foi exatamente isso que estragou a primeira versão. O DutyX **não faz** nada disso:
1. **Grade (grid) de fundo repetida em toda seção** — o tell nº1 de "gerado por IA". Proibido por padrão.
2. **Bordas finas repetidas + cards genéricos** (borda 1px arredondada com listrinha) — cara de shadcn cru.
3. **Dark + mono tímido e ESTÁTICO** — sem movimento nem ousadia tipográfica = parece rascunho.
4. **Roxo/azul/gradiente arco-íris** — cor "default de componente". Tudo vai pra paleta da MARCA.
5. **GERAR componente do zero** em vez de usar os famosos prontos — sai sem alma.
6. **Zero storytelling no scroll** — a página só "desce". Nada pina, nada revela, nada reage.
7. **Matar os efeitos com `prefers-reduced-motion`** — ERRO GRAVE: puseram `@media (prefers-reduced-motion:reduce){animation:none}` no efeito-assinatura e, como o cliente tinha "reduzir movimento" ligado no Windows, **o site ficou preto e parado**. Aqui a animação É o produto: ela renderiza SEMPRE (ver regra abaixo).

## A tecnologia por trás (você não programa, mas entende pra pedir certo)
- **GSAP + ScrollTrigger** — a base da animação premium: liga o efeito ao scroll (pin, scrub, parallax, scroll horizontal). É o que faz os sites "awwwards".
- **Lenis** — scroll suave/com inércia. É o **truque nº1 do "feel de agência"** — sem ele, o scroll é seco.
- **Spline / Three.js** — 3D na página. Spline resolve 90% (monta visual, embeda).
- **Componentes famosos (21st.dev)** — blocos prontos e lindos que você **rebrandeia** (nunca gera do zero).

## Scrollytelling (a página que se conta rolando)
Combina **Lenis** (scroll suave) + **GSAP ScrollTrigger**. Receitas que funcionam:
- **Seção pinada com scroll horizontal** (trava e desliza pro lado enquanto você rola pra baixo).
- **Parallax** no herói (fundo/elemento em velocidade diferente).
- **Reveals em camadas** (coisas entram em sequência).
- Número/título que se move num ritmo próprio.

## 3D DE VERDADE — os 2 caminhos (o DutyX ensina os dois)
- **Caminho A — 3D interativo ao vivo (Spline):** monta a cena em `spline.design` (grátis), exporta o `.splinecode`, embeda com `@splinetool/react-spline`. Reage ao mouse. (Ex.: um robô que segue o cursor.)
- **Caminho B — 3D no SCROLL (vídeo → frames → canvas):** a técnica estilo **Apple** (o AirPod girando quando você rola). NÃO é vídeo tocando: é uma sequência de imagens desenhada num `<canvas>`, e **o frame exibido é amarrado ao scroll**. Você pega um render/vídeo do produto girando → divide em ~120-180 frames com `ffmpeg` → o ScrollTrigger (`scrub`) mapeia o progresso do scroll no índice do frame. Rolar = girar o 3D. (Esqueleto e comando no `_blocos/site-foda/motion-presets.md`.)

## Fundos animados interativos (cada seção com um efeito diferente)
- Herói: **vortex de partículas** (canvas) que reage ao mouse — leve e "vivo".
- Seções: **Aurora / Beams / Meteors / Gradient Mesh** (CSS, leves). Um efeito DIFERENTE por seção pra não repetir.

## Camadas com intenção (profundidade premium)
Empilhamento: **fundo animado (z-0) < 3D/objeto (z-meio) < texto (z-topo).** O 3D como **backdrop fixo interativo** da página (atrás das letras, reagindo ao mouse — precisa liberar `pointer-events` pro mouse "atravessar" o conteúdo até ele).

## ⚠️ Performance é rei (a regra que mais importa)
Site lindo e lento **converte menos**. A maioria abre no 4G, celular mediano:
- 3D/sequência de frames pesados = veneno no mobile. Otimize (jpg/webp ~1600px, comprimido, pré-carregado); no mobile use menos frames ou versão estática.
- Anime só **transform** e **opacity** (roda liso). Anima layout (width/top/margin) = engasga.
- Use **1** efeito forte (pin/scrub/3D-scroll) por página. Teste no celular sempre.

## 🔒 Regra anti-reduced-motion (não repita o erro)
O **efeito-assinatura** (fundo animado, 3D, hero) **anima SEMPRE** — nunca envolva ele num `@media (prefers-reduced-motion:reduce){animation:none}`. Respeite `reduced-motion` só em **micro-animações não-essenciais** (um hover, um fade), nunca no efeito que É o produto.

## Legibilidade sobre fundo animado
Texto branco sobre robô/partículas fica meio ilegível. Solução leve (não escurece nada): halo de sombra herdado no conteúdo —
```css
main { text-shadow: 0 1px 2px rgba(0,0,0,.6), 0 2px 20px rgba(0,0,0,.5); }
```

## A pergunta-chave antes de construir
**O efeito serve pra contar minha história e vender — ou é só vaidade?** Se serve, bora. O melhor motion é o que a pessoa nem percebe: ela só sente "premium" e entende tudo.
