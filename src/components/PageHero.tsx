import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './PageHero.css'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  crumbs: { label: string; to?: string }[]
  children?: ReactNode
}

export function Breadcrumbs({ crumbs }: { crumbs: PageHeroProps['crumbs'] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {crumbs.map(c => (
          <li key={c.label}>
            {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default function PageHero({ eyebrow, title, lead, crumbs, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="container">
        <Breadcrumbs crumbs={crumbs} />
        <p className="eyebrow page-hero-eyebrow">{eyebrow}</p>
        <h1 className="display page-hero-title">{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}
