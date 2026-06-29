import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)

  if (!project) {
    return (
      <section className="project-detail missing-project">
        <div className="detail-inner">
          <p className="detail-eyebrow">Project Not Found</p>
          <h1>That project page does not exist yet.</h1>
          <Link to="/" className="detail-button">Back Home</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="project-detail">
      <div className="detail-hero" style={{ '--accent-color': project.color } as React.CSSProperties}>
        <div className="detail-inner detail-hero-grid">
          <div>
            <Link to="/#work" className="back-link">← Back to work</Link>
            <p className="detail-eyebrow">{project.category} · {project.year}</p>
            <h1>{project.title}</h1>
            <p className="detail-lead">{project.longDescription}</p>

            <div className="detail-tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>

          <div className="detail-cover" style={{ background: project.imageGradient }}>
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={`${project.title} cover`}
                onError={event => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            ) : null}
            <div className="detail-cover-card">
              <span>Case Study</span>
              <strong>{project.title}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-inner detail-content-grid">
        <article className="detail-story-card">
          <span>Problem</span>
          <p>{project.problem}</p>
        </article>
        <article className="detail-story-card">
          <span>Solution</span>
          <p>{project.solution}</p>
        </article>
        <article className="detail-story-card">
          <span>Outcome</span>
          <p>{project.outcome}</p>
        </article>
      </div>

      <div className="detail-inner detail-split">
        <div>
          <p className="detail-eyebrow">Highlights</p>
          <h2>What this project includes</h2>
        </div>
        <ul className="detail-highlights">
          {project.highlights.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div className="detail-inner">
        <div className="gallery-heading">
          <div>
            <p className="detail-eyebrow">Project Images</p>
            <h2>Where your screenshots go</h2>
          </div>
          <p>
            Add images inside <code>public/projects</code>, then update <code>coverImage</code> and <code>galleryImages</code> in <code>data/projects.ts</code>.
          </p>
        </div>

        <div className="detail-gallery">
          {(project.galleryImages || []).map((src, index) => (
            <div key={src} className="gallery-item" style={{ background: project.imageGradient }}>
              <img
                src={src}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
                onError={event => {
                  event.currentTarget.style.display = 'none'
                }}
              />
              <span>Screenshot {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
