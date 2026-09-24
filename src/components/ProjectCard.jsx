import { useState } from "react";

export default function ProjectCard({ project, onOpen }) {
  const { title, description, tech, media } = project;
  const [mediaFailed, setMediaFailed] = useState(false);
  const hasMedia = !!media && !mediaFailed;

  return (
    <div
      className={"project-card" + (hasMedia ? " with-media" : " no-media")}
      onClick={() => onOpen(project)}
    >
      {hasMedia && (
        <div className="project-media">
          {media.type === "image" ? (
            <img src={media.src} alt={title} onError={() => setMediaFailed(true)} />
          ) : (
            <video src={media.src} muted loop playsInline onError={() => setMediaFailed(true)} />
          )}
        </div>
      )}
      <div className="project-body">
        <div className="project-title-row">
          <span className="project-folder" aria-hidden="true">&#128193;</span>
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <div className="project-tech">
          {tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <span className="project-expand-hint">View details <span aria-hidden="true">&#8594;</span></span>
      </div>
    </div>
  );
}