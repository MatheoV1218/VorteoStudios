import { useRef } from 'react'
import type { Project } from '../data/projects'
import './ProjectCard.css'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const dx = (x - cx) / cx
    const dy = (y - cy) / cy
    card.style.transform = `translateY(-6px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = ''
    }
  }

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--accent-color': project.color } as React.CSSProperties}
    >
      <div className="card-glow" style={{ background: project.color }} />

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
        <span>View Project</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
