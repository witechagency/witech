import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Page introuvable</h1>
        <p className="text-gray-600 mb-8">Cette page n'existe pas ou a été déplacée.</p>
        <Link to="/" className="text-red-600 font-semibold">Retour à l'accueil</Link>
      </main>
      <Footer />
    </div>
  );
}
