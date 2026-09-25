import { useState, type CSSProperties } from 'react'
import { flushSync } from 'react-dom'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import { projects, projectTypes, type ProjectType } from '../data/projects'
import './Projects.css'

type Filter = 'All' | ProjectType

const labels: Record<Filter, string> = {
  All: 'All work',
  'Business Website': 'Business sites',
  'E-commerce': 'E-commerce',
  'Web App': 'Web apps',
  Simulator: 'Simulators',
}

const filters: { label: Filter; count: number }[] = [
  { label: 'All', count: projects.length },
  ...projectTypes.map(t => ({ label: t, count: projects.filter(p => p.type === t).length })),
]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? projects : projects.filter(p => p.type === filter)

  const choose = (next: Filter) => {
    if (next === filter) return
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (doc.startViewTransition && !reduce) {
      doc.startViewTransition(() => flushSync(() => setFilter(next)))
    } else {
      setFilter(next)
    }
  }

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Work' }]}
        eyebrow={`${projects.length} projects`}
        title={
          <>
            Work we&apos;re <span className="accent">proud to ship.</span>
          </>
        }
        lead="Business websites, online stores, web apps, and interactive simulators — each one designed from scratch and built to perform on every screen."
      />

      <section className="projects-page" aria-label="Project catalog">
        <div className="container">
          <div className="filter-bar" role="toolbar" aria-label="Filter projects by type">
            {filters.map(f => (
              <button
                key={f.label}
                type="button"
                className="filter-chip"
                aria-pressed={filter === f.label}
                onClick={() => choose(f.label)}
              >
                {labels[f.label]}
                <span className="filter-count">{f.count}</span>
              </button>
            ))}
          </div>

          <p className="sr-only" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>

          <div className="projects-grid">
            {visible.map((project, i) => (
              <div
                key={project.slug}
                className="projects-grid-item"
                style={{ viewTransitionName: `card-${project.slug}` } as CSSProperties}
              >
                <ProjectCard project={project} eager={i < 3} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
