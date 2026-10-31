import { parse as parseYaml } from 'yaml';
import { marked } from 'marked';

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;        // AAAA-MM-JJ
  updated?: string;
  keyword?: string;
  segment?: string;
  draft?: boolean;
  html: string;
}

// Vite embarque tous les fichiers Markdown de content/blog au moment de la compilation.
const files = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function parseFile(path: string, raw: string): Post {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`En-tête manquant dans ${path}`);
  const meta = parseYaml(match[1]) as Omit<Post, 'slug' | 'html'>;
  const slug = path.split('/').pop()!.replace(/\.md$/, '');
  return {
    ...meta,
    date: String(meta.date),
    updated: meta.updated ? String(meta.updated) : undefined,
    slug,
    html: marked.parse(match[2], { async: false }) as string,
  };
}

const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => parseFile(path, raw))
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): Post[] {
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// Métadonnées SEO d'un article (titre de page, description, date de mise à jour).
export function postSeo(post: Post) {
  return {
    path: `/blog/${post.slug}`,
    title: `${post.title} | Wi'Tech`,
    description: post.description,
    lastmod: post.updated ?? post.date,
  };
}
