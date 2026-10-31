import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContactButton } from '../../components/ContactButton';
import { getPost, postSeo } from '../../lib/blog';
import { getServiceBySegment } from '../../lib/services';
import { SITE_URL, useSeo } from '../../lib/seo';
import { NotFound } from '../NotFound';

export function BlogPost() {
  const { slug = '' } = useParams();
  const post = getPost(slug);
  useSeo(post ? postSeo(post) : undefined);
  if (!post) return <NotFound />;
  const relatedService = getServiceBySegment(post.segment);

  // Données structurées « Article » pour Google.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { '@type': 'Person', name: 'Jérémie AKWE' },
    publisher: { '@type': 'Organization', name: "Wi'Tech Agency", url: SITE_URL },
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-24">
        <Link to="/blog" className="text-sm text-gray-500 hover:text-red-600">← Tous les articles</Link>
        <article className="mt-6">
          <time dateTime={post.date} className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}
          </time>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-8">{post.title}</h1>
          <div className="prose-witech" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        {relatedService && (
          <p className="mt-10 text-base text-gray-700">
            Découvrir notre offre :{' '}
            <Link to={relatedService.path} className="text-red-600 font-semibold hover:underline">
              {relatedService.h1} →
            </Link>
          </p>
        )}
        <aside className="mt-16 rounded-2xl bg-gray-50 p-8">
          <p className="text-xl font-bold mb-2">Envie de savoir ce que ça donnerait chez vous ?</p>
          <p className="text-gray-600 mb-4">Wi'Tech propose un audit gratuit et sans engagement, en 30 minutes de visio.</p>
          <a href="/#pricing" className="inline-block rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Demander mon audit gratuit</a>
        </aside>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <ContactButton />
      <Footer />
    </div>
  );
}
