# Plan Antigravity — SEO + e-mails Zoho

Plan de travail pour le site Wi'Tech (dépôt `witechagency/witech`), version du 31/10/2026.
À lire avec `docs/GUIDE-SEO-BLOG.md` et `witech-seo-blog.patch`.

---

## 0. Règles du chantier

- Travailler dans une branche `seo-blog`, créée à partir de `master` (local), qui correspond à `witech/main`.
- **Un commit par section** (1, 2, 3…), pour que chaque changement soit relisible et annulable.
- Ne rien mettre de secret dans le dépôt : pas de `.env`, pas de clé API.
- Ne pas migrer vers Next.js ou Astro : on garde Vite + React + pré-rendu.
- Ne pas corriger les 3 erreurs de lint existantes (Portfolio, Technologies, ProspectsAdmin), hors périmètre.
- À la fin de chaque section : `npm run build` doit passer.

### Informations de référence

| Élément | Valeur |
|---|---|
| Nom | Wi'Tech Agency |
| Site | https://www.witechagency.com |
| E-mail public | contact@witechagency.com |
| Alias | jakwe@witechagency.com (Jérémie AKWE), btsangue@witechagency.com (Bistrel Tsangue) |
| Adresse publique | Nantes 44000, France (pas de rue) |
| Zone servie | France entière |
| Page LinkedIn | https://www.linkedin.com/company/witechagency |
| Logo actuel | `public/witech-logo.svg` (W blanc sur fond rouge `#B91C1C`) et sa version PNG `public/email-logo.png` (192×192) |
| Ancien logo, à ne plus utiliser | `public/logo.png`, `public/Witech.png` (logo violet) |
| Branche de production Vercel | `main` (push : `git push witech master:main`) |

---

## 1. Base technique : appliquer le patch

Si ce n'est pas déjà fait :

```bash
git switch -c seo-blog
git apply --ignore-whitespace witech-seo-blog.patch
npm install
npm run build
```

Attendu : « pré-rendu » affiché pour 6 pages, puis « sitemap.xml : 6 URL ». Le détail de chaque modification est dans `docs/GUIDE-SEO-BLOG.md`, section 3.

**Commit** : `SEO : pré-rendu, balises par page, sitemap, blog Markdown`

---

## 2. Corrections de la revue (points 1 à 7)

### 2.1 Vraie erreur 404 (point 1)
- `vercel.json` : supprimer la réécriture générale `/((?!api/).*)` → `/spa.html`.
- Garder une seule réécriture : `/admin` → `/spa.html`.
- `scripts/prerender.mjs` : pré-rendre la route `NotFound` (par exemple `render('/__404')`, qui tombe sur la route `*`) et l'écrire dans `dist/404.html`, avec `noindex` et sans canonical. Vercel sert `404.html` avec le code HTTP 404.
- Vérifier que `/blog/slug-inexistant` (non pré-rendu) renvoie bien 404.

### 2.2 `spa.html` cohérent (point 2)
- Dans `spa.html` et `404.html`, **supprimer** la balise `<link rel="canonical">` : une page `noindex` ne doit pas déclarer de canonical.

### 2.3 Image de partage (point 3)
- Créer `public/og-image.png` en 1200×630 :
  - fond rouge `#B91C1C` (ou blanc avec le logo rouge) ;
  - logo **construit à partir de `witech-logo.svg`** (surtout pas `logo.png`) ;
  - accroche : « Sites web, CRM, Microsoft 365 & automatisation pour PME » ;
  - le logo et le texte doivent tenir dans les ~60 % centraux, car LinkedIn rogne les bords.
- `index.html` : `og:image` = `https://www.witechagency.com/og-image.png` (URL absolue).
- Ajouter :
  - `og:image:width` = 1200 ;
  - `og:image:height` = 630 ;
  - `og:site_name` = Wi'Tech Agency ;
  - `og:locale` = fr_FR ;
  - `twitter:card` = summary_large_image.

### 2.4 `lastmod` du sitemap (point 4)
- Pages fixes : **ne pas mettre** de `<lastmod>`.
- Articles et pages de service : `<lastmod>` = `updated` sinon `date` de l'en-tête.

### 2.5 Hero visible dès le premier affichage (point 5)
- Le `h1` et le sous-titre du Hero s'affichent sans `opacity: 0` ni flou au départ.
- Par exemple `initial={false}`, ou une animation qui ne touche que `y` / `scale`.
- Les autres animations framer-motion du site ne changent pas.

