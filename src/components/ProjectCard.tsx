import type { CSSProperties } from "react";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const accentStyle = {
    "--accent-color": project.color,
  } as CSSProperties;

  return (
    <a
      className="project-card"
      href={`/projects/${project.slug}`}
      style={accentStyle}
      aria-label={`Open ${project.title} project page`}
    >
      <div className="project-visual" style={{ background: project.color }}>
        <img
          className="project-cover-img"
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

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
          <strong>{String(index + 1).padStart(2, "0")}</strong>
          <span>Open Case Study</span>
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
          {project.tags.map((tag) => (
            <span key={tag} className="card-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="card-arrow">
          <span>View Full Project</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}