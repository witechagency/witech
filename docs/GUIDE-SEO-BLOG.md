# Wi'Tech — Mise en place du SEO et du blog

Guide à suivre dans Antigravity (ou à donner tel quel à son agent).
Tout a été testé le 31/10/2026 sur la version GitHub `63efce2` (« Version du 30/10 ») :
- compilation OK ;
- 6 pages pré-rendues + sitemap ;
- aucune erreur d'hydratation dans le navigateur ;
- navigation interne OK.

---

## 1. Ce que ça change

| Avant | Après |
|---|---|
| Google reçoit une page vide (`<div id="root"></div>`) | Chaque page est livrée en HTML complet, lisible par Google, Bing, les IA et LinkedIn |
| Même titre, description et canonical sur toutes les pages | Chaque page a ses propres balises |
| `sitemap.xml` annoncé mais absent | Sitemap généré automatiquement à chaque déploiement |
| Pas de blog | `/blog` + un article par fichier Markdown dans `content/blog/` |
| URL inconnue = page d'accueil | Vraie page « Page introuvable », non indexée |
| `/portfolio` = doublon de `/realisations` | Redirection 301 vers `/realisations` |
| `/admin` indexable | `/admin` exclu de Google (robots.txt + en-tête `noindex`) |

Le site reste une application React : rien ne change pour les visiteurs, à part le lien « Blog » ajouté au menu.

---

## 2. Option rapide : appliquer le patch

Le fichier `witech-seo-blog.patch` contient toutes les modifications.

```bash
cd "C:\09Data\Wi'Tech"
git switch -c seo-blog          # travailler dans une branche à part
git apply --check --ignore-whitespace witech-seo-blog.patch   # vérifie que le patch s'applique (aucun message = OK)
git apply --ignore-whitespace witech-seo-blog.patch
npm install                     # installe marked et yaml
npm run build                   # doit afficher « pré-rendu … » pour 6 pages et « sitemap.xml : 6 URL »
npm run preview                 # vérifier le site en local
```

`--ignore-whitespace` est nécessaire sous Windows : tes fichiers sont en fins de ligne CRLF, le patch en LF. Testé sur ton dossier le 31/10 : il s'applique sans erreur.

Si `git apply --check` affiche quand même une erreur, c'est que tes fichiers locaux ont changé depuis la version du 30/10. Passe alors à l'option détaillée (section 3), ou reviens vers moi avec le message d'erreur.

> `npm run preview` ne gère pas les URL « propres » comme Vercel. Teste `/realisations.html` en local. Sur Vercel, ce sera bien `/realisations`.

---

## 3. Option détaillée : les modifications une par une

### 3.1 Dépendances
```bash
npm install marked yaml
```

### 3.2 `src/App.tsx` : séparer les routes du routeur
- Extraire le contenu de `<Router>` dans un composant exporté `AppRoutes()` (le `<Suspense>` et les `<Routes>`).
- `App()` devient `<Router><AppRoutes /></Router>`.
- Ajouter les routes :
  - `/blog` → `BlogIndex` (lazy) ;
  - `/blog/:slug` → `BlogPost` (lazy) ;
  - `*` → `NotFound`.
- Supprimer la route `/portfolio` (remplacée par une redirection Vercel).

**Pourquoi :** le pré-rendu utilise les mêmes routes avec un `StaticRouter`.

### 3.3 `src/main.tsx` : hydratation
- Si `#root` contient déjà du HTML (page pré-rendue), utiliser `hydrateRoot`.
- Sinon (dev, `/admin`, URL inconnue), utiliser `createRoot` comme avant.

### 3.4 `src/entry-server.tsx` (nouveau)
- Exporte `render(url)` : rend `<StaticRouter location={url}><AppRoutes /></StaticRouter>` avec `prerender` de `react-dom/static`. Cette fonction attend le chargement des pages lazy.
- Exporte `getAllPages()` : les pages fixes plus un article par fichier du blog.
- Exporte `SITE_URL`.

### 3.5 `src/lib/seo.ts` (nouveau)
- `STATIC_PAGES` : une ligne par page (path, title, description). **C'est ici qu'on modifie les titres et descriptions des pages.**
- `staticSeo(path)` : renvoie les balises d'une page fixe.
- Hook `useSeo(seo)` : met à jour le titre et les balises lors de la navigation interne. On l'appelle en première ligne de `Home`, `Realisations`, `MentionsLegales`, `CGV`, `Confidentialite`, `BlogIndex` et `BlogPost`.

### 3.6 `src/lib/blog.ts` (nouveau)
- Charge tous les `content/blog/*.md` avec `import.meta.glob(..., { query: '?raw', import: 'default', eager: true })`.
- Lit l'en-tête YAML avec `yaml` et convertit le Markdown en HTML avec `marked`.
- Ignore les articles `draft: true` et trie du plus récent au plus ancien.
- Exporte `getAllPosts()`, `getPost(slug)` et `postSeo(post)`.

### 3.7 Pages (nouvelles)
- `src/pages/blog/BlogIndex.tsx` : liste des articles. Header, Footer et ContactButton comme sur `/realisations`.
- `src/pages/blog/BlogPost.tsx` :
  - affiche l'article, avec un encadré « Demander mon audit gratuit » à la fin ;
  - inclut les données structurées `BlogPosting` (JSON-LD) ;
  - affiche `NotFound` si le slug n'existe pas.
