import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { BrowserFrame } from './Frames'
import { hostname, type Project } from '../data/projects'
import { srcSet, thumb } from '../lib/images'
import './ProjectStack.css'

interface ProjectStackProps {
  projects: Project[]
  total: number
}

/**
 * Featured work as a deck of cards that stack on top of each other as you
 * scroll. Pure CSS (position: sticky + scroll-driven animations), so it
 * rides the browser's native scrolling — no drag handlers, no jank on phones.
 */
export default function ProjectStack({ projects, total }: ProjectStackProps) {
  return (
    <section id="work" className="stack-section section-night" aria-labelledby="work-heading">
      <div className="container">
        <header className="stack-header">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading" className="display">
              Real brands. <span className="accent">Real launches.</span>
            </h2>
          </div>
          <p className="stack-header-sub">
            A few recent builds — from a White Plains gym to a South Carolina home care company. Scroll through, then
            open any project for the full story.
          </p>
        </header>

        <ol className="stack" style={{ '--count': projects.length } as CSSProperties}>
          {projects.map((project, i) => (
            <li key={project.slug} className="stack-item" style={{ '--i': i } as CSSProperties}>
              <article className="stack-card" style={{ '--project-color': project.color } as CSSProperties}>
                <div className="stack-card-info">
                  <div className="stack-card-top">
                    <span className="stack-index">
                      {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                    <span className="stack-cat">{project.industry}</span>
                  </div>

                  <h3>
                    <Link to={`/projects/${project.slug}`} className="stack-card-link">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="stack-category">{project.category}</p>
                  <p className="stack-desc">{project.description}</p>

                  <ul className="stack-tags" aria-label="Built with">
                    {project.tags.slice(0, 3).map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <span className="stack-cta" aria-hidden="true">
                    View case study
                    <FiArrowRight />
                  </span>
                </div>

                <div className="stack-card-media">
                  <BrowserFrame url={project.liveUrl ? hostname(project.liveUrl) : undefined} tone="dark">
                    <img
                      src={thumb(project.image)}
                      srcSet={srcSet(project.image)}
                      sizes="(max-width: 900px) 92vw, 640px"
                      alt={`${project.title} website homepage`}
                      width={1600}
                      height={1000}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </BrowserFrame>
                  {project.liveUrl && (
                    <a
                      className="stack-live"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit the live ${project.title} website`}
                    >
                      Live site <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>

        <div className="stack-more">
          <Link to="/projects" className="btn btn-light">
            Explore all {total} projects
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
