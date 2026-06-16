# 🧩 Componentes prontos (21st.dev) + animação (Framer Motion)

Pra Rota Pro do `/site-foda` (o "site de US$10k"). Tudo aqui tem caminho **grátis**.

## 21st.dev — blocos profissionais (hero, pricing, navbar, depoimentos…)

### Jeito grátis pra todo mundo (recomendado — é o que o guia ensina)
1. Acesse o site **21st.dev** e navegue pelos componentes.
2. **Copie o código** do componente que curtir.
3. Cole no Claude Code e peça: *"integra esse componente do 21st.dev na minha landing, adapta aos meus design tokens, troca o placeholder pelo meu texto e adiciona as animações de entrada do Framer Motion."*
Custo: **zero**. Sem chave, sem instalação.

### Opcional — 21st.dev "Magic" (gera com `/ui`)
É um MCP que gera componente direto no editor ("v0 dentro do Claude Code") com `/ui`. Tem **tier grátis** (créditos limitados/mês; em beta), depois é pago. Precisa de uma **chave** do 21st.dev (é um MCP local — usa o modelo `mcp.template.json`, não o login de conector). Vale só se você for gerar muito componente. **Não é necessário** — o copy-paste grátis resolve.

## Framer Motion — as animações de agência (Rota Pro / React)
Pacote open-source (grátis) pra animação em projetos React/Next:
```
npm install framer-motion
```
Depois, peça ao Claude: *"use Framer Motion em todas as animações — fade no scroll, revelações escalonadas (stagger) e transições suaves no hover."*
(Na Rota Rápida, em HTML puro, o equivalente é o **GSAP** — não precisa instalar projeto React.)

## Skill de design (o gosto)
O DutyX já traz o sistema de design em `_blocos/site-foda/design-tokens.md`. Pra reforçar, dá pra usar a skill pública **`frontend-design`** (gosto de design profissional, anti-"cara de IA"). O `/site-foda` já referencia isso.

## Regra de ouro
Nada disso é obrigatório: a Rota Rápida (HTML + GSAP) faz site bonito sem instalar nada. Esta pilha é pra quem quer o acabamento "de agência". E nunca trave a pessoa — se algo não instalar, volte pro caminho simples.
