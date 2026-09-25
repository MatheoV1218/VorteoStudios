import { projects, getProject } from '../data/projects'
import { SITE, faqs, services } from '../data/site'

export interface PageMeta {
  path: string
  title: string
  description: string
  image: string
  imageAlt: string
  type: 'website' | 'article'
  noindex?: boolean
  jsonLd: object
  /** Sitemap hints */
  changefreq?: 'weekly' | 'monthly'
  priority?: number
  images?: string[]
}

const abs = (path: string) => SITE.url + (path === '/' ? '/' : path)
const DEFAULT_IMAGE = abs('/og/default.jpg')

const business = {
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: `${SITE.url}/`,
  image: DEFAULT_IMAGE,
  logo: abs('/logo-og.webp'),
  email: SITE.email,
  priceRange: '$$',
  founder: { '@id': `${SITE.url}/#person` },
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: 'US',
  },
  areaServed: ['White Plains, NY', 'Westchester County, NY', 'New York', 'Connecticut', 'United States'],
  description:
    'Vorteo Studios is a web design and development studio in White Plains, NY building custom websites, e-commerce stores, and web apps for small businesses, restaurants, gyms, healthcare providers, and startups.',
  knowsAbout: ['Web Design', 'Web Development', 'React', 'TypeScript', 'E-commerce', 'Search Engine Optimization'],
  sameAs: [SITE.linkedin, SITE.github],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design & Development Services',
    itemListElement: services.map(s => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, description: s.desc },
    })),
  },
}

const person = {
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.founder,
  jobTitle: 'Founder, Web Developer and Designer',
  worksFor: { '@id': `${SITE.url}/#business` },
  url: abs('/about'),
  sameAs: [SITE.linkedin, SITE.github],
}

const website = {
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: `${SITE.url}/`,
  publisher: { '@id': `${SITE.url}/#business` },
  inLanguage: 'en-US',
}

function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  }
}

function webPage(type: string, path: string, title: string, description: string, extra: object = {}) {
  return {
    '@type': type,
    '@id': `${abs(path)}#webpage`,
    url: abs(path),
    name: title,
    description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#business` },
    inLanguage: 'en-US',
    ...extra,
  }
}

const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': [business, person, website, ...nodes] })

interface StaticPage {
  path: string
  title: string
  description: string
  pageType: string
  crumb?: string
  changefreq: 'weekly' | 'monthly'
  priority: number
  extra?: () => object[]
}

