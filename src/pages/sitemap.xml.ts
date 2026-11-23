import type { APIRoute } from 'astro';

// Builds /sitemap.xml at build time from the top-level files in src/pages/.
// New pages (e.g. src/pages/blog.astro) are included automatically.
// Excluded: the 404 page and any dynamic ([param]) routes.
const pageModules = import.meta.glob('./*.astro');

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://yshintro.netlify.app');

  const paths = Object.keys(pageModules)
    .map((file) => file.replace('./', '').replace(/\.astro$/, ''))
    .filter((name) => name !== '404' && !name.includes('['))
    .map((name) => (name === 'index' ? '/' : `/${name}/`))
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

  const urls = paths
    .map((path) => {
      const priority = path === '/' ? '1.0' : '0.8';
      return `  <url>\n    <loc>${new URL(path, origin).href}</loc>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
