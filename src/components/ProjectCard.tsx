import type { CSSProperties } from 'react'
import type { Project } from '../data/projects'
import './ProjectCard.css'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project}: Props) {
  const accentStyle = { '--accent-color': project.color } as CSSProperties
  return (
    <a
      className="project-card-standalone"
      href={`/projects/${project.slug}`}
      style={accentStyle}
      aria-label={`Open ${project.title} project page`}
    >
      <div style={{ background: project.color, borderRadius: 16, height: 180 }} />
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        {project.category} · {project.year}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.04em', color: 'var(--ink)' }}>
        {project.title}
      </h3>
      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.06em', padding: '5px 10px', borderRadius: 999, background: 'var(--sky)', border: '1px solid var(--border)', color: 'var(--indigo)' }}>
            {tag}
          </span>
        ))}
      </div>
      <span style={{ color: 'var(--indigo)', fontWeight: 700, fontSize: '0.88rem' }}>
        View Project →
      </span>
    </a>
  )
}
