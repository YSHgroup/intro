# Healthspan Network — Astro Portfolio Project

**Healthspan Network** is an Astro portfolio project for the **Human Healthspan, AI & Scientific Innovation Network**, an initiative exploring healthier human lifespan, artificial intelligence, biotechnology, and scientific collaboration.

- 🌐 [Live website](https://yshintro.netlify.app/)
- 👤 [About YSH and the project](https://yshintro.netlify.app/about/)
- 💻 [GitHub repository](https://github.com/YSHgroup/intro)
- 🚀 Built with [Astro](https://astro.build/) and deployed on [Netlify](https://www.netlify.com/) 

## Project overview

This portfolio site presents an idea for a human healthspan network focused on:

- AI-assisted healthcare and biomedical research
- Scientific innovation and healthy longevity
- Biotechnology and translational science
- Community, collaboration, and knowledge sharing
- Roadmaps and MVP concepts for a health-focused social network

Explore the [home page](https://yshintro.netlify.app/) and [about page](https://yshintro.netlify.app/about/) for the live project presentation.

## Run locally

Requirements:

- [Node.js](https://nodejs.org/) with npm
- Git

```bash
git clone https://github.com/YSHgroup/intro.git
cd intro
npm install
npm run dev      # http://localhost:4321/
```

Create a production build with:

```bash
npm run build    # static output is written to dist/
npm run preview  # preview the production build locally
```

## Where to edit

| What | File |
| --- | --- |
| Name, biography, skills, personal links, and project links | `src/data/site.ts` |
| Network pillars, roadmap, MVP, and idea content | `src/data/content.ts` |
| Site pages | `src/pages/` (`index`, `about`, `roadmap`, `404`) |
| Colors and global styles | `src/styles/global.css` |
| Logo, emblem, banner, and avatar | `public/images/`; favicon is at `public/favicon.png` |

## SEO setup

| What | Where |
| --- | --- |
| Production URL (canonical, sitemap, Open Graph) | `site` in `astro.config.mjs` and `site.url` in `src/data/site.ts` |
| Home title, default meta description, share image | `site.homeTitle`, `site.metaDescription`, `site.ogImage` in `src/data/site.ts` |
| Per-page title / description / `noindex` / JSON-LD | props on `BaseLayout` (`src/layouts/BaseLayout.astro`) |
| `robots.txt` | `public/robots.txt` (contains the `Sitemap:` directive) |
| `sitemap.xml` | `src/pages/sitemap.xml.ts` — built automatically from the files in `src/pages/` |
| Breadcrumbs and "keep exploring" links | `src/components/Breadcrumbs.astro`, `src/components/RelatedLinks.astro`; page list lives in `pages` in `src/data/site.ts` |
| Cache and security headers | `netlify.toml` |

When you add a page: create `src/pages/<name>.astro`, pass a unique `title` and `description` to `BaseLayout`, and add it to `nav` and `pages` in `src/data/site.ts`. It is added to the sitemap automatically.
Keep titles around 60 characters or fewer and descriptions around 160 characters or fewer.

## Before publishing

- Set `site` (and `base` if hosted under a sub-path) in `astro.config.mjs`, and update the `Sitemap:` URL in `public/robots.txt` if the domain changes.
- Remove the **Preview** badge from `Header.astro` and update `site.status` when the project launches.
- Root-relative navigation and image paths use paths such as `/roadmap/` and `/images/...`. If a `base` is configured, prefix those URLs with `import.meta.env.BASE_URL`.
- After deploying, submit `https://yshintro.netlify.app/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Tech stack

- [Astro](https://astro.build/) — static site framework
- [TypeScript](https://www.typescriptlang.org/) — typed JavaScript
- [Markdown](https://www.markdownguide.org/) — content formatting
- [npm](https://www.npmjs.com/) — package and script management
- [Netlify](https://www.netlify.com/) — production hosting

## Links

- [Live Healthspan Network website](https://yshintro.netlify.app/)
- [About the Healthspan Network](https://yshintro.netlify.app/about/)
- [Source code on GitHub](https://github.com/YSHgroup/intro)
- [Astro documentation](https://docs.astro.build/)
