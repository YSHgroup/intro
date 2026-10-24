# Healthspan Network (Astro)

Portfolio project site for the **Human Healthspan, AI & Scientific Innovation Network** concept.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where to edit

| What | File |
| --- | --- |
| Your name, bio, links (placeholders) | `src/data/site.ts` |
| Idea content (pillars, roadmap, MVP...) | `src/data/content.ts` |
| Pages | `src/pages/` (`index`, `about`, `roadmap`) |
| Colors / global styles | `src/styles/global.css` |
| Logo and emblem | `public/images/`, favicon at `public/favicon.png` |

Placeholders are outlined with a dashed yellow border (`.placeholder` class in `global.css`).

## Before publishing

- Set `site` (and `base` if hosted under a sub-path) in `astro.config.mjs`.
- Replace all placeholders in `src/data/site.ts`.
- Nav links and images use root paths (`/roadmap`, `/images/...`); if you set a `base`, prefix them with `import.meta.env.BASE_URL`.
