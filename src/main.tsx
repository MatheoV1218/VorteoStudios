import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App'

const root = document.getElementById('root')!

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered to static HTML (scripts/prerender.mjs),
// so hydrate them; the dev server serves an empty root, so render fresh.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

createRoot(document.getElementById('analytics')!).render(<Analytics />)
