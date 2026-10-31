// Génère un vrai fichier HTML par page + sitemap.xml, après `vite build`.
// Lancé automatiquement par `npm run build`.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');

const { render, getAllPages, SITE_URL } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Page noindex : robots = noindex et pas de canonical (une page non indexable ne déclare pas d'URL canonique).
const noindex = (html) =>
  html
    .replace(/(<meta name="robots" content=")[^"]*(")/, '$1noindex, nofollow$2')
    .replace(/\s*<link rel="canonical"[^>]*>/, '');

function fillHead(html, page) {
  const url = SITE_URL + page.path;
  html = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(page.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(page.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(page.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  if (page.jsonLd) {
    // Données structurées (JSON-LD) dans le <head>. « < » échappé pour ne jamais fermer la balise <script>.
    const json = JSON.stringify(page.jsonLd).replace(/</g, '\\u003c');
    html = html.replace('</head>', `    <script type="application/ld+json">${json}</script>\n</head>`);
  }
  if (page.noindex) html = noindex(html);
  return html;
}

const write = (file, html) => {
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
};

const pages = getAllPages();
for (const page of pages) {
  const appHtml = await render(page.path);
  const html = fillHead(template, page).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  // "/" → index.html ; "/blog/mon-article" → blog/mon-article.html (servi en /blog/mon-article grâce à cleanUrls)
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
  write(file, html);
  console.log(`  pré-rendu  ${page.path}  →  dist/${file}`);
}

// 404.html : route « * » (NotFound) pré-rendue. Vercel la sert avec le code HTTP 404 pour toute URL inconnue.
const notFoundHtml = await render('/__404');
write(
  '404.html',
  noindex(template)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>Page introuvable — Wi'Tech</title>`)
    .replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`),
);
console.log('  pré-rendu  404  →  dist/404.html');

// spa.html : coquille vide (sans contenu pré-rendu) pour /admin. noindex, sans canonical.
write('spa.html', noindex(template));
console.log('  coquille   dist/spa.html');

// sitemap.xml : toutes les pages indexables. <lastmod> seulement si la page a une vraie date (articles, services).
const urls = pages
  .filter((p) => !p.noindex)
  .map((p) => {
    const lastmod = p.lastmod ? `\n    <lastmod>${p.lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${SITE_URL}${p.path}</loc>${lastmod}\n  </url>`;
  })
  .join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`  sitemap.xml : ${pages.filter((p) => !p.noindex).length} URL`);
