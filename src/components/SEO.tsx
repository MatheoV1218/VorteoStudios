import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absUrl, getMeta } from '../lib/seo'

// Each route's HTML is prerendered with the right <head> at build time.
// This keeps the tags in sync during client-side navigation.

function setMeta(key: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getMeta(pathname)
    const url = absUrl(meta.path)

    document.title = meta.title
    setMeta('description', meta.description)
    setMeta('robots', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    setMeta('og:type', meta.type, 'property')
    setMeta('og:title', meta.title, 'property')
    setMeta('og:description', meta.description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:image', meta.image, 'property')
    setMeta('og:image:alt', meta.imageAlt, 'property')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
    setMeta('twitter:image', meta.image)
    setMeta('twitter:image:alt', meta.imageAlt)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (meta.noindex) {
      canonical?.remove()
    } else {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = url
    }

    let script = document.getElementById('vorteo-schema')
    if (!script) {
      script = document.createElement('script')
      script.id = 'vorteo-schema'
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(meta.jsonLd)
  }, [pathname])

  return null
}
