import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import type { Project } from '../data/projects'
import { thumb } from '../lib/images'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
  headingLevel?: 'h2' | 'h3'
  eager?: boolean
}

export default function ProjectCard({ project, headingLevel: Heading = 'h2', eager }: ProjectCardProps) {
  return (
    <article className="project-card" style={{ '--project-color': project.color } as CSSProperties}>
      <div className="project-card-media">
        <img
          src={thumb(project.image)}
          alt=""
          width={800}
          height={500}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        <span className="project-card-type">{project.type}</span>
      </div>

      <div className="project-card-body">
        <p className="project-card-meta">
          {project.industry} <span aria-hidden="true">·</span> {project.year}
        </p>
        <Heading className="project-card-title">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </Heading>
        <p className="project-card-desc">{project.description}</p>
        <span className="project-card-arrow" aria-hidden="true">
          <FiArrowUpRight />
        </span>
      </div>
    </article>
  )
}
