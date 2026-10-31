// Point d'entrée utilisé UNIQUEMENT à la compilation pour générer le HTML de chaque page.
import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import { STATIC_PAGES, type PageSeo } from './lib/seo';
import { getAllPosts, postSeo } from './lib/blog';
import { getAllServices, getAllLocalPages, serviceSeo } from './lib/services';

export { SITE_URL } from './lib/seo';

// Toutes les pages à pré-rendre : pages fixes + articles du blog + pages de service + pages locales.
export function getAllPages(): PageSeo[] {
  return [
    ...STATIC_PAGES,
    ...getAllPosts().map(postSeo),
    ...getAllServices().map(serviceSeo),
    ...getAllLocalPages().map(serviceSeo),
  ];
}

export async function render(url: string): Promise<string> {
  // prerender attend que toutes les pages chargées en différé (lazy) soient prêtes.
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
  return new Response(prelude).text();
}
