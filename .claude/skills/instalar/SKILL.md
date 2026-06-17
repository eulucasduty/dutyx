---
name: instalar
description: >
  Instala o DutyX no negócio de quem acabou de baixar. Entrevista curta sobre o negócio,
  o tom de voz, o visual e o foco atual; escolhe o perfil (empresário ou vibecoder); preenche
  _contexto/negocio.md, _contexto/marca.md e _contexto/estrategia.md; e cola o perfil no CLAUDE.md.
  Use quando a pessoa acabou de abrir a pasta e quer instalar, ou pedir "rodar /instalar",
  "instalar o DutyX", "primeiro setup".
---

# /instalar — o primeiro comando

É a primeira coisa que a pessoa roda depois de baixar o DutyX. **Não pode falhar e não pode soar burocrático.** Trata como uma conversa de descoberta, gente boa, uma pergunta de cada vez — nunca enfileira tudo de uma vez. No fim, o sistema tem que sair sabendo quem é a pessoa, como ela fala e onde dói o dia a dia dela. E tem que terminar com uma **vitória rápida** — algo concreto que prove que valeu.

## Pré-checagem (silenciosa)

1. **Já tem contexto?** Veja se `_contexto/negocio.md`, `marca.md` ou `estrategia.md` já estão preenchidos (não são mais o modelo com ⏳). Se sim, pergunte: "Já tem coisa configurada aqui. Quer recomeçar do zero ou só completar o que falta?"
2. Se for setup limpo, manda ver.

## Abertura (acolhe)

Se ainda não tiver mostrado, **abra o `GUIA.html`** (o guia completo) pra pessoa ver enquanto a gente conversa (no Claude Code aparece no preview; senão, peça os dois cliques). Depois diga, no tom do Lucas, algo como: "Boa, você tá dentro. Vou te fazer umas perguntas rápidas pra esse sistema parar de ser genérico e virar a sua cara. Uns 5 minutos. Responde do teu jeito, sem formalidade."

## Fase 1 — Perfil

Pergunte qual combina mais:
1. **Empresário / dono de negócio** — tem um negócio rodando, quer usar IA pra crescer (mais cliente, mais venda).
2. **Vibecoder / prestador** — quer ganhar dinheiro prestando serviço com IA, ou aprender pra isso.

A resposta define qual perfil colar no `CLAUDE.md` no fim (`perfis/empresario.md` ou `perfis/vibecoder.md`).

## Fase 2 — Entrevista (uma pergunta por vez)

Espere cada resposta antes da próxima. Se vier vago, peça concretude **uma** vez; se continuar vago, registra o que veio e segue. Máximo 5-7 perguntas — não enrola.

**Negócio:**
1. "Como você chama o que você faz? (nome do negócio, ou seu nome se for marca pessoal)"
2. "O que você entrega, numa frase, do jeito que você explicaria pro seu vizinho?"
3. "Quem te paga? (descreve seu cliente real em uma ou duas frases — sem aquela persona genérica)"

**Voz e visual:**
4. "Me cola um pedaço de algo que você escreveu de verdade — uma legenda, um story, um email pra cliente. Qualquer coisa real e recente. É assim que eu pego seu jeito de falar sem chutar."
5. "Tem identidade visual? Me passa cor principal e fonte, se tiver. Se tiver logo, joga em `_contexto/logo.png`. Se tá no zero, beleza também."

**Foco:**
6. "Qual o maior gargalo do teu negócio hoje — o que tá te segurando de crescer?"
7. "Tem alguma coisa que você repete toda semana e queria tirar das costas?"

## Fase 3 — Preencher os arquivos

Com as respostas, preencha (sem deixar nenhum aviso de modelo/⏳ pra trás):
- `_contexto/negocio.md` ← perguntas 1-3 + perfil.
- `_contexto/marca.md` ← pergunta 4 (derive o tom em 2-3 frases a partir do exemplo real; liste o "ranço" se ela citar) + pergunta 5 (cor/fonte/logo, ou marque "no zero").
- `_contexto/estrategia.md` ← perguntas 6-7 (registre o item da 7 como candidato a virar comando) + derive 1-2 prioridades que atacam o gargalo.
- `CLAUDE.md` ← cole no final o conteúdo de `perfis/<perfil escolhido>.md`, trocando referências genéricas pelo nome do negócio.

## Fase 4 — Vitória rápida (não pule)

Entregue ALGO concreto agora, usando o que acabou de aprender — pra pessoa sentir o sistema funcionando no minuto 1. Escolha conforme o gargalo dela, por exemplo:
- um rascunho de oferta/proposta de valor em uma frase, OU
- 3 ideias de conteúdo no tom dela, OU
- a sugestão da primeira frente a atacar e por quê.
Diga: "Ó, já te entrego isso de brinde pra você ver que funciona."

## Fase 5 — Resumo + próximo passo

Mostre o que ficou configurado:
```
✓ Perfil: [empresário | vibecoder]
✓ Negócio: _contexto/negocio.md
✓ Marca (tom + visual): _contexto/marca.md
✓ Foco atual: _contexto/estrategia.md
✓ CLAUDE.md ajustado pro seu perfil
```
E feche, no tom do Lucas: "Pronto, o DutyX te conhece agora. Sempre que sentar pra trabalhar, começa com `/abrir`. Quando quiser construir, chama a frente — sugiro começar por **[frente que ataca o gargalo dela]**. E quando quiser guardar tudo num lugar seguro, manda `/salvar`."

## Regras
- Uma pergunta por vez. Conversa, não formulário.
- Não invente dado. Resposta vaga vira placeholder claro, não invenção.
- 5-7 minutos no máximo. Se a pessoa enrolar, registra e segue.
- Termine SEMPRE com a vitória rápida da Fase 4 — é o que prova o valor.
