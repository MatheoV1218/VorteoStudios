import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import type { Project } from '../data/projects'
import './ProjectSpiral.css'

interface ProjectSpiralProps {
  projects: Project[]
}

export default function ProjectSpiral({ projects }: ProjectSpiralProps) {
  return (
    <section id="work" className="projects-section">
      <div className="projects-header">
        <SectionTitle
          eyebrow="Selected Work"
          heading="Projects that got results"
          accentWord="got results"
          sub="Swipe or scroll through the project reel and open any case study to see the full build."
        />
      </div>

      <div className="projects-carousel" aria-label="Project carousel">
        {projects.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="project-showcase-card"
            aria-label={`View ${project.title} case study`}
            style={{ '--project-color': project.color } as CSSProperties}
          >
            <div className="project-showcase-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>

            <div className="project-showcase-content">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <strong>View Case Study →</strong>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
