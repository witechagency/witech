# Wi'Tech - Site Web Officiel

Site web moderne et performant pour Wi'Tech, agence digitale spécialisée dans la création de sites web.

## 🚀 Technologies utilisées

- **React 19** - Framework JavaScript
- **Vite 7** - Build tool ultra-rapide
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **React Router** - Navigation SPA
- **Supabase** - Base de données et backend
- **EmailJS** - Envoi d'emails

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone [URL_DU_REPO]
cd Wi-Tech
```

2. **Installer toutes les dépendances**
```bash
npm install
```

Cette commande installera automatiquement toutes les dépendances listées dans `package.json` :

**Dependencies (Production):**
- `@emailjs/browser` - Service d'envoi d'emails
- `@supabase/supabase-js` - Client Supabase
- `clsx` - Utilitaire pour classes CSS conditionnelles
- `framer-motion` - Bibliothèque d'animations
- `lucide-react` - Icônes React
- `react` & `react-dom` - Framework React
- `react-router-dom` - Routing pour React
- `tailwind-merge` - Fusion de classes Tailwind

**DevDependencies (Développement):**
- `@tailwindcss/postcss` - Plugin PostCSS pour Tailwind v4
- `@vitejs/plugin-react` - Plugin Vite pour React
- `autoprefixer` - Préfixes CSS automatiques
- `eslint` - Linter JavaScript/TypeScript
- `postcss` - Transformateur CSS
- `tailwindcss` - Framework CSS
- `typescript` - Compilateur TypeScript
- `vite` - Build tool

3. **Configurer les variables d'environnement**

Créer un fichier `.env` à la racine du projet :

```env
# Supabase Configuration
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_supabase

# Admin Dashboard Password
VITE_ADMIN_PASSWORD=votre_mot_de_passe_admin
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🛠️ Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Compile le projet pour la production
npm run preview      # Prévisualise le build de production

# Qualité du code
npm run lint         # Vérifie le code avec ESLint
```

## 📁 Structure du projet

```
Wi-Tech/
├── public/              # Fichiers statiques
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Composants réutilisables
│   │   ├── ContactButton.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── ServiceCard.tsx
│   ├── lib/            # Utilitaires et configuration
│   │   ├── constant.ts
│   │   ├── supabase.ts
│   │   └── utils.ts
│   ├── page/           # Pages principales
│   │   ├── Home.tsx
│   │   └── sections/   # Sections de la page d'accueil
│   ├── pages/          # Pages de routing
│   │   ├── admin/
│   │   │   └── ProspectsAdmin.tsx
│   │   └── legal/
│   │       ├── CGV.tsx
│   │       ├── Confidentialite.tsx
│   │       └── MentionsLegales.tsx
│   ├── App.tsx         # Composant racine avec routing
│   ├── main.tsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── .env                # Variables d'environnement (à créer)
├── .env.example        # Template des variables d'environnement
├── package.json        # Dépendances et scripts
├── tailwind.config.js  # Configuration Tailwind
├── tsconfig.json       # Configuration TypeScript
└── vite.config.ts      # Configuration Vite
```

## 🌐 Routes disponibles

- `/` - Page d'accueil
- `/mentions-legales` - Mentions légales
- `/cgv` - Conditions générales de vente
- `/confidentialite` - Politique de confidentialité
- `/admin` - Dashboard administrateur (protégé par mot de passe)

## 🔐 Dashboard Admin

Pour accéder au dashboard admin :
1. Naviguez vers `/admin`
2. Entrez le mot de passe configuré dans `.env` (`VITE_ADMIN_PASSWORD`)
3. Gérez les prospects (recherche, suppression, etc.)

## 🗄️ Base de données Supabase

Le projet utilise Supabase avec une table `clients` :

**Structure de la table `clients` :**
- `id` (bigint, primary key)
- `name` (text)
- `company` (text)
- `email` (text)
- `phone` (text)
- `pack` (text)
- `created_at` (timestamp)

## 📧 Configuration EmailJS

Le formulaire de contact utilise EmailJS. Assurez-vous d'avoir :
- Un compte EmailJS
- Les templates configurés
- Les IDs de service et template dans le code

## 🚢 Déploiement

### Build de production

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`.

### Déploiement recommandé

- **Vercel** (recommandé pour React/Vite)
- **Netlify**
- **Hostinger**
- **OVH**

## 🔧 Dépannage

### Erreur "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erreur Tailwind CSS
Vérifiez que `@tailwindcss/postcss` est installé :
```bash
npm install @tailwindcss/postcss --save-dev
```

### Erreur Supabase
Vérifiez vos variables d'environnement dans `.env`

## 📝 Notes importantes

- Le fichier `.env` ne doit **jamais** être commité dans Git
- Utilisez `.env.example` comme template
- Toutes les dépendances sont gérées par npm via `package.json`
- Pour partager le projet, partagez uniquement le code source (sans `node_modules`)
- Les autres développeurs n'auront qu'à faire `npm install`

## 📞 Support

Pour toute question : witechagency@gmail.com

---

**© 2025 Wi'Tech - Tous droits réservés**
