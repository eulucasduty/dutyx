# Bloco — LP 3D Scrollytelling (a receita ponta-a-ponta)

> O processo completo que constrói uma LP estilo "produto premium": um objeto 3D central que dá boot e gira conforme o scroll, conteúdo que sobe junto com a rolagem (nunca congela), seções coloridas alternando com seções escuras, backgrounds gerados por IA e uma seção de preço que vende. Foi validado construindo a LP do próprio DutyX — dogfooding. Os templates de código prontos estão em `_blocos/site-foda/templates/`.

**Quando usar:** a pessoa quer "LP tipo Apple/awwwards", "site com objeto 3D girando no scroll", "página tipo aquelas de produto premium". É a Rota Completa do `/site-foda` levada ao limite — reserve pra quando a oferta merece.

---

## O QUÊ (ensina antes de construir — não pule)

A mágica dessas páginas é **UMA técnica + coreografia**:

1. **O objeto 3D não é 3D ao vivo.** É uma sequência de imagens (frames) desenhada num `<canvas>`, com o frame amarrado à posição do scroll ("frame-scrub"). Zero WebGL em runtime = roda liso em qualquer celular. É como os sites da Apple fazem.
2. **O conteúdo nunca congela.** O erro clássico é "pinar" a tela inteira enquanto o objeto anima — a pessoa rola e nada sobe, parece travado. O certo: o objeto fica `position: sticky` (parado no lugar) enquanto textos, botões e seções **fluem por cima dele**. A página nunca para de responder ao dedo.
3. **Reveals scrubados, não one-shot.** Título subindo letra por letra, blocos subindo, imagens abrindo — tudo amarrado ao scroll (`scrub: true`), não disparado uma vez. É isso que dá a sensação de "a página anda comigo".
4. **Profundidade = camadas.** Headline ATRÁS do objeto na abertura (o objeto sobrepõe o título), texto NA FRENTE do objeto no fim. Sanduíche de z-index = cinema.
5. **A saída de cena também é coreografia.** A seção seguinte sobe COBRINDO o objeto pinado (efeito "cover") — o objeto não sai correndo, ele é engolido pela página.

**Sobre referências:** estude sites premium com o DevTools — estrutura das seções, escala tipográfica, como o scroll se comporta, onde ficam as cores. **Estudar estrutura e técnica = sim. Copiar assets, textos, logo ou identidade de outra marca = nunca.** O resultado sai com a marca do cliente (`_contexto/marca.md`).

---

## O PORTÃO (confirma antes)

- "Qual é o **objeto central**?" (mascote, produto, embalagem, logo 3D — precisa existir ou ser criável)
- "Paleta P&B com 1 cor de acento, ou colorida?" (essas LPs brilham com base neutra + seções de cor)
- "Público mais no celular?" (sim = budget apertado, e é o padrão)
- Chave de IA pra gerar backgrounds (OpenRouter) — **opcional**; sem ela usa textura CSS/foto própria.

---

## O COMO — os 8 movimentos

### 1. Estude a referência (30 min, DevTools)
Abra a referência em viewport mobile (390px). Anote: altura do headline do hero (as boas usam ~15vw, UPPERCASE, line-height ~0.9), quantas seções, quais são coloridas, o que o scroll faz com o conteúdo. Meça com `getComputedStyle` — não a olho.

### 2. Defina o conceito e o objeto central
O objeto é o "pote" da página — o protagonista que gira. Roteiro que funciona: **dormindo → dá boot → gira 360° → é coberto pela próxima seção**. Cada beat do roteiro vira uma faixa do scroll.

### 3. Crie o objeto 3D SEM Blender (Three.js procedural)
Template: `templates/gerador-mascote-3d.html`. É uma cena Three.js que monta um mascote com primitivas (caixas arredondadas, cilindros, esferas), materiais metálicos, rim light e emissivos — e expõe `window.DXR.bake(N, w, h)` que renderiza N frames e devolve webp **com fundo transparente**.
- Edite o bloco `CONFIG` no topo: cores da marca, texto da placa no peito, acentos.
- A função `setFrame(t)` é o roteiro: t=0→0.13 é o boot (visor pisca e liga, barra de leitura carrega), t=0.14→1 é o giro de 360°.
- Rode `node templates/servidor.mjs`, abra `/templates/gerador-mascote-3d.html`, ajuste até amar o frame parado.
- **Regra de contraste:** objeto escuro em fundo escuro SOME. Rim light forte (branco) + halo radial CSS atrás resolvem.

### 4. Asse os frames (bake)
No console do navegador (ou via Claude): `copy(await DXR.bake(72, 640, 800))` salva o JSON; ou peça pro Claude salvar via DevTools. Depois `node templates/assar-frames.mjs` decodifica pra `assets/robot/frame_00..71.webp`.
- **Budget: 60–72 frames, ~640×800, TOTAL ≤ 1,5 MB.** Passou disso, baixa a qualidade do webp (0.8) antes de baixar a resolução.

### 5. Gere os backgrounds por IA (opcional, mas eleva MUITO)
Template: `templates/gerar-imagens.mjs` (OpenRouter, modelo de imagem atual com fallback). O que gerar:
- **Textura escura sutil** (parede/reboco quase-preto) pras seções escuras — mata o "preto chapado de IA".
- **Textura na cor de acento** (reboco/argila na cor da marca) pras seções coloridas.
- **1–2 fotos editoriais P&B** ligadas ao universo do produto pras seções divididas (foto | texto).
- Prompt sempre com: "no text, no logos, no watermark". Nada de marca alheia.
- Comprima ANTES de usar: `templates/decodificar-imagens.mjs` + canvas do navegador → webp (textura ~1400px q0.72, foto ~1100px q0.78). Meta: **as 4 imagens somadas ≤ 150 KB**.
- Chave via variável de ambiente (`OPENROUTER_API_KEY=... node gerar-imagens.mjs`) — **nunca gravada em arquivo** (regra do SEGURANCA.md).

### 6. Monte o esqueleto da página (a estrutura que converte)
Anatomia validada (mobile-first, uma coluna):

```
HERO (objeto sticky + 3 camadas)     ← headline ATRÁS do objeto
  └─ painel A: kicker + título + sub + CTAs (saem de cena ao rolar)
  └─ painel B: frase-manifesto POR CIMA do objeto
  └─ spacer 60svh: objeto sozinho → seção seguinte COBRE ele
MARQUEE de comandos/benefícios (loop infinito, separadores pontilhados)
LISTA numerada (o que tem dentro — linhas grandes com seta)
SPLIT foto|texto (método) — foto com clip-reveal + parallax interno
SEÇÃO COLORIDA (conceito/lei) — split invertido + steps numerados
STATEMENT (frase gigante: linha outline + linha sólida)
ACCORDION (módulos/entregáveis)
SEÇÃO COLORIDA (preço) — ver movimento 8
FAQ · CTA FINAL · FOOTER com wordmark gigante
```

Tipografia com personalidade: **uma display condensada pesada** (ex.: Anton) SÓ nos títulos gigantes + uma grotesk de trabalho (ex.: Archivo) no resto + mono nos micro-labels `[ assim ]`. ⚠️ **Armadilha do faux-bold:** se a display só tem peso 400 (caso da Anton), NUNCA peça `font-weight: 900` — o navegador engorda sinteticamente e o glifo estoura a máscara de animação (corta a borda do texto). Peso 400 e pronto.

### 7. A camada de scrolltelling (os presets novos)
Base Lenis + ScrollTrigger do `motion-presets.md`. Por cima, os presets desta receita:

**Frame-scrub do objeto sticky (SEM pin — a página continua fluindo):**
```js
ScrollTrigger.create({ trigger:'.hero', start:'top top', end:'bottom bottom', scrub:0.4,
  onUpdate:(s)=>{ desenhaFrame(s.progress*(TOTAL-1)); heroTL.progress(s.progress); }});
```
`heroTL` é uma timeline PAUSADA com a coreografia (zoom de abertura, saídas, chips, HUD) — o scroll dirige o `.progress()` dela. Um relógio só pra tudo.

**Título subindo letra por letra, amarrado ao scroll:**
```js
function splitChars(el){ /* divide por <br> em .ln (overflow:hidden, white-space:nowrap) e cada letra em .ch */ }
gsap.utils.toArray('[data-chars]').forEach(el=>{
  gsap.fromTo(splitChars(el), {yPercent:112}, {yPercent:0, stagger:.02, ease:'none',
    scrollTrigger:{ trigger:el, start:'top 94%', end:'top 46%', scrub:true }});
});
```
⚠️ `.ln{white-space:nowrap}` é obrigatório (senão a linha quebra letra a letra) → linhas de título com **2–3 palavras no máximo**. ⚠️ Dê respiro na máscara (`padding` + margin negativa) senão glifos altos são raspados em cima.

**Blocos que sobem com o scroll — MENOS na primeira dobra:**
```js
gsap.utils.toArray('[data-rise]').forEach(el=>{
  if (el.closest('.primeira-dobra')) { gsap.fromTo(el,{y:34,autoAlpha:0},{y:0,autoAlpha:1,duration:.9,delay:.35,ease:'power3.out'}); return; }
  gsap.fromTo(el,{y:56,autoAlpha:0},{y:0,autoAlpha:1,ease:'none',
    scrollTrigger:{ trigger:el, start:'top 94%', end:'top 62%', scrub:true }});
});
```
⚠️ Se a primeira dobra for scrubada, os CTAs nascem meio-transparentes (estão em zona de scrub no load). Primeira dobra = animação de entrada; resto = scrub.

