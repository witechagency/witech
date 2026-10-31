import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContactButton } from '../../components/ContactButton';
import { getAllPosts } from '../../lib/blog';
import { staticSeo, useSeo } from '../../lib/seo';

export function BlogIndex() {
  useSeo(staticSeo('/blog'));
  const posts = getAllPosts();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Le blog Wi'Tech</h1>
        <p className="text-lg text-gray-600 mb-12">
          Des guides concrets pour les dirigeants de PME et les indépendants : automatisation, CRM, sécurité Microsoft 365 et sites web.
        </p>
        {posts.length === 0 && <p className="text-gray-500">Les premiers articles arrivent bientôt.</p>}
        <ul className="space-y-8">
          {posts.map((p) => (
            <li key={p.slug} className="border-b border-gray-200 pb-8">
              <Link to={`/blog/${p.slug}`} className="group block">
                <time dateTime={p.date} className="text-sm text-gray-500">
                  {new Date(p.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}
                </time>
                <h2 className="text-2xl font-bold mt-1 group-hover:text-red-600 transition-colors">{p.title}</h2>
                <p className="text-gray-600 mt-2">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <ContactButton />
      <Footer />
    </div>
  );
}
