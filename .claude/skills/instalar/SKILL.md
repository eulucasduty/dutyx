---
name: instalar
description: >
  Instala o DutyX no negócio de quem acabou de baixar. Entrevista curta sobre o negócio, preço,
  equipe, canais, tom de voz, visual e meta de 90 dias; escolhe o perfil (empresário ou vibecoder);
  preenche _contexto/negocio.md, marca.md e estrategia.md; e cola o perfil no CLAUDE.md entre os
  marcadores dutyx:perfil. Use quando a pessoa acabou de abrir a pasta e quer instalar, ou pedir
  "rodar /instalar", "instalar o DutyX", "primeiro setup".
---

# /instalar — o primeiro comando

É a primeira coisa que a pessoa roda depois de baixar o DutyX. **Não pode falhar e não pode soar burocrático.** É uma conversa de descoberta, gente boa, uma pergunta de cada vez — nunca enfileira tudo. No fim, o sistema sabe quem é a pessoa, quanto ela cobra, onde ela aparece e onde dói. E termina com uma **vitória rápida**.

## Pré-checagem (silenciosa)
1. **Já tem contexto?** Se `_contexto/negocio.md`, `marca.md` ou `estrategia.md` já estão preenchidos (não são mais o modelo), pergunte: "Já tem coisa configurada aqui. Quer recomeçar do zero ou só completar o que falta?"
2. Se for setup limpo, manda ver.

## Abertura (acolhe)
Se ainda não tiver mostrado, **abra o `GUIA.html` no navegador dela** com o comando do sistema: no Windows `start GUIA.html` (PowerShell); no Mac `open GUIA.html`. Se falhar, plano B: "dá dois cliques no arquivo GUIA.html aí na pasta." Depois, no tom do Lucas: "Boa, você tá dentro. Vou te fazer umas perguntas rápidas pra esse sistema parar de ser genérico e virar a sua cara. Uns 5 minutos, responde do teu jeito."

## Fase 1 — Perfil
Pergunte qual combina mais:
1. **Empresário / dono de negócio** — tem um negócio rodando, quer usar IA pra crescer.
2. **Vibecoder / prestador** — quer ganhar dinheiro prestando serviço com IA, ou aprender pra isso.

A resposta define o perfil a colar no `CLAUDE.md` no fim (`perfis/empresario.md` ou `perfis/vibecoder.md`). **Se for vibecoder SEM negócio rodando ainda** (sem cliente, começando do zero), use a variante da Fase 2.

## Fase 2 — Entrevista (uma pergunta por vez)
Espere cada resposta. Se vier vago, peça concretude UMA vez; se continuar vago, registre o que veio e siga. Ritmo rápido — é papo, não formulário.

**Negócio:**
1. "Como você chama o que você faz? (nome do negócio, ou seu nome se for marca pessoal)"
2. "O que você entrega, numa frase, do jeito que você explicaria pro seu vizinho?"
3. "Quem te paga? (teu cliente real, em uma ou duas frases — sem persona genérica)"
4. "Quanto custa o que você vende? (preço ou ticket médio — ex: sessão R$150, plano R$497/mês)"
5. "Você toca sozinho ou tem equipe? (se tem, quantas pessoas fazendo o quê)"

**Voz e visual:**
6. "Me cola um pedaço de algo que você escreveu de verdade — legenda, story, email pra cliente. É assim que eu pego teu jeito de falar sem chutar."
7. "Tem identidade visual? Cor principal e fonte, se tiver. Logo, joga em `_contexto/logo.png`. No zero? Beleza também."

**Presença e foco:**
8. "Onde você aparece hoje? (Instagram, WhatsApp, indicação, Google, loja física... e qual puxa mais cliente)"
9. "Qual o maior gargalo do teu negócio hoje — o que tá te segurando de crescer?"
10. "Se em 90 dias UMA coisa tivesse que acontecer, qual número seria? (ex: 10 clientes novos, R$15k/mês, 5k seguidores)"
11. "Tem algo que você repete toda semana e queria tirar das costas?"