- `src/pages/NotFound.tsx` : page « Page introuvable ».

### 3.8 `src/index.css`
- Ajouter la classe `.prose-witech` (mise en forme des titres, paragraphes, listes, liens, tableaux et citations des articles).

### 3.9 `src/lib/constant.ts`
- Ajouter `{ name: "Blog", href: "/blog" }` dans `navLinks`, après « Réalisations ».

### 3.10 `vite.config.ts`
- Passer à `defineConfig(({ isSsrBuild }) => ({ ... }))`.
- Ne garder `manualChunks` que pour la compilation navigateur : `build: isSsrBuild ? {} : { ...config actuelle }`. Sinon la compilation serveur échoue.

### 3.11 `scripts/prerender.mjs` (nouveau)
Après la compilation, le script :
1. Importe `dist-server/entry-server.js`.
2. Pour chaque page, appelle `render(path)`, injecte le HTML dans `<div id="root">` et remplace le titre, la description, le canonical, `og:title`, `og:description` et `og:url` dans le `<head>`.
3. Écrit `dist/index.html` pour `/` et `dist/<chemin>.html` pour les autres pages (ex. `dist/blog/mon-article.html`).
4. Écrit `dist/spa.html` : la coquille vide d'origine, en `noindex`, pour `/admin` et les URL inconnues.
5. Écrit `dist/sitemap.xml`.

### 3.12 `package.json`
```json
"build": "tsc -b && vite build && vite build --ssr src/entry-server.tsx --outDir dist-server && node scripts/prerender.mjs"
```

### 3.13 `.gitignore`
- Ajouter `dist-server`.

### 3.14 `vercel.json`
```json
{
  "cleanUrls": true,
  "redirects": [
    { "source": "/portfolio", "destination": "/realisations", "permanent": true }
  ],
  "headers": [
    { "source": "/admin", "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }] }
  ],
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/spa.html" }
  ]
}
```
- `cleanUrls` sert `dist/realisations.html` à l'adresse `/realisations`.
- Les fichiers existants passent avant la réécriture : seules les URL non pré-rendues reçoivent `spa.html`.

### 3.15 `public/robots.txt`
```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://www.witechagency.com/sitemap.xml
```

---

## 4. Points d'attention

- **Variables Supabase obligatoires à la compilation.** `src/lib/supabase.ts` lève une erreur si `VITE_SUPABASE_URL` ou `VITE_SUPABASE_ANON_KEY` manquent. Le pré-rendu importe ce fichier : la compilation échoue sans elles. Vérifie qu'elles sont bien dans les variables d'environnement Vercel (Production et Preview).
- **Nouvelle clé Resend** : `RESEND_API_KEY` dans Vercel uniquement, jamais dans un fichier du dépôt.
- **Code qui touche à `window` ou `document`** : il doit rester dans un `useEffect` ou un gestionnaire d'événement, comme c'est déjà le cas partout. Sinon le pré-rendu plante.
- **Avertissement « hydration mismatch »** dans la console : un composant affiche quelque chose de différent côté serveur et côté navigateur (date du jour, nombre aléatoire…). Le site fonctionne quand même, mais signale-le-moi.
- **Lint** : 3 erreurs existaient déjà avant ces changements (`no-explicit-any` dans Portfolio, Technologies et ProspectsAdmin). Elles ne bloquent pas la compilation.

---

## 5. Après la mise en ligne

1. **Vérifier sur le site en ligne** :
   - `https://www.witechagency.com/realisations` → clic droit → « Afficher le code source » : le texte de la page doit apparaître dans le HTML.
   - `https://www.witechagency.com/sitemap.xml` doit afficher du XML, pas la page d'accueil.
   - `https://www.witechagency.com/portfolio` doit rediriger vers `/realisations`.
2. **Google Search Console** :
   - « Sitemaps » → ajouter `sitemap.xml` → Envoyer.
   - « Inspection de l'URL » → coller l'URL de la page d'accueil → « Demander une indexation ». Refaire l'opération pour `/realisations` et `/blog`.
3. **Aperçu LinkedIn** : coller l'URL dans le [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/) pour rafraîchir l'aperçu.

---

## 6. Publier un article

Créer un fichier `content/blog/<slug>.md`. Le slug devient l'URL : `/blog/<slug>`. Utiliser des minuscules, des tirets, sans accents.

```markdown
---
title: "Titre de l'article (55-65 caractères, mot-clé au début)"
description: "Résumé qui donne envie de cliquer (140-160 caractères)."
date: 2026-11-05
keyword: automatisation PME
segment: D
draft: false
---

Introduction : le problème du lecteur en 2-3 phrases.

## Premier intertitre

Texte… **gras**, [lien vers une autre page](/realisations), listes, tableaux.
```

- `draft: true` : l'article n'est ni publié ni dans le sitemap.
- `updated: 2026-12-01` (facultatif) : date de mise à jour, reprise dans le sitemap.
- Un article d'exemple est fourni : `content/blog/automatiser-taches-repetitives-pme.md`, en `draft: true`. Il sert de modèle. Le supprimer ou le remplacer par un vrai article avant de le passer en `draft: false`.
- Chaque `git push witech master:main` redéploie le site : l'article est en ligne et ajouté au sitemap automatiquement.
