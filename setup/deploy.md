# 🚀 Deploy — pôr o site no ar

Fecha o ciclo do `/site-foda`: depois de construir, publicar. Caminho mais simples primeiro.

## Opção 1 — Vercel (mais simples)
1. Instale o Vercel CLI: `npm i -g vercel`
2. Na pasta do site: `vercel --prod --yes` → sobe direto e te dá o link. Sem precisar de git.

## Opção 2 — Git + Vercel (recomendado: deploy automático + backup)
1. Repo no GitHub + `vercel git connect` → cada `git push` republica sozinho e fica versionado.
2. ⚠️ Login no site da Vercel ≠ login no `gh` CLI. Confirme a conta certa ativa (`gh auth switch` se tiver mais de uma).

## Domínio próprio (ex: via Cloudflare)
1. Adicione o domínio no projeto Vercel → ela te diz o registro DNS.
2. No DNS (Cloudflare), crie **1 registro**:
   - Subdomínio → **CNAME** `sub` → `cname.vercel-dns.com` (ou o **A** `76.76.21.21` que a Vercel indicar).
3. ⚠️ **Nuvem CINZA (DNS only), NUNCA laranja/proxied** — o proxy da Cloudflare briga com o SSL da Vercel (dá "404 + Não seguro").
4. Espere propagar (uns minutos) → a Vercel verifica e emite o SSL sozinha.

## Regra de ouro
Deploy é passo técnico — se travar, me diga o erro exato que eu te desenrolo. E nada de site no ar sem você conferir no celular primeiro (performance/legibilidade).
