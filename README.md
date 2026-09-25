# Vorteo Studios

Portfolio and marketing site for Vorteo Studios — a web design and development studio based in White Plains, NY, building websites, stores, and web apps for small businesses, startups, gyms, restaurants, and service brands.

Live site: [vorteostudios.com](https://www.vorteostudios.com)

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and bundling
- [React Router](https://reactrouter.com/) for routing
- Build-time prerendering (`scripts/prerender.mjs`) — every route ships as real HTML
- Plain CSS (component-scoped files, design tokens in `src/index.css`)
- [Vercel Analytics](https://vercel.com/analytics), deployed on [Vercel](https://vercel.com/)

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, stacked featured-work showcase, services, process |
| `/projects` | Full work catalog with type filters |
| `/projects/:slug` | Case study — cover, overview, feature list, gallery + lightbox, phone mockup |
| `/services` | Services, what's included, process, FAQ |
| `/about` | Studio story, values, industries |
| `/contact` | Project inquiry form |

## Project structure

```
src/
  components/   Navbar, Footer, ProjectStack, ProjectCard, Frames, Lightbox, ...
  pages/        Route-level pages
  data/         projects.ts (case studies) and site.ts (services, process, FAQs)
  lib/          seo.ts (per-route meta + JSON-LD), images.ts, useRevealObserver.ts
  entry-server.tsx  SSR entry used by the prerenderer
scripts/
  prerender.mjs Renders every route to dist/<route>/index.html, plus 404.html and sitemap.xml
public/
  projects/     Screenshots (originals), with generated thumbs/ (800w) and md/ (1400w)
                variants and mobile/ phone screenshots
  og/           1200×630 social share images
```

## Getting started

```bash
npm install
npm run dev
```

### Other scripts

```bash
npm run build     # type-check, build client + SSR bundles, prerender all routes
npm run preview   # preview the production build (note: no clean-URL routing, use Vercel for that)
npm run lint      # run ESLint
```

## Adding a project

1. Add an entry to `src/data/projects.ts`. Set `featured: true` to show it in the home page stack.
2. Add images to `public/projects/` (`<name>.webp` cover + `<name>-1..3.webp` gallery), and a phone screenshot to `public/projects/mobile/<slug>.webp` if you want the phone mockup.
3. Generate the `thumbs/` (800px wide) and `md/` (1400px wide) copies of each image — the site loads those on smaller screens.
4. Add a 1200×630 share image at `public/og/<slug>.jpg`.

The case-study page, sitemap entry, meta tags, and structured data are all generated from the data file.

## SEO

- Every route is prerendered at build time with its own title, description, canonical URL, Open Graph / Twitter tags, and JSON-LD (`ProfessionalService`, `WebSite`, `BreadcrumbList`, `CreativeWork` per project, `ItemList` on the catalog, `FAQPage` on services). All of it comes from `src/lib/seo.ts`.
- `sitemap.xml` (with image entries) is generated at build time — don't hand-edit one in `public/`.
- `vercel.json` uses `cleanUrls` so `/projects/zoner` serves `dist/projects/zoner/index.html`; unknown URLs get `404.html` with a real 404 status.

## Contact form

The contact form (`src/components/ContactForm.tsx`) submits to [FormSubmit](https://formsubmit.co/) — no custom backend required. It includes a `_honey` spam trap.
