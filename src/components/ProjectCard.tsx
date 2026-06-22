// src/components/ProjectCard.tsx
import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
};

function ProjectCard({ title, category, description, tech, link }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-preview">
        <div className="preview-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="preview-content">
          <h3>{title}</h3>
          <p>{category}</p>
        </div>
      </div>

      <div className="project-content">
        <p className="project-category">{category}</p>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tech">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <a href={link} target="_blank">
          View Website
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;