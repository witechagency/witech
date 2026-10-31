import { useEffect } from 'react';

export const SITE_URL = 'https://www.witechagency.com';

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  lastmod?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>; // données structurées injectées dans le <head> au pré-rendu
}

// Données structurées de l'entreprise (accueil). Logo en PNG : Google n'accepte pas le SVG.
const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: "Wi'Tech Agency",
  url: SITE_URL,
  logo: `${SITE_URL}/email-logo.png`,
  image: `${SITE_URL}/og-image.png`,
  email: 'contact@witechagency.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Nantes', postalCode: '44000', addressCountry: 'FR' },
  areaServed: { '@type': 'Country', name: 'France' },
  sameAs: ['https://www.linkedin.com/company/witechagency'],
  description: 'Sites web, CRM, sécurité Microsoft 365 / Azure et automatisation des processus métier pour PME et indépendants.',
};

// Pages fixes du site. Une ligne par page. (Les articles du blog sont ajoutés automatiquement.)
export const STATIC_PAGES: PageSeo[] = [
  {
    path: '/',
    title: "Wi'Tech — Sites Web Convertissants, Cloud Azure & Automatisations",
    description: "Wi'Tech accompagne les PME et indépendants : sites web performants, expertise Cloud & Sécurité Azure, et automatisation de vos processus métier sur-mesure.",
    jsonLd: ORGANIZATION_JSON_LD,
  },
  {
    path: '/realisations',
    title: "Réalisations — Wi'Tech",
    description: "Sites web, médias, portails métiers et automatisations réalisés par Wi'Tech pour des PME et indépendants.",
  },
  {
    path: '/blog',
    title: "Blog — Automatisation, CRM, sécurité Microsoft 365 et sites web pour PME | Wi'Tech",
    description: "Guides concrets pour dirigeants de PME : automatiser les tâches répétitives, structurer son suivi commercial, sécuriser Microsoft 365 et faire un site qui génère des contacts.",
  },
  { path: '/mentions-legales', title: "Mentions légales — Wi'Tech", description: "Mentions légales du site Wi'Tech Agency." },
  { path: '/cgv', title: "Conditions générales de vente — Wi'Tech", description: "Conditions générales de vente de Wi'Tech Agency." },
  { path: '/confidentialite', title: "Politique de confidentialité — Wi'Tech", description: "Politique de confidentialité et de protection des données de Wi'Tech Agency." },
];

export function staticSeo(path: string): PageSeo | undefined {
  return STATIC_PAGES.find((p) => p.path === path);
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Met à jour le titre et les balises quand on navigue d'une page à l'autre dans le navigateur.
// Le HTML pré-rendu contient déjà les bonnes balises : ce hook ne sert qu'à la navigation interne.
export function useSeo(seo: PageSeo | undefined) {
  useEffect(() => {
    if (!seo) return;
    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('link[rel="canonical"]', 'href', SITE_URL + seo.path);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', SITE_URL + seo.path);
  }, [seo]);
}
