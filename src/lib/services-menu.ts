// Liste légère des pages de service publiées, pour le menu.
// N'importe NI marked NI yaml : le menu est chargé sur toutes les pages, il doit rester léger.
// On lit seulement quelques champs simples de l'en-tête (title, h1, order, draft).

export interface ServiceMenuItem {
  slug: string;
  path: string;
  label: string;
  order: number;
}

const files = import.meta.glob('/content/services/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function field(header: string, name: string): string | undefined {
  const m = header.match(new RegExp(`^${name}:\\s*(.+?)\\s*$`, 'm'));
  return m ? m[1].replace(/^["']|["']$/g, '') : undefined;
}

const items: ServiceMenuItem[] = Object.entries(files)
  .map(([filePath, raw]) => {
    const header = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    return {
      draft: field(header, 'draft') === 'true',
      slug: filePath.split('/').pop()!.replace(/\.md$/, ''),
      label: field(header, 'h1') ?? field(header, 'title') ?? '',
      order: Number(field(header, 'order') ?? 99),
    };
  })
  .filter((s) => !s.draft)
  .map(({ slug, label, order }) => ({ slug, path: `/services/${slug}`, label, order }))
  .sort((a, b) => a.order - b.order);

export function getServiceMenu(): ServiceMenuItem[] {
  return items;
}