### 2.6 Barre oblique finale (point 6)
- `vercel.json` : ajouter `"trailingSlash": false`.

### 2.7 Données structurées de l'accueil (point 7)
JSON-LD `ProfessionalService`, injecté dans le HTML pré-rendu de `/` :

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Wi'Tech Agency",
  "url": "https://www.witechagency.com",
  "logo": "https://www.witechagency.com/email-logo.png",
  "image": "https://www.witechagency.com/og-image.png",
  "email": "contact@witechagency.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Nantes", "postalCode": "44000", "addressCountry": "FR" },
  "areaServed": { "@type": "Country", "name": "France" },
  "sameAs": ["https://www.linkedin.com/company/witechagency"],
  "description": "Sites web, CRM, sécurité Microsoft 365 / Azure et automatisation des processus (n8n) pour PME et indépendants."
}
```

Le logo doit être en PNG : Google n'accepte pas le SVG pour ce champ.

**Commit** : `SEO : corrections de la revue (404, og-image, sitemap, Hero, JSON-LD)`

---

## 3. Nettoyage de l'ancien logo

- Chercher toutes les utilisations de `logo.png` et `Witech.png` (pages, composants, e-mails, `index.html`).
- Les remplacer par `witech-logo.svg` dans le site, et par `email-logo.png` dans les e-mails et le JSON-LD.
- Ne pas supprimer les anciens fichiers tant que tout n'a pas été vérifié en ligne.

**Commit** : `Remplace l'ancien logo violet par le logo actuel`

---

## 4. Structure des pages de service et de la page Nantes (sans contenu)

Le contenu sera fourni à part. On prépare seulement la mécanique, sur le modèle du blog.

### 4.1 Fichiers de contenu
- Créer `content/services/*.md`. Le slug du fichier devient l'URL `/services/<slug>`.
- Créer `content/pages/agence-web-nantes.md`, servi à l'URL `/agence-web-nantes` (hors de `/services/`).
- En-tête :

```markdown
---
title: "…"          # balise <title>, 55-65 caractères
description: "…"    # meta description, 140-160 caractères
h1: "…"             # titre visible de la page
keyword: "…"
segment: D          # A | B | C | D, sert au maillage avec le blog
order: 1            # ordre dans le menu
updated: 2026-11-05
draft: true
---
```

- Créer 4 fichiers d'exemple, tous en `draft: true`, avec un corps vide de type « Contenu à venir ». Slugs provisoires (ils pourront changer avec le contenu) :

| Fichier | Segment |
|---|---|
| `creation-site-internet.md` | A |
| `integration-crm.md` | B |
| `securite-microsoft-365.md` | C |
| `automatisation-processus.md` | D |

### 4.2 Code
- Un chargeur `src/lib/services.ts`, sur le modèle de `src/lib/blog.ts`. Les fichiers `draft: true` sont exclus du rendu, du pré-rendu et du sitemap.
- Une page `ServicePage.tsx` qui affiche :
  - le H1 et le contenu Markdown, avec la classe `prose-witech` ;
  - un encadré « Audit gratuit » ;
  - la liste des articles du blog du **même segment**, s'il y en a.
- Une route `/services/:slug` et une route `/agence-web-nantes`, toutes deux en lazy, ajoutées dans `getAllPages()` pour le pré-rendu et le sitemap.
- Maillage dans l'autre sens : `BlogPost.tsx` affiche « Découvrir notre offre : <nom du service> » vers la page de service du même segment, si elle est publiée.
- Menu : un lien « Services » (vers le premier service publié, ou un sous-menu) **uniquement si au moins une page de service est publiée**. Rien ne s'affiche tant que tout est en brouillon.
- JSON-LD `Service` sur chaque page de service : `name` = h1, `provider` = Wi'Tech Agency, `areaServed` = France. Pour la page Nantes : `areaServed` = Nantes.

**Commit** : `Structure des pages de service et de la page Nantes (brouillons)`

---

## 5. E-mails : formulaire de contact et Zoho

Contexte : la messagerie Zoho Mail est en place. Les demandes du site doivent arriver dans `contact@witechagency.com`. Fichier concerné : `api/send-email.ts`.

### 5.1 Notification interne
- `to: ['contact@witechagency.com']`, au lieu de `witechagency@gmail.com`.
- Ajouter `replyTo: email`, l'adresse du prospect : un clic sur « Répondre » dans Zoho lui écrit directement.
- Sujet : `` `Nouvelle demande — ${pack} — ${entreprise || nom}` ``.

### 5.2 Sécurité et anti-abus (prioritaire)
- **Échapper le HTML** (`& < > " '`) de toutes les valeurs du formulaire avant de les insérer dans les e-mails.
- **Valider** :
  - l'e-mail, avec une regex simple ;
  - la longueur des champs, 100 caractères maximum ;
  - `pack`, accepté seulement s'il fait partie de la liste : `Site Premium`, `Accompagnement Sur-mesure`, `SEO & Visibilité`, `Sécurité Azure & Support`. Une valeur vide ou inconnue devient « Contact général ».
- Réponse 400 si l'e-mail est invalide.
- **Anti-robots** dans `ContactForm.tsx` :
  - un champ caché « honeypot », invisible pour un humain. S'il est rempli, l'API répond 200 sans rien envoyer ;
  - l'horodatage d'ouverture du formulaire est envoyé avec la demande. Si le formulaire est soumis en moins de 3 secondes, répondre 200 sans rien envoyer.
- **Accusé de réception au prospect** : ne plus y reprendre le texte libre du formulaire. Garder « Bonjour » et le pack *validé* uniquement. Sinon, n'importe qui peut faire envoyer depuis notre domaine un message de son choix à n'importe quelle adresse, ce qui abîmerait la réputation du domaine.
- Optionnel : une règle de limitation de débit dans le pare-feu Vercel sur `/api/send-email`, par exemple 5 requêtes par 10 minutes et par IP.

### 5.3 Accusé de réception plus soigné
- Expéditeur : `Wi'Tech <contact@witechagency.com>`, sans changement.
- Ajouter le logo (`https://www.witechagency.com/email-logo.png`, 56 px) et un lien vers `/realisations`.
- Phrase : « Nous revenons vers vous sous 24 h ouvrées. »
- Ajouter une version texte (`text:`) en plus du HTML : c'est meilleur pour éviter les spams.

### 5.4 Pages légales
- `MentionsLegales.tsx`, lignes 19 et 66 : remplacer `witechagency@gmail.com` par `contact@witechagency.com`, lien `mailto:` compris.
- `Confidentialite.tsx`, lignes 100-101 : même remplacement.
- **Adresse dans les mentions légales** (ligne 28, actuellement commentée) : NE PAS inventer d'adresse. Laisser le commentaire et signaler à Jérémie que c'est à compléter (obligation légale pour une entreprise).

**Commit** : `E-mails : notifications vers contact@, sécurisation du formulaire, pages légales`

---

## 6. Vérifications avant de pousser

- [ ] `npm run build` OK.
- [ ] Dans `dist/` :
  - [ ] `index.html` contient le texte du Hero et le JSON-LD ;
  - [ ] `404.html` existe ;
  - [ ] `sitemap.xml` sans `lastmod` sur les pages fixes ;
  - [ ] aucune page de service ni la page Nantes dans le sitemap (brouillons).
- [ ] `npm run preview` : aucune erreur d'hydratation dans la console, navigation interne OK.
- [ ] Recherche dans tout le code : plus aucune trace de `witechagency@gmail.com`, `logo.png` ou `Witech.png`, sauf dans `ProspectsAdmin` si c'est volontaire.

## 7. Déploiement

1. Vercel → Settings → Environment Variables, en **Production et Preview** :
   - `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` : sans elles, la compilation échoue ;
   - `RESEND_API_KEY` = **la nouvelle clé** du compte Resend witechagency.
2. Pousser la branche `seo-blog` sur GitHub et tester la **prévisualisation Vercel** :
   - formulaire de contact : la notification arrive dans Zoho (`contact@`), « Répondre » répond bien au prospect, l'accusé de réception arrive chez le prospect ;
   - `/realisations` → « Afficher le code source » : le texte y est ;
   - `/sitemap.xml`, `/portfolio` (redirection), `/page-inexistante` (404).
3. Fusionner dans `main` : `git push witech master:main`, après fusion locale.

## 8. Après la mise en ligne (fait par Jérémie)

- Search Console :
  - Sitemaps → envoyer `sitemap.xml` ;
  - Inspection de l'URL → demander l'indexation de `/`, `/realisations` et `/blog`.
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) : coller l'URL du site pour rafraîchir l'aperçu avec la nouvelle image.
- Supprimer l'ancienne clé Resend (ancien compte) et le domaine dans ImprovMX.
- Supabase : vérifier que la sécurité au niveau des lignes (RLS) est active sur la table `clients`. Les visiteurs doivent pouvoir *insérer*, mais pas *lire*.
