# VorTeo Studios

Portfolio and marketing site for VorTeo Studios — a web design and development studio based in White Plains, NY, building websites for small businesses, startups, gyms, creators, and service brands.

Live site: [vorteostudios.com](https://www.vorteostudios.com)

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and bundling
- [React Router](https://reactrouter.com/) for client-side routing
- [Embla Carousel](https://www.embla-carousel.com/) for the project showcase
- Plain CSS (component-scoped files, design tokens via CSS custom properties in `src/index.css`)
- [Vercel Analytics](https://vercel.com/analytics)
- Deployed on [Vercel](https://vercel.com/)

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, ContactForm, SEO, ProjectSpiral, ...)
  pages/        Route-level pages (Home, ProjectDetail, NotFound)
  data/         Project case-study content (data/projects.ts)
  App.tsx       Routes
  main.tsx      Entry point
public/
  projects/     Project screenshots and gallery images
```

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

### Other scripts

```bash
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Adding a project

Project case studies are driven by `src/data/projects.ts`. Add an entry there (slug, title, description, images, tags, etc.) and it will automatically appear in the homepage carousel and get its own case-study page at `/projects/:slug`.

## Contact form

The contact form (`src/components/ContactForm.tsx`) submits to [FormSubmit](https://formsubmit.co/) — no custom backend is required.

## Deployment

The site is deployed on Vercel. `vercel.json` rewrites all routes to `index.html` so client-side routing works on refresh/direct navigation.
