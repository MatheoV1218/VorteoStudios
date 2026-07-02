import { Link, useParams } from "react-router-dom";
import type { CSSProperties } from "react";
import { projects } from "../data/projects";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="project-detail missing-project">
        <div className="detail-inner">
          <p className="detail-eyebrow">Project Not Found</p>
          <h1>That project page does not exist yet.</h1>
          <br />
          <Link to="/" className="detail-button">
            ← Back Home
          </Link>
        </div>
      </section>
    );
  }

  const accentStyle = { "--accent-color": project.color } as CSSProperties;

  return (
    <section className="project-detail">
      <div className="detail-hero" style={accentStyle}>
        <div className="detail-inner detail-hero-grid">
          <div>
            <Link to="/#work" className="back-link">
              ← Back to work
            </Link>

            <p className="detail-eyebrow">
              {project.category} · {project.year}
            </p>
            <h1>{project.title}</h1>
            <p className="detail-lead">{project.longDescription}</p>

            <div className="detail-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="detail-actions">
              {project.liveUrl && (
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-site-btn"
                  >
                    <span>🚀 Launch Live Website</span>

                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H9M17 7V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="detail-cover" style={{ background: project.color }}>
            <img
              src={project.image}
              alt={`${project.title} cover`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="detail-cover-card">
              <span>Case Study</span>
              <strong>{project.title}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-inner detail-content-grid">
        <article className="detail-story-card">
          <span>Overview</span>
          <p>{project.description}</p>
        </article>
        <article className="detail-story-card">
          <span>Goal</span>
          <p>{project.longDescription}</p>
        </article>
        <article className="detail-story-card">
          <span>Tools Used</span>
          <p>{project.tags.join(", ")}</p>
        </article>
      </div>

      <div className="detail-inner detail-split">
        <div>
          <p className="detail-eyebrow">Highlights</p>
          <h2>What this project includes</h2>
        </div>
        <ul className="detail-highlights">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="detail-inner">
        <div className="gallery-heading">
          <div>
            <p className="detail-eyebrow">Project Images</p>
            <h2>Project screenshots</h2>
          </div>
        </div>

        <div className="detail-gallery">
          {(project.gallery || []).map((src, index) => (
            <div
              key={src}
              className="gallery-item"
              style={{ background: project.color }}
            >
              <img
                src={src}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span>Screenshot {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
