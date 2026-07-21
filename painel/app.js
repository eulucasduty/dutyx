// app.js — a lógica do Painel DutyX. Vanilla JS, zero dependência.
// O painel NÃO fala com IA: ele lê/escreve os arquivos que o Claude Code usa.

'use strict';

const $ = (sel, el = document) => el.querySelector(sel);
const conteudo = $('#conteudo');

// ---------- estado em memória ----------
const cache = { config: null, estado: null, envChaves: {}, frentes: null };

// ---------- helpers ----------

function esc(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('mostra');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => t.classList.remove('mostra'), 2600);
}

async function copiar(texto, aviso = 'Copiado! Agora cola no Claude Code.') {
  try { await navigator.clipboard.writeText(texto); toast(aviso); }
  catch {
    const ta = document.createElement('textarea');
    ta.value = texto; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); ta.remove(); toast(aviso);
  }
}

async function api(rota, corpo) {
  const r = await fetch(rota, corpo
    ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(corpo) }
    : undefined);
  const dados = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(dados.erro || 'Deu algo errado — tenta de novo.');
  return dados;
}

function dataAmigavel(ms) {
  const d = new Date(ms);
  return d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// ---------- mini-renderizador de markdown (o suficiente pros .md do DutyX) ----------

function md(texto) {
  const linhas = String(texto || '').split(/\r?\n/);
  const out = [];
  let i = 0, lista = null, quote = false;

  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/(^|\s)(https?:\/\/[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');

  const fechaLista = () => { if (lista) { out.push(`</${lista}>`); lista = null; } };
  const fechaQuote = () => { if (quote) { out.push('</blockquote>'); quote = false; } };

  while (i < linhas.length) {
    const l = linhas[i];

    if (/^```/.test(l)) { // bloco de código
      fechaLista(); fechaQuote();
      const buf = []; i++;
      while (i < linhas.length && !/^```/.test(linhas[i])) buf.push(linhas[i++]);
      i++;
      out.push(`<pre><code>${esc(buf.join('\n'))}</code></pre>`);
      continue;
    }
    if (/^\|/.test(l.trim())) { // tabela
      fechaLista(); fechaQuote();
      const tab = [];
      while (i < linhas.length && /^\|/.test(linhas[i].trim())) tab.push(linhas[i++]);
      const rows = tab.filter((r) => !/^\|[\s:|-]+\|$/.test(r.trim().replace(/\s/g, '')));
      const html = rows.map((r, ri) => {
        const cels = r.split('|').slice(1, -1).map((c) => inline(c.trim()));
        const tag = ri === 0 ? 'th' : 'td';
        return `<tr>${cels.map((c) => `<${tag}>${c}</${tag}>`).join('')}</tr>`;
      }).join('');
      out.push(`<table>${html}</table>`);
      continue;
    }
    const h = l.match(/^(#{1,4})\s+(.*)/);
    if (h) { fechaLista(); fechaQuote(); out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`); i++; continue; }
    if (/^\s*(---|\*\*\*)\s*$/.test(l)) { fechaLista(); fechaQuote(); out.push('<hr>'); i++; continue; }
    const q = l.match(/^>\s?(.*)/);
    if (q) { fechaLista(); if (!quote) { out.push('<blockquote>'); quote = true; } out.push(`<p>${inline(q[1])}</p>`); i++; continue; }
    const li = l.match(/^\s*[-*]\s+(.*)/);
    if (li) { fechaQuote(); if (lista !== 'ul') { fechaLista(); out.push('<ul>'); lista = 'ul'; } out.push(`<li>${inline(li[1])}</li>`); i++; continue; }
    const lo = l.match(/^\s*\d+[.)]\s+(.*)/);
    if (lo) { fechaQuote(); if (lista !== 'ol') { fechaLista(); out.push('<ol>'); lista = 'ol'; } out.push(`<li>${inline(lo[1])}</li>`); i++; continue; }
    if (!l.trim()) { fechaLista(); fechaQuote(); i++; continue; }
    fechaLista(); fechaQuote();
    out.push(`<p>${inline(l)}</p>`); i++;
  }
  fechaLista(); fechaQuote();
  return `<div class="md">${out.join('\n')}</div>`;
}

// ---------- dados compartilhados ----------

async function carregarEstado(forcar = false) {
  if (!cache.config || forcar) {
    const d = await api('/api/estado');
    cache.config = d.config; cache.estado = d.estado; cache.envChaves = d.envChaves || {};
  }
  return cache;
}
async function carregarFrentes(forcar = false) {
  if (!cache.frentes || forcar) cache.frentes = (await api('/api/frentes')).frentes;
  return cache.frentes;
}

function pillDe(item, st) {
  if (st === 'conectado' || st === 'manual-ok') return '<span class="pill ok">● conectado</span>';
  if (item.custo === 'pago') return '<span class="pill pago">◆ opcional pago</span>';
  return `<span class="pill falta">○ ${item.opcional ? 'opcional' : 'faltando'}</span>`;
}

// ---------- seção: HOJE ----------

async function renderHoje() {
  const [{ config, estado }, hoje] = await Promise.all([carregarEstado(), api('/api/hoje')]);
  const conectados = config.itens.filter((i) => ['conectado', 'manual-ok'].includes(estado.itens[i.id])).length;

  const entradas = hoje.entradas.map((e) => `
    <div class="card">
      <div class="mini">onde paramos</div>
      <h3>${esc(e.titulo)}</h3>
      <p class="soft" style="font-size:13.5px; white-space:pre-line">${esc(e.corpo)}</p>
      ${e.proximoPasso ? `<p style="margin-top:10px"><span class="laranja">→ próximo passo:</span> ${esc(e.proximoPasso)}</p>` : ''}
    </div>`).join('');

  conteudo.innerHTML = `
    <div class="secao-cabeca">
      <div class="ghost">01</div>
      <h1><span class="n">seção 01 · começo de sessão</span>Hoje</h1>
      <p class="sub">O painel é o rosto. Quem constrói é o Claude Code — abre ele nessa pasta e manda <code>/abrir</code>.</p>
    </div>
    ${hoje.vazio ? `
      <div class="card">
        <h3>Ainda não tem histórico por aqui</h3>
        <p class="soft">Sua primeira sessão começa no Claude Code: abre o terminal nessa pasta e roda <code>/instalar</code> (se for a primeira vez) ou <code>/abrir</code>. Quando você fechar a sessão com <code>/fechar</code>, o "onde paramos" aparece aqui sozinho.</p>
      </div>` : entradas}
    <div class="card">
      <div class="mini">atalhos</div>
      <div class="linha-form" style="flex-wrap:wrap">
        <button class="btn primario" data-copiar="/abrir">copiar /abrir</button>
        <button class="btn" data-copiar="/fechar">copiar /fechar</button>
        <button class="btn" onclick="location.hash='#frentes'">frentes →</button>
        <button class="btn" onclick="location.hash='#arsenal'">arsenal · ${conectados}/${config.itens.length} on</button>
      </div>
    </div>`;
}

// ---------- seção: FRENTES ----------

async function renderFrentes() {
  const frentes = await carregarFrentes();
  conteudo.innerHTML = `
    <div class="secao-cabeca">
      <div class="ghost">02</div>
      <h1><span class="n">seção 02 · o que o sistema constrói</span>Frentes</h1>
      <p class="sub">Cada frente é um comando no Claude Code. Clica pra ver o quê ela entrega, ligar referências e copiar o briefing pronto.</p>
    </div>
    <div class="grade">
      ${frentes.map((f) => `
        <div class="card" onclick="location.hash='#frentes/${f.id}'">
          <div class="mini">${esc(f.comando)}</div>
          <h3>${esc(f.nome)}</h3>
          <p class="muted" style="font-size:13px">${esc(f.entrega.replace(/\*\*/g, '').replace(/`/g, '')) || esc(f.oque.slice(0, 120))}</p>
        </div>`).join('')}
    </div>`;
}

async function renderFrente(id) {
  const [frentes, { config, estado }] = await Promise.all([carregarFrentes(), carregarEstado()]);
  const f = frentes.find((x) => x.id === id);
  if (!f) { location.hash = '#frentes'; return; }

  const doArsenal = config.itens.filter((i) => (i.frentes || []).includes(id));
  let refsTexto = '';
  try { refsTexto = (await api(`/api/arquivo?p=${encodeURIComponent(`_contexto/referencias/${id}.md`)}`)).texto; } catch { /* ainda sem refs */ }
  const refs = refsTexto.split(/\r?\n/).filter((l) => l.trim().startsWith('- '));

  let saidas = [];
  try {
    const todas = (await api('/api/saidas')).saidas;
    const chave = id.replace(/-/g, '');
    saidas = todas.filter((s) => (s.pasta + s.rel).toLowerCase().replace(/-/g, '').includes(chave)).slice(0, 8);
  } catch { /* sem saídas ainda */ }

  conteudo.innerHTML = `
    <a class="voltar" onclick="location.hash='#frentes'">← todas as frentes</a>
    <div class="secao-cabeca">
      <h1>${esc(f.nome)} <code style="font-size:14px; vertical-align:middle">${esc(f.comando)}</code></h1>
      ${f.quando ? `<p class="sub">chama quando: ${esc(f.quando.replace(/["`*]/g, ''))}</p>` : ''}
    </div>

    <div class="card">
      <div class="mini">o quê (antes do como)</div>
      <p class="soft" style="margin-top:6px">${esc(f.oque) || 'A lição completa tá em <code>_aprenda/' + esc(id) + '.md</code>.'}</p>
      <p class="muted" style="font-size:12px; margin-top:8px">lição completa: <code>_aprenda/${esc(id)}.md</code> — a Lei do DutyX: entender o quê antes do como.</p>
    </div>

    <div class="card">
      <div class="mini">arsenal dessa frente</div>
      ${doArsenal.length ? `<table>${doArsenal.map((i) => `
        <tr class="clicavel" onclick="location.hash='#arsenal/${i.id}'">
          <td style="width:46%"><strong>${esc(i.nome)}</strong><br><span class="muted" style="font-size:12px">${esc(i.destrava)}</span></td>
          <td>${pillDe(i, estado.itens[i.id])}</td>
        </tr>`).join('')}</table>` : '<p class="muted">Essa frente roda 100% no básico — não depende de nada do arsenal.</p>'}
    </div>

    <div class="card">
      <div class="mini">referências (o Claude lê antes de construir)</div>
      ${refs.length ? `<ul style="margin:8px 0 4px 20px; color:var(--soft); font-size:13.5px">${refs.map((r) => `<li>${md(r).replace(/<\/?div[^>]*>|<\/?ul>|<\/?li>/g, '')}</li>`).join('')}</ul>` : '<p class="muted">Nenhuma ainda. Cola um link de site/perfil/post que te inspira — vira contexto pro Claude.</p>'}
      <div class="linha-form">
        <input type="text" id="ref-url" placeholder="https://... (o link da referência)">
        <input type="text" id="ref-nota" placeholder='o que te pegou? ex: "gostei do hero e do scroll"'>
        <button class="btn" id="ref-add">+ guardar</button>
      </div>
    </div>

    <div class="card destaque">
      <div class="mini">briefing pronto — o passe pro Claude Code</div>
      <p class="muted" style="font-size:13px; margin:6px 0 10px">Escreve o que você quer, copia e cola no Claude Code. O comando já manda ele ler teu arsenal e tuas referências.</p>
      <textarea id="brief-input" rows="2" placeholder="ex: um site pro meu estúdio de pilates, tom acolhedor, quero agendamento pelo WhatsApp"></textarea>
      <div class="linha-form">
        <button class="btn primario" id="brief-copiar">copiar briefing → claude code</button>
      </div>
      <div class="bloco-cmd" id="brief-preview" style="margin-top:12px"></div>
    </div>

    ${saidas.length ? `
    <div class="card">
      <div class="mini">saídas dessa frente</div>
      <table>${saidas.map((s) => `
        <tr class="clicavel" onclick="window.open('/saida/${encodeURIComponent(s.rel)}','_blank')">
          <td><strong>${esc(s.nome)}</strong> <span class="muted" style="font-size:11px">${esc(s.pasta)}</span></td>
          <td class="muted" style="width:150px; font-size:12px">${dataAmigavel(s.mtime)}</td>
        </tr>`).join('')}</table>
    </div>` : ''}
  `;

  const montaBrief = () => {
    const pedido = $('#brief-input').value.trim() || '[escreve aqui o que você quer]';
    const temRefs = refs.length > 0;
    return `${f.comando} — briefing via painel (estou na pasta do DutyX): antes de começar, lê _contexto/arsenal.md (meu arsenal conectado)${temRefs ? ` e _contexto/referencias/${id}.md (minhas referências, com o que gostei em cada uma)` : ''}. Quero: ${pedido}`;
  };
  const atualizaPreview = () => { $('#brief-preview').textContent = montaBrief(); };
  atualizaPreview();
  $('#brief-input').addEventListener('input', atualizaPreview);
  $('#brief-copiar').addEventListener('click', () => copiar(montaBrief()));
  $('#ref-add').addEventListener('click', async () => {
    const url = $('#ref-url').value.trim(), nota = $('#ref-nota').value.trim();
    if (!url && !nota) return toast('Cola um link ou escreve uma nota primeiro');
    try {
      await api('/api/referencia', { frente: id, url, nota });
      toast('Guardei! O Claude vai ler isso quando construir.');
      renderFrente(id);
    } catch (e) { toast(e.message); }
  });
}

// ---------- seção: ARSENAL ----------

const NOME_TIPO = {
  'conector-claude': 'Conectores do app Claude (login, sem instalar nada)',
  'app-local': 'Programas no seu PC',
  'mcp': 'MCPs (plugues do Claude Code)',
  'lib': 'Bibliotecas',
  'api-key': 'Chaves de API (ficam no .env, só no seu PC)',
  'servico-web': 'Serviços por link (já funcionam)',
};

async function renderArsenal() {
  const { config, estado } = await carregarEstado(true);
  const grupos = {};
  for (const i of config.itens) (grupos[i.tipo] = grupos[i.tipo] || []).push(i);
  const conectados = config.itens.filter((i) => ['conectado', 'manual-ok'].includes(estado.itens[i.id])).length;

  conteudo.innerHTML = `
    <div class="secao-cabeca">
      <div class="ghost">03</div>
      <h1><span class="n">seção 03 · ${conectados}/${config.itens.length} conectados</span>Arsenal</h1>
      <p class="sub">O DutyX funciona sem nada disso — o arsenal é o modo turbo, e é quase todo grátis. Clica num item pra conectar.</p>
      <div class="linha-form"><button class="btn mini" id="resondar">checar de novo</button></div>
    </div>
    ${Object.entries(grupos).map(([tipo, itens]) => `
      <div class="card">
        <div class="mini">${esc(NOME_TIPO[tipo] || tipo)}</div>
        <table>${itens.map((i) => `
          <tr class="clicavel" onclick="location.hash='#arsenal/${i.id}'">
            <td style="width:34%"><strong>${esc(i.nome)}</strong></td>
            <td class="muted" style="font-size:12.5px">${esc(i.destrava)}</td>
            <td style="width:150px; text-align:right">${pillDe(i, estado.itens[i.id])}</td>
          </tr>`).join('')}</table>
      </div>`).join('')}
  `;
  $('#resondar').addEventListener('click', async () => {
    toast('Sondando o que tá conectado…');
    const d = await api('/api/sondar', {});
    cache.estado = d.estado;
    renderArsenal();
  });
}

async function renderArsenalItem(id) {
  const { config, estado, envChaves } = await carregarEstado(true);
  const item = config.itens.find((i) => i.id === id);
  if (!item) { location.hash = '#arsenal'; return; }
  const st = estado.itens[id];
  const conectado = ['conectado', 'manual-ok'].includes(st);

  let setupHtml = '';
  try { setupHtml = md((await api(`/api/arquivo?p=${encodeURIComponent(item.comoConectar)}`)).texto); }
  catch { setupHtml = '<p class="muted">Guia não encontrado.</p>'; }

  let acao = '';
  if (item.acaoPainel === 'salvar-env') {
    const chave = item.deteccao.env;
    const jaTem = envChaves[chave];
    acao = `
      <div class="mini">conectar por aqui</div>
      ${jaTem ? `<p class="soft" style="font-size:13px; margin:6px 0">Chave salva: <code>${esc(chave)}=${esc(jaTem)}</code></p>` : ''}
      <div class="linha-form">
        <input type="password" id="env-valor" placeholder="cola a chave aqui (fica no .env, só no seu PC)">
        <button class="btn primario" id="env-salvar">salvar no .env</button>
      </div>
      <p class="muted" style="font-size:11.5px; margin-top:8px">o .env nunca é versionado nem sai da sua máquina. A chave aparece mascarada aqui.</p>`;
  } else if (item.acaoPainel === 'toggle-manual') {
    acao = `
      <div class="mini">marcação manual</div>
      <p class="muted" style="font-size:13px; margin:6px 0">Conector do app Claude — o painel não consegue "enxergar" ele. Ligou lá? Marca aqui.</p>
      <button class="btn ${conectado ? '' : 'primario'}" id="toggle-btn">${conectado ? 'desmarcar (desliguei)' : 'marquei — tá conectado no app'}</button>`;
  } else {
    acao = `
      <div class="mini">como conectar</div>
      <p class="soft" style="font-size:13.5px; margin:6px 0; white-space:pre-line">${esc(item.instrucao || 'Segue o guia abaixo.')}</p>
      ${/claude mcp add|npm install|winget|node scripts/.test(item.instrucao || '') ? `<button class="btn" id="instrucao-copiar">copiar comando</button>` : ''}`;
  }

  conteudo.innerHTML = `
    <a class="voltar" onclick="location.hash='#arsenal'">← todo o arsenal</a>
    <div class="secao-cabeca">
      <h1>${esc(item.nome)} ${pillDe(item, st)}</h1>
      <p class="sub">${esc(item.destrava)} · frentes: ${(item.frentes || []).map((f) => `<code>/${esc(f)}</code>`).join(' ')}</p>
    </div>
    <div class="card" style="border-color:var(--orange-bd)">${acao}</div>
    <div class="card">${setupHtml}</div>
  `;

  $('#env-salvar')?.addEventListener('click', async () => {
    const valor = $('#env-valor').value.trim();
    if (!valor) return toast('Cola a chave primeiro');
    try {
      const d = await api('/api/env', { chave: item.deteccao.env, valor });
      cache.estado = d.estado;
      toast('Chave salva no .env');
      renderArsenalItem(id);
    } catch (e) { toast(e.message); }
  });
  $('#toggle-btn')?.addEventListener('click', async () => {
    try {
      const d = await api('/api/toggle', { id, status: conectado ? 'faltando' : 'manual-ok' });
      cache.estado = d.estado;
      toast(conectado ? 'Desmarcado.' : 'Marcado como conectado');
      renderArsenalItem(id);
    } catch (e) { toast(e.message); }
  });
  $('#instrucao-copiar')?.addEventListener('click', () => {
    const m = (item.instrucao || '').match(/(claude mcp add [^—]+|npm install [a-z0-9 @/.-]+|winget install [A-Za-z.]+|node scripts\/[^\s]+ ?-?-?\w*)/);
    copiar(m ? m[1].trim() : item.instrucao, 'Comando copiado! Cola no terminal.');
  });
}

// ---------- seção: SAÍDAS ----------

const ICONE_EXT = { '.md': 'MD', '.txt': 'TXT', '.pdf': 'PDF', '.json': 'JSON', '.csv': 'CSV', '.mp4': 'MP4', '.mp3': 'MP3' };

async function renderSaidas() {
  const { saidas } = await api('/api/saidas');
  conteudo.innerHTML = `
    <div class="secao-cabeca">
      <div class="ghost">04</div>
      <h1><span class="n">seção 04 · o que você já criou</span>Saídas</h1>
      <p class="sub">Tudo que o Claude Code gera cai em <code>saidas/</code> — e aparece aqui ao vivo. Clica pra abrir.</p>
    </div>
    ${saidas.length ? `<div class="galeria">
      ${saidas.map((s) => {
        const href = `/saida/${encodeURIComponent(s.rel)}`;
        let visor;
        if (['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(s.ext)) visor = `<img src="${href}" loading="lazy" alt="">`;
        else if (s.ext === '.html') visor = `<iframe src="${href}" loading="lazy" tabindex="-1"></iframe>`;
        else visor = `<span class="icone">${ICONE_EXT[s.ext] || esc(s.ext.replace('.', '').toUpperCase() || 'FILE')}</span>`;
        return `
        <div class="thumb" onclick="window.open('${href}','_blank')">
          <div class="visor">${visor}</div>
          <div class="info">
            <div class="nome" title="${esc(s.rel)}">${esc(s.nome)}</div>
            <div class="meta">${esc(s.pasta)} · ${dataAmigavel(s.mtime)}</div>
          </div>
        </div>`;
      }).join('')}
    </div>` : `
    <div class="card">
      <h3>Ainda não tem nada em <code>saidas/</code></h3>
      <p class="soft">Normal — você ainda não construiu com o Claude Code. Escolhe uma frente, copia o briefing e manda ver. Quando ele gerar, aparece aqui sozinho (sem recarregar).</p>
      <div class="linha-form"><button class="btn primario" onclick="location.hash='#frentes'">escolher uma frente →</button></div>
    </div>`}
  `;
}

// ---------- seção: MEMÓRIA ----------

const ARQUIVOS_MEMORIA = [
  { arq: 'negocio.md', nome: 'Negócio', desc: 'quem é você, o que vende, pra quem' },
  { arq: 'marca.md', nome: 'Marca', desc: 'seu tom de voz e visual (cores, fontes, referências)' },
  { arq: 'estrategia.md', nome: 'Estratégia', desc: 'foco atual, gargalo, prioridades' },
  { arq: 'historico.md', nome: 'Histórico', desc: 'diário de bordo — o /fechar escreve aqui' },
  { arq: 'arsenal.md', nome: 'Arsenal (gerado)', desc: 'gerado pelo painel — não edita na mão', soLeitura: true },
];

async function renderMemoria(arq) {
  if (arq) return renderMemoriaArquivo(arq);
  conteudo.innerHTML = `
    <div class="secao-cabeca">
      <div class="ghost">05</div>
      <h1><span class="n">seção 05 · o que o sistema sabe de você</span>Memória</h1>
      <p class="sub">O <code>_contexto/</code> é o que faz o sistema LEMBRAR de você. O Claude lê isso em toda sessão. Edita com cuidado — todo salvamento faz backup automático.</p>
    </div>
    <div class="grade">
      ${ARQUIVOS_MEMORIA.map((m) => `
        <div class="card" onclick="location.hash='#memoria/${m.arq}'">
          <div class="mini">_contexto/${esc(m.arq)}</div>
          <h3>${esc(m.nome)}</h3>
          <p class="muted" style="font-size:13px">${esc(m.desc)}</p>
        </div>`).join('')}
    </div>`;
}

async function renderMemoriaArquivo(arq) {
  const info = ARQUIVOS_MEMORIA.find((m) => m.arq === arq) || { nome: arq, soLeitura: false };
  let texto = '';
  try { texto = (await api(`/api/arquivo?p=${encodeURIComponent(`_contexto/${arq}`)}`)).texto; }
  catch (e) { texto = ''; }

  conteudo.innerHTML = `
    <a class="voltar" onclick="location.hash='#memoria'">← memória</a>
    <div class="secao-cabeca">
      <h1>${esc(info.nome)} <code style="font-size:13px; vertical-align:middle">_contexto/${esc(arq)}</code></h1>
    </div>
    <div class="card">${md(texto) || '<p class="muted">vazio</p>'}</div>
    ${info.soLeitura ? '' : `
    <div class="card">
      <div class="mini">editar (backup automático antes de salvar)</div>
      <textarea id="mem-editor" rows="16" style="margin-top:8px">${esc(texto)}</textarea>
      <div class="linha-form">
        <button class="btn primario" id="mem-salvar">salvar (com backup)</button>
        <button class="btn" onclick="renderMemoriaArquivo('${esc(arq)}')">descartar mudanças</button>
      </div>
    </div>`}
  `;
  $('#mem-salvar')?.addEventListener('click', async () => {
    try {
      const d = await api('/api/memoria', { arquivo: arq, conteudo: $('#mem-editor').value });
      toast(d.aviso || 'Salvo');
      renderMemoriaArquivo(arq);
    } catch (e) { toast(e.message); }
  });
}
window.renderMemoriaArquivo = renderMemoriaArquivo;

// ---------- seção: GUIA ----------

function renderGuia() {
  conteudo.innerHTML = `
    <div class="secao-cabeca">
      <div class="ghost">06</div>
      <h1><span class="n">seção 06 · o manual do sistema</span>Guia</h1>
      <p class="sub">O manual visual do DutyX — o mesmo <code>GUIA.html</code> da pasta. <a href="/guia" target="_blank">abrir em tela cheia ↗</a></p>
    </div>
    <iframe class="quadro-guia" src="/guia"></iframe>`;
}

// ---------- router ----------

const ROTAS = {
  hoje: renderHoje,
  frentes: renderFrentes,
  arsenal: renderArsenal,
  saidas: renderSaidas,
  memoria: renderMemoria,
  guia: renderGuia,
};

let rotaAtual = '';
async function rotear() {
  const hash = (location.hash || '#hoje').slice(1);
  const [base, sub] = hash.split('/');
  rotaAtual = base;
  document.querySelectorAll('.nav a').forEach((a) => a.classList.toggle('ativo', a.dataset.rota === base));
  conteudo.innerHTML = '<p class="muted" style="padding:40px 0">carregando…</p>';
  try {
    if (base === 'frentes' && sub) await renderFrente(sub);
    else if (base === 'arsenal' && sub) await renderArsenalItem(sub);
    else if (base === 'memoria' && sub) await renderMemoriaArquivo(decodeURIComponent(sub));
    else await (ROTAS[base] || renderHoje)();
  } catch (e) {
    conteudo.innerHTML = `<div class="card"><h3>Opa, algo deu errado</h3><p class="soft">${esc(e.message)}</p><p class="muted" style="font-size:12.5px">Se persistir: fecha essa janela, volta no terminal e roda <code>npm run painel</code> de novo.</p></div>`;
  }
}
window.addEventListener('hashchange', rotear);

// clique em qualquer botão com data-copiar
document.addEventListener('click', (ev) => {
  const alvo = ev.target.closest('[data-copiar]');
  if (alvo) copiar(alvo.dataset.copiar);
});

// ---------- SSE: o painel se atualiza quando o Claude gera algo ----------

function ligarEventos() {
  try {
    const es = new EventSource('/eventos');
    es.onmessage = (ev) => {
      try {
        const d = JSON.parse(ev.data);
        if (d.tipo !== 'mudanca') return;
        cache.frentes = null;
        if (['saidas', 'hoje', 'memoria', 'frentes'].includes(rotaAtual)) rotear();
        if (d.origem === 'saidas') toast('saída nova do Claude Code — galeria atualizada');
      } catch { /* evento estranho, ignora */ }
    };
    es.onerror = () => { es.close(); setTimeout(ligarEventos, 4000); };
  } catch { /* sem SSE o painel segue funcionando no F5 */ }
}

rotear();
ligarEventos();
