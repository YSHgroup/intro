// @ts-check
import { defineConfig } from 'astro/config';

// Production URL (Netlify). Used for canonical URLs, Open Graph URLs,
// sitemap.xml and robots.txt. If this lives under a sub-path, also set `base`.
export default defineConfig({
  site: 'https://yshintro.netlify.app',
  // Netlify serves pages as /about/ — keep every URL consistent with that.
  trailingSlash: 'always',
});
