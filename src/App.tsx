import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { MentionsLegales } from './pages/legal/MentionsLegales';
import { CGV } from './pages/legal/CGV';
import { Confidentialite } from './pages/legal/Confidentialite';
import { ProspectsAdmin } from './pages/admin/ProspectsAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/admin" element={<ProspectsAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
