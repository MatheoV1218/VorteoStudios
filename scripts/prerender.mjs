// Runs after the client + SSR builds. Renders every route to static HTML with
// its own <title>, meta description, canonical, Open Graph tags and JSON-LD,
// so crawlers and link-preview bots see real content without running JS.
// The client then hydrates the markup. Also writes 404.html and sitemap.xml.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serverDir = join(root, 'dist-server')

const { render, allRoutes, getMeta, renderHead, absUrl } = await import(
  pathToFileURL(join(serverDir, 'entry-server.js')).href
)

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const headBlock = /<!--head:start-->[\s\S]*?<!--head:end-->/

if (!headBlock.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('index.html is missing the <!--head:start/end--> or <!--app-html--> markers')
}

function page(url, meta) {
  return template.replace(headBlock, renderHead(meta)).replace('<!--app-html-->', render(url))
}

for (const url of allRoutes) {
  const file = url === '/' ? join(dist, 'index.html') : join(dist, url.slice(1), 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, page(url, getMeta(url)))
}

// Vercel serves 404.html (with a real 404 status) for unknown URLs.
writeFileSync(join(dist, '404.html'), page('/404', getMeta('/404')))

const today = new Date().toISOString().slice(0, 10)
const xmlEsc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
const urls = allRoutes
  .map(url => {
    const meta = getMeta(url)
    const images = (meta.images ?? [])
      .map(src => `\n    <image:image><image:loc>${xmlEsc(src)}</image:loc></image:image>`)
      .join('')
    return `  <url>
    <loc>${absUrl(url)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority.toFixed(1)}</priority>${images}
  </url>`
  })
  .join('\n')

writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`,
)

rmSync(serverDir, { recursive: true, force: true })
console.log(`prerender: ${allRoutes.length} routes + 404.html + sitemap.xml`)