**Efeito "cover" (a seção seguinte engole o objeto):**
```css
.hero__spacer{ height:60svh }                       /* objeto fica sozinho no fim do hero */
.covers{ position:relative; z-index:4; margin-top:-60svh; background:var(--bg) } /* tudo pós-hero */
```
O wrapper `.covers` (fundo opaco!) sobe por cima do objeto ainda sticky. É o efeito-assinatura da saída.

**Foto que se abre + parallax interno (nas seções split):**
```js
gsap.fromTo(media, {clipPath:'inset(12% 8% 12% 8% round 22px)'},
  {clipPath:'inset(0% 0% 0% 0% round 22px)', ease:'none',
   scrollTrigger:{ trigger:media, start:'top 95%', end:'top 40%', scrub:true }});
gsap.fromTo(img, {yPercent:-6},{yPercent:6, ease:'none',
  scrollTrigger:{ trigger:img.closest('.split__media'), start:'top bottom', end:'bottom top', scrub:true }});
```
(img com `height:122%; top:-11%` pra ter sobra de parallax.)

**Temperos que dão vida (baratos):** barra de progresso no topo (`scaleX` scrubado), HUD com labels mono verticais nas laterais + contador de scroll `[042%]` (atualiza no mesmo `onUpdate`), chips/pills orbitando o objeto (⚠️ **dentro da camada sticky**, senão rolam pra fora da tela), marquee CSS infinito, separadores pontilhados (`radial-gradient` repetido no eixo x), CTA flutuante que aparece depois do hero e some na seção de preço.

### 8. A seção de preço que vende
Não é uma tabela — é um palco: headline própria em display gigante ("Tudo isso. Esse preço."), preço monumental com os dígitos subindo (`data-chars`), a linha de enquadramento ("Pagamento único · Acesso vitalício" + um quip humano tipo "menos que uma pizza — e é seu pra sempre"), **selo circular tracejado de garantia** (rotacionado, flutuando devagar), stack de entregáveis com tag mono na frente de cada item (`[SISTEMA]`, `[AULAS]`…), CTA com **brilho varrendo** a cada ~3s, e o fecho de risco zero embaixo do botão. Persuasão honesta: garantia real, sem contador falso, sem âncora de preço inventada.

---

## Gotchas de ouro (sofridos na prática — leia antes de debugar)

1. **Lenis "desfaz" `window.scrollTo`** — pra testar posição de scroll via script use `lenis.scrollTo(y, {immediate:true})` (exponha `window.__lenis = lenis`).
2. **GSAP não entende `svh`** em tween — use `vh`.
3. **Faux-bold em fonte de peso único** corta o texto na máscara (ver movimento 6).
4. **Objeto escuro + fundo escuro** = invisível. Rim light no render + halo CSS.
5. **Chips/HUD fora da camada sticky** rolam embora — tudo que "orbita" o objeto mora DENTRO dela.
6. **`.ln` sem `nowrap`** quebra o título letra a letra no meio da palavra.
7. **Reduced-motion**: o site inteiro visível e bonito sem nenhum tween (regra nº0 do `motion-presets.md`). Um parâmetro `?motion=on` na URL ajuda a testar a versão animada mesmo com "reduzir movimento" ligado no sistema.
8. **Screenshot de DevTools mente** às vezes (tiles repetidos/frame velho) — valide posição com `getBoundingClientRect`, não só com print.

## Budget (herda o do /site-foda, com os números desta receita)
- Frames do objeto: **≤ 1,5 MB** (60–72 × webp ~15 KB).
- Imagens IA somadas: **≤ 150 KB** (comprimidas via canvas).
- Primeira carga total ≤ 2 MB · LCP < 2,5s · só `transform`/`opacity` · fontes: display + texto + mono do sistema, woff2.

## Checklist de entrega (além do checklist do /site-foda)
- [ ] Rolando devagar, o conteúdo SOBE junto com o dedo (nada congela)?
- [ ] O objeto dá boot → gira → é coberto pela seção seguinte?
- [ ] Headline atrás do objeto na abertura, texto na frente no fim?
- [ ] Primeira dobra entra por animação (não nasce meio-transparente)?
- [ ] Preço: selo de garantia + stack com tags + CTA com brilho?
- [ ] Com "reduzir movimento": página completa e legível?
- [ ] Total transferido ≤ 2 MB no DevTools (Fast 4G)?