**Variante — vibecoder sem negócio ainda:** troque 3-5 e 8-10 por: "que serviço você quer vender com IA? (site, LP, conteúdo...)", "pra que tipo de cliente? (comércio da tua cidade, nicho online...)", "quanto pretende cobrar no início?", "onde você pretende caçar os primeiros? (conhecidos, grupos, Instagram, porta a porta)". O gargalo é **o primeiro cliente** — registre assim na estratégia, e a meta de 90 dias vira "X primeiros clientes pagando".

## Fase 3 — Preencher os arquivos
Com as respostas, preencha:
- `_contexto/negocio.md` ← perguntas 1-5 e 8 + perfil.
- `_contexto/marca.md` ← 6 (derive o tom em 2-3 frases do exemplo real; extraia os bordões/expressões que ela repete; liste o "ranço" se ela citar) + 7.
- `_contexto/estrategia.md` ← 9-11 (a 11 é candidata a virar comando) + a meta de 90 dias + 1-2 prioridades que atacam o gargalo.
- `CLAUDE.md` ← cole o conteúdo de `perfis/<perfil>.md` **entre os marcadores** `<!-- dutyx:perfil:inicio -->` e `<!-- dutyx:perfil:fim -->` (eles já existem no fim do arquivo). **Se já houver conteúdo entre os marcadores, SUBSTITUA** — nunca duplique. Ao colar, **omita a linha de citação do topo** (a que começa com `>` — é nota do arquivo de perfil, não do cliente). Troque referências genéricas pelo nome do negócio.

**Regra de ferro dos campos:** resposta que não veio vira **"a definir — a /planejamento resolve"**. Nunca deixe ⏳ pra trás, nunca invente dado.

## Fase 4 — Vitória rápida (não pule)
Entregue ALGO concreto agora, usando o que acabou de aprender. Escolha conforme o gargalo:
- um rascunho de oferta/proposta de valor em uma frase, OU
- 3 ideias de conteúdo no tom dela, OU
- a primeira frente a atacar e por quê.
Diga: "Ó, já te entrego isso de brinde pra você ver que funciona."

## Fase 5 — Resumo + próximo passo
1. **Registre a primeira entrada** em `_contexto/historico.md` (no formato padrão, abaixo do traço): `### AAAA-MM-DD — DutyX instalado` + 1-2 linhas (perfil escolhido, vitória rápida entregue, próximo passo: a frente sugerida). É isso que faz o primeiro `/abrir` já lembrar de hoje.
2. Mostre o que ficou configurado (perfil, negócio, marca, foco — em 4-5 linhas de check). Feche no tom do Lucas: "Pronto, o DutyX te conhece. Sempre que sentar pra trabalhar, `/abrir`; quando terminar, `/fechar`. Pra construir, chama a frente — sugiro começar por **[frente que ataca o gargalo]**. E quando quiser guardar tudo num cofre seu, `/salvar`."
   Depois, **apresente o painel visual**: "E tem mais uma coisa: teu sistema tem um rosto. Roda `npm run painel` aqui no terminal que abre o painel no navegador — dá pra VER as frentes, o arsenal, tudo que a gente criar aparecendo ao vivo. Quer que eu abra agora?" Se ela topar, rode `npm run painel` você mesmo (o painel abre o navegador sozinho e fica rodando — avise que pra fechar é Ctrl+C naquela janela, e que o Claude Code continua noutra janela do terminal).
3. **Ensine o gesto de voltar amanhã** (a pessoa pode não saber): "amanhã é só abrir essa pasta no Explorador, digitar `powershell` na barra de endereço (no Mac: abrir o Terminal e arrastar a pasta depois de digitar `cd `), Enter, digitar `claude` e mandar `/abrir`."

## Regras
- Uma pergunta por vez. Conversa, não formulário. Se a pessoa enrolar, registra e segue.
- Não invente dado. Sem resposta = "a definir — a /planejamento resolve".
- Termine SEMPRE com a vitória rápida da Fase 4 — é o que prova o valor.
