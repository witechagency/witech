import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';

// Lazy load des pages secondaires → ne charge que si l'utilisateur y accède
const MentionsLegales = lazy(() => import('./pages/legal/MentionsLegales').then(m => ({ default: m.MentionsLegales })));
const CGV             = lazy(() => import('./pages/legal/CGV').then(m => ({ default: m.CGV })));
const Confidentialite = lazy(() => import('./pages/legal/Confidentialite').then(m => ({ default: m.Confidentialite })));
const ProspectsAdmin  = lazy(() => import('./pages/admin/ProspectsAdmin').then(m => ({ default: m.ProspectsAdmin })));
const Realisations    = lazy(() => import('./pages/Realisations').then(m => ({ default: m.Realisations })));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/realisations"     element={<Realisations />} />
          <Route path="/portfolio"        element={<Realisations />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv"              element={<CGV />} />
          <Route path="/confidentialite"  element={<Confidentialite />} />
          <Route path="/admin"            element={<ProspectsAdmin />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
