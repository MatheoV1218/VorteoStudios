import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'

const SITE_URL = 'https://www.vorteostudios.com'
const SITE_NAME = 'VorTeo Studios'
const DEFAULT_IMAGE = `${SITE_URL}/VorTeo%20logo.png`

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!tag) {
    tag = document.createElement('meta')
    if (property) tag.setAttribute('property', name)
    else tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }

  tag.setAttribute('href', href)
}

function setJsonLd(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null

  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(data)
}

export default function SEO() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const projectSlug = path.startsWith('/projects/') ? path.replace('/projects/', '') : null
    const project = projectSlug ? projects.find(item => item.slug === projectSlug) : null

    const title = project
      ? `${project.title} Case Study | VorTeo Studios`
      : 'VorTeo Studios | Web Design & Development in White Plains, NY'

    const description = project
      ? `${project.description} Built by VorTeo Studios, a web design and development studio based in White Plains, NY.`
      : 'VorTeo Studios builds clean, responsive websites and web apps for small businesses, creators, gyms, restaurants, and service brands in White Plains and Westchester, NY.'

    const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`
    const image = project?.image ? `${SITE_URL}${project.image}` : DEFAULT_IMAGE

    document.title = title

    setMeta('description', description)
    setMeta('robots', 'index, follow, max-image-preview:large')
    setMeta('theme-color', '#4f46e5')

    setMeta('og:type', project ? 'article' : 'website', true)
    setMeta('og:site_name', SITE_NAME, true)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:url', canonicalUrl, true)
    setMeta('og:image', image, true)
    setMeta('og:image:alt', project ? `${project.title} project preview` : 'VorTeo Studios logo', true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)

    setLink('canonical', canonicalUrl)

    setJsonLd('vorteo-schema', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}/#business`,
          name: 'VorTeo Studios',
          url: `${SITE_URL}/`,
          image: DEFAULT_IMAGE,
          logo: DEFAULT_IMAGE,
          email: 'vorteostudios@gmail.com',
          priceRange: '$$',
          founder: { '@id': `${SITE_URL}/#person` },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'White Plains',
            addressRegion: 'NY',
            addressCountry: 'US',
          },
          areaServed: [
            'White Plains, NY',
            'Westchester County, NY',
            'New York',
            'United States',
          ],
          description:
            'VorTeo Studios provides web design and web development for small businesses, creators, gyms, restaurants, startups, and service brands.',
          sameAs: [
            'https://www.linkedin.com/in/matheo-villada/',
            'https://github.com/MatheoV1218',
          ],
          makesOffer: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Website Design and Development' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Website Redesign' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'React Web App Development' },
            },
          ],
        },
        {
          '@type': 'Person',
          '@id': `${SITE_URL}/#person`,
          name: 'Matheo Villada',
          jobTitle: 'Web Developer and Designer',
          url: `${SITE_URL}/`,
          sameAs: [
            'https://www.linkedin.com/in/matheo-villada/',
            'https://github.com/MatheoV1218',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          publisher: { '@id': `${SITE_URL}/#business` },
        },
        project
          ? {
              '@type': 'CreativeWork',
              '@id': `${canonicalUrl}#project`,
              name: project.title,
              url: canonicalUrl,
              image,
              description: project.longDescription,
              creator: { '@id': `${SITE_URL}/#business` },
              dateCreated: project.year,
              keywords: project.tags.join(', '),
              workExample: project.liveUrl || undefined,
            }
          : {
              '@type': 'WebPage',
              '@id': `${SITE_URL}/#home`,
              name: 'VorTeo Studios | Web Design & Development in White Plains, NY',
              url: `${SITE_URL}/`,
              description,
              isPartOf: { '@id': `${SITE_URL}/#website` },
            },
      ].filter(Boolean),
    })
  }, [location.pathname])

  return null
}
