import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContactButton } from '../../components/ContactButton';
import { getService, getLocalPage, serviceSeo, type ServiceEntry } from '../../lib/services';
import { getAllPosts } from '../../lib/blog';
import { useSeo } from '../../lib/seo';
import { NotFound } from '../NotFound';

function ServiceView({ entry }: { entry: ServiceEntry }) {
  useSeo(serviceSeo(entry));
  const relatedPosts = entry.segment
    ? getAllPosts().filter((p) => p.segment === entry.segment)
    : [];

  // Données structurées « Service » : injectées dans le <head> au pré-rendu (serviceSeo), pas en double ici.

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-24">
        <article>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">{entry.h1}</h1>
          <div className="prose-witech" dangerouslySetInnerHTML={{ __html: entry.html }} />
        </article>

        <aside className="mt-16 rounded-2xl bg-gray-50 p-8">
          <p className="text-xl font-bold mb-2">Parlons de votre projet</p>
          <p className="text-gray-600 mb-4">Wi'Tech propose un audit gratuit et sans engagement, en 30 minutes de visio.</p>
          <a href="/#pricing" className="inline-block rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Demander mon audit gratuit</a>
        </aside>

        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold mb-6">Articles sur ce sujet</h2>
            <ul className="space-y-4">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="text-red-600 font-semibold hover:underline">
                    {p.title}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

      </main>
      <ContactButton />
      <Footer />
    </div>
  );
}

export function ServicePage() {
  const { slug = '' } = useParams();
  const entry = getService(slug);
  useSeo(entry ? serviceSeo(entry) : undefined);
  if (!entry) return <NotFound />;
  return <ServiceView entry={entry} />;
}

export function LocalNantesPage() {
  const entry = getLocalPage('agence-web-nantes');
  useSeo(entry ? serviceSeo(entry) : undefined);
  if (!entry) return <NotFound />;
  return <ServiceView entry={entry} />;
}

