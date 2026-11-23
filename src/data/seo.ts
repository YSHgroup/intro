// Small SEO helpers shared by pages.

export type Crumb = { name: string; href: string };

/** schema.org BreadcrumbList node for a page's JSON-LD. */
export function breadcrumbLd(crumbs: Crumb[], origin: URL) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, origin).href,
    })),
  };
}
