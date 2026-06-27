import { useRef } from 'react'
import type { Project } from '../data/projects'
import './ProjectCard.css'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const cardRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateY = ((x / rect.width) - 0.5) * 8
    const rotateX = ((y / rect.height) - 0.5) * -8

    card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <article
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--accent-color': project.color } as React.CSSProperties}
    >
      <div className="project-visual" style={{ background: project.imageGradient }}>
        <div className="project-browser">
          <span />
          <span />
          <span />
        </div>
        <div className="project-screen-card main">
          <div className="screen-kicker">{project.category}</div>
          <div className="screen-title">{project.title}</div>
          <div className="screen-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="project-screen-card mini">
          <strong>{String(index + 1).padStart(2, '0')}</strong>
          <span>Selected Work</span>
        </div>
      </div>

      <div className="project-content">
        <div className="card-header">
          <span className="card-category">{project.category}</span>
          <span className="card-year">{project.year}</span>
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>

        <div className="card-tags">
          {project.tags.map(tag => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>

        <div className="card-arrow">
          <span>{project.link ? 'Open Project' : 'Case Study Preview'}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </article>
  )
}