const staticPages: StaticPage[] = [
  {
    path: '/',
    title: 'Vorteo Studios | Web Design & Development in White Plains, NY',
    description:
      'Vorteo Studios designs and builds custom websites, e-commerce stores, and web apps for small businesses, restaurants, gyms, and startups in White Plains, Westchester, and beyond.',
    pageType: 'WebPage',
    changefreq: 'weekly',
    priority: 1,
  },
  {
    path: '/projects',
    title: 'Our Work | Website & Web App Portfolio | Vorteo Studios',
    description: `Explore ${projects.length} websites, e-commerce stores, and web apps designed and built by Vorteo Studios — from fitness studios and restaurants to healthcare, retail, and medical simulators.`,
    pageType: 'CollectionPage',
    crumb: 'Work',
    changefreq: 'weekly',
    priority: 0.9,
    extra: () => [
      {
        '@type': 'ItemList',
        '@id': `${abs('/projects')}#list`,
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: abs(`/projects/${p.slug}`),
          name: p.title,
        })),
      },
    ],
  },
  {
    path: '/services',
    title: 'Web Design, Redesign & Web App Services | Vorteo Studios',
    description:
      'Custom business websites, redesigns, e-commerce, web apps, booking flows, and SEO foundations — built mobile-first by Vorteo Studios in White Plains, NY.',
    pageType: 'WebPage',
    crumb: 'Services',
    changefreq: 'monthly',
    priority: 0.8,
    extra: () => [
      {
        '@type': 'FAQPage',
        '@id': `${abs('/services')}#faq`,
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  },
  {
    path: '/about',
    title: 'About Vorteo Studios | Founder-Led Web Studio in White Plains, NY',
    description:
      'Vorteo Studios is a founder-led web design and development studio in White Plains, NY, pairing thoughtful design with clean engineering for businesses that want to look sharp online.',
    pageType: 'AboutPage',
    crumb: 'About',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/contact',
    title: 'Contact Vorteo Studios | Start Your Website Project',
    description:
      'Tell us about your business and what you need built. Vorteo Studios replies to every inquiry about new websites, redesigns, e-commerce, and web apps.',
    pageType: 'ContactPage',
    crumb: 'Contact',
    changefreq: 'monthly',
    priority: 0.8,
  },
]

function staticMeta(p: StaticPage): PageMeta {
  const nodes: object[] = [webPage(p.pageType, p.path, p.title, p.description)]
  if (p.crumb) nodes.push(breadcrumbs([{ name: p.crumb, path: p.path }]))
  if (p.extra) nodes.push(...p.extra())
  return {
    path: p.path,
    title: p.title,
    description: p.description,
    image: DEFAULT_IMAGE,
    imageAlt: 'Vorteo Studios — websites that feel clean, sharp, and built to grow',
    type: 'website',
    jsonLd: graph(...nodes),
    changefreq: p.changefreq,
    priority: p.priority,
  }
}

function projectMeta(slug: string): PageMeta | null {
  const project = getProject(slug)
  if (!project) return null
  const path = `/projects/${project.slug}`
  const title = `${project.title} Case Study | Vorteo Studios`
  const description = `${project.category} case study: ${project.description}`
  const image = abs(`/og/${project.slug}.jpg`)
  const images = [project.image, ...(project.gallery ?? [])].map(abs)

  return {
    path,
    title,
    description,
    image,
    imageAlt: `${project.title} ${project.category.toLowerCase()} designed by Vorteo Studios`,
    type: 'article',
    changefreq: 'monthly',
    priority: 0.8,
    images,
    jsonLd: graph(
      webPage('WebPage', path, title, description, { primaryImageOfPage: image, mainEntity: { '@id': `${abs(path)}#project` } }),
      breadcrumbs([
        { name: 'Work', path: '/projects' },
        { name: project.title, path },
      ]),
      {
        '@type': 'CreativeWork',
        '@id': `${abs(path)}#project`,
        name: project.title,
        headline: `${project.title} — ${project.category}`,
        url: abs(path),
        image: images,
        abstract: project.description,
        description: project.longDescription,
        genre: project.category,
        creator: { '@id': `${SITE.url}/#business` },
        dateCreated: project.year,
        keywords: [...project.tags, project.industry].join(', '),
        ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
      },
    ),
  }
}

export function notFoundMeta(path: string): PageMeta {
  return {
    path,
    title: 'Page Not Found | Vorteo Studios',
    description: 'The page you are looking for does not exist. Explore our work, services, or get in touch.',
    image: DEFAULT_IMAGE,
    imageAlt: 'Vorteo Studios',
    type: 'website',
    noindex: true,
    jsonLd: graph(),
  }
}

export function getMeta(pathname: string): PageMeta {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const page = staticPages.find(p => p.path === path)
  if (page) return staticMeta(page)
  const match = path.match(/^\/projects\/([^/]+)$/)
  if (match) {
    const meta = projectMeta(match[1])
    if (meta) return meta
  }
  return notFoundMeta(path)
}

const escAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Static <head> markup for a route, baked into each prerendered HTML file. */
export function renderHead(meta: PageMeta) {
  const url = abs(meta.path)
  const tags = [
    `<title>${escAttr(meta.title)}</title>`,
    `<meta name="description" content="${escAttr(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    meta.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${escAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escAttr(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${meta.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escAttr(meta.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${meta.image}" />`,
    `<meta name="twitter:image:alt" content="${escAttr(meta.imageAlt)}" />`,
    `<script type="application/ld+json" id="vorteo-schema">${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>`,
  ]
  return tags.filter(Boolean).join('\n    ')
}

/** Every indexable route, used by the prerenderer and the sitemap. */
export const allRoutes = [...staticPages.map(p => p.path), ...projects.map(p => `/projects/${p.slug}`)]

export const absUrl = abs
