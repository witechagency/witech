import { parse as parseYaml } from 'yaml';
import { marked } from 'marked';
import { SITE_URL, type PageSeo } from './seo';

export interface ServiceEntry {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  keyword?: string;
  segment?: string;
  order?: number;
  date?: string;
  updated?: string;
  draft?: boolean;
  areaServed: string;
  html: string;
}

const serviceFiles = import.meta.glob('/content/services/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const pageFiles = import.meta.glob('/content/pages/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function parseEntry(filePath: string, raw: string, isLocalPage: boolean): ServiceEntry {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`En-tête manquant dans ${filePath}`);
  const meta = parseYaml(match[1]) as Omit<ServiceEntry, 'slug' | 'path' | 'html' | 'areaServed'>;
  const slug = filePath.split('/').pop()!.replace(/\.md$/, '');
  const path = isLocalPage ? `/${slug}` : `/services/${slug}`;
  return {
    ...meta,
    h1: meta.h1 || meta.title,
    date: meta.date ? String(meta.date) : undefined,
    updated: meta.updated ? String(meta.updated) : undefined,
    slug,
    path,
    areaServed: isLocalPage ? 'Nantes' : 'France',
    html: marked.parse(match[2], { async: false }) as string,
  };
}

const services: ServiceEntry[] = Object.entries(serviceFiles)
  .map(([path, raw]) => parseEntry(path, raw, false))
  .filter((s) => !s.draft)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

const localPages: ServiceEntry[] = Object.entries(pageFiles)
  .map(([path, raw]) => parseEntry(path, raw, true))
  .filter((p) => !p.draft);

export function getAllServices(): ServiceEntry[] {
  return services;
}

export function getService(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceBySegment(segment: string | undefined): ServiceEntry | undefined {
  if (!segment) return undefined;
  return services.find((s) => s.segment === segment);
}

export function getLocalPage(slug: string): ServiceEntry | undefined {
  return localPages.find((p) => p.slug === slug);
}

export function getAllLocalPages(): ServiceEntry[] {
  return localPages;
}

export function serviceSeo(entry: ServiceEntry): PageSeo {
  return {
    path: entry.path,
    title: entry.title,
    description: entry.description,
    lastmod: entry.updated ?? entry.date,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: entry.h1,
      description: entry.description,
      url: `${SITE_URL}${entry.path}`,
      provider: {
        '@type': 'ProfessionalService',
        name: "Wi'Tech Agency",
        url: SITE_URL,
      },
      areaServed: entry.areaServed === 'France'
        ? { '@type': 'Country', name: 'France' }
        : { '@type': 'City', name: entry.areaServed },
    },
  };
}

