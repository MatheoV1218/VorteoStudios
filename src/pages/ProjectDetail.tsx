import { useState, type CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiCheck, FiMaximize2 } from 'react-icons/fi'
import { Breadcrumbs } from '../components/PageHero'
import { BrowserFrame, PhoneFrame } from '../components/Frames'
import Lightbox from '../components/Lightbox'
import NotFound from './NotFound'
import { getProject, hostname, projects } from '../data/projects'
import { srcSet, thumb } from '../lib/images'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [lightbox, setLightbox] = useState<number | null>(null)

  if (!project) return <NotFound />

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]
  const host = project.liveUrl ? hostname(project.liveUrl) : undefined
  const gallery = (project.gallery ?? []).map((src, i) => ({
    src,
    alt: `${project.title} ${project.category.toLowerCase()} — screenshot ${i + 1}`,
  }))
  // Break the write-up into two paragraphs so it reads less like a wall of text.
  const sentences = project.longDescription.match(/[^.!?]+[.!?]+/g) ?? [project.longDescription]
  const mid = Math.ceil(sentences.length / 2)
  const paragraphs = [sentences.slice(0, mid), sentences.slice(mid)].map(s => s.join('').trim()).filter(Boolean)

  return (
    <article className="case" style={{ '--project-color': project.color } as CSSProperties}>
      {/* ── Hero ── */}
      <header className="case-hero">
        <div className="case-hero-bg" aria-hidden="true" />
        <div className="container">
          <Breadcrumbs crumbs={[{ label: 'Work', to: '/projects' }, { label: project.title }]} />

          <div className="case-hero-grid">
            <div>
              <p className="eyebrow case-eyebrow">{project.category}</p>
              <h1 className="display case-title">{project.title}</h1>
              <p className="case-lead">{project.description}</p>
              <div className="case-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Visit live site
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}
                <Link to="/contact" className="btn btn-ghost">
                  Start a similar project
                </Link>
              </div>
            </div>

            <dl className="case-meta">
              <div>
                <dt>Industry</dt>
                <dd>{project.industry}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{project.type}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              {host && (
                <div>
                  <dt>Website</dt>
                  <dd>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      {host}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        <div className="container case-cover">
          <BrowserFrame url={host}>
            <img
              src={project.image.replace('/projects/', '/projects/md/')}
              srcSet={srcSet(project.image)}
              sizes="(max-width: 1296px) 92vw, 1200px"
              alt={`${project.title} homepage designed and built by Vorteo Studios`}
              width={1600}
              height={1000}
              fetchPriority="high"
            />
          </BrowserFrame>
        </div>
      </header>

      {/* ── Overview ── */}
      <section className="section case-overview" aria-labelledby="overview-heading">
        <div className="container case-overview-grid">
          <div className="reveal">
            <p className="eyebrow">Overview</p>
            <h2 id="overview-heading" className="display case-h2">
              The project
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="case-body">
                {p}
              </p>
            ))}
          </div>

          <aside className="case-features reveal" style={{ '--delay': '0.1s' } as CSSProperties}>
            <h2 className="case-features-title">What we built</h2>
            <ul>
              {project.highlights.map(h => (
                <li key={h}>
                  <span className="case-check" aria-hidden="true">
                    <FiCheck />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <h3 className="case-features-sub">Built with</h3>
            <ul className="chip-row" aria-label="Technologies">
              {project.tags.map(tag => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ── Gallery ── */}
      {gallery.length > 0 && (
        <section className="section section-snow case-gallery-section" aria-labelledby="gallery-heading">
          <div className="container">
            <div className="reveal">
              <p className="eyebrow">Inside the build</p>
              <h2 id="gallery-heading" className="display case-h2">
                Screens &amp; details
              </h2>
            </div>

            <div className={`case-gallery ${project.wideGallery ? 'is-wide' : ''}`}>
              {gallery.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  className="case-shot reveal"
                  style={{ '--delay': `${(i % 2) * 0.08}s` } as CSSProperties}
                  onClick={() => setLightbox(i)}
                  aria-label={`Enlarge screenshot ${i + 1}`}
                >
                  <BrowserFrame url={host}>
                    <img
                      src={thumb(img.src)}
                      srcSet={srcSet(img.src)}
                      sizes={i === 0 || project.wideGallery ? '(max-width: 1296px) 92vw, 1200px' : '(max-width: 900px) 92vw, 600px'}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </BrowserFrame>
                  <span className="case-shot-zoom" aria-hidden="true">
                    <FiMaximize2 />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Mobile ── */}
      {project.mobileImage && (
        <section className="section section-night case-mobile" aria-labelledby="mobile-heading">
          <div className="case-mobile-glow" aria-hidden="true" />
          <div className="container case-mobile-grid">
            <div className="reveal">
              <p className="eyebrow">Mobile-first</p>
              <h2 id="mobile-heading" className="display case-h2">
                Built for the phone <span className="accent">in your pocket.</span>
              </h2>
              <p className="case-body">
                Most visitors meet a business on their phone first. {project.title} was designed and tested on small
                screens from day one — readable type, thumb-friendly buttons, and layouts that feel native at any size.
              </p>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                  Try it on your phone
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
            <div className="case-phone reveal" style={{ '--delay': '0.1s' } as CSSProperties}>
              <PhoneFrame>
                <img
                  src={project.mobileImage}
                  alt={`${project.title} website on a phone`}
                  width={600}
                  height={1299}
                  loading="lazy"
                  decoding="async"
                />
              </PhoneFrame>
            </div>
          </div>
        </section>
      )}

      {/* ── Next project ── */}
      <nav className="section case-next" aria-label="Next project">
        <div className="container">
          <Link to={`/projects/${next.slug}`} className="case-next-card" style={{ '--next-color': next.color } as CSSProperties}>
            <div className="case-next-copy">
              <span className="eyebrow">Next project</span>
              <strong className="display">{next.title}</strong>
              <span className="case-next-cat">{next.category}</span>
              <span className="case-next-go">
                View case study <FiArrowRight aria-hidden="true" />
              </span>
            </div>
            <div className="case-next-media">
              <img src={thumb(next.image)} alt="" width={800} height={500} loading="lazy" decoding="async" />
            </div>
          </Link>
          <div className="case-back">
            <Link to="/projects" className="text-link">
              Back to all work <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>

      {lightbox !== null && (
        <Lightbox images={gallery} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </article>
  )
}
