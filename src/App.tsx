import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { NotFound } from './pages/NotFound';

// Lazy load des pages secondaires → ne charge que si l'utilisateur y accède
const MentionsLegales = lazy(() => import('./pages/legal/MentionsLegales').then(m => ({ default: m.MentionsLegales })));
const CGV             = lazy(() => import('./pages/legal/CGV').then(m => ({ default: m.CGV })));
const Confidentialite = lazy(() => import('./pages/legal/Confidentialite').then(m => ({ default: m.Confidentialite })));
const ProspectsAdmin  = lazy(() => import('./pages/admin/ProspectsAdmin').then(m => ({ default: m.ProspectsAdmin })));
const Realisations    = lazy(() => import('./pages/Realisations').then(m => ({ default: m.Realisations })));
const BlogIndex       = lazy(() => import('./pages/blog/BlogIndex').then(m => ({ default: m.BlogIndex })));
const BlogPost        = lazy(() => import('./pages/blog/BlogPost').then(m => ({ default: m.BlogPost })));
const ServicePage     = lazy(() => import('./pages/services/ServicePage').then(m => ({ default: m.ServicePage })));
const LocalNantesPage = lazy(() => import('./pages/services/ServicePage').then(m => ({ default: m.LocalNantesPage })));

// Les routes seules, sans routeur : utilisées par le navigateur (BrowserRouter)
// et par le pré-rendu à la compilation (StaticRouter).
export function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/"                 element={<Home />} />
        <Route path="/realisations"     element={<Realisations />} />
        <Route path="/blog"             element={<BlogIndex />} />
        <Route path="/blog/:slug"       element={<BlogPost />} />
        <Route path="/services/:slug"   element={<ServicePage />} />
        <Route path="/agence-web-nantes" element={<LocalNantesPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv"              element={<CGV />} />
        <Route path="/confidentialite"  element={<Confidentialite />} />
        <Route path="/admin"            element={<ProspectsAdmin />} />
        <Route path="*"                 element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
