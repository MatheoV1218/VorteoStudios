import type { CSSProperties, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import SectionTitle from './SectionTitle'
import type { Project } from '../data/projects'
import './ProjectSpiral.css'

interface ProjectSpiralProps {
  projects: Project[]
}

export default function ProjectSpiral({ projects }: ProjectSpiralProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  })

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget

    if (target.dataset.dragging === 'true') {
      e.preventDefault()
    }
  }

  return (
    <section id="work" className="projects-section">
      <div className="projects-header">
        <SectionTitle
          eyebrow="Selected Work"
          heading="Projects that got results"
          accentWord="got results"
          sub="Drag, swipe, or scroll through the project reel and open any case study to see the full build."
        />
      </div>

      <div className="projects-embla" ref={emblaRef}>
        <div className="projects-carousel">
          {projects.map(project => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="project-showcase-card"
              aria-label={`View ${project.title} case study`}
              style={{ '--project-color': project.color } as CSSProperties}
              draggable={false}
              onClick={handleClick}
            >
              <div className="project-showcase-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  draggable={false}
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
      </div>
    </section>
  )
}