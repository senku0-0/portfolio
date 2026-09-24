import { useState } from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";

export default function ProjectList() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="projects-grid-wrap">
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setSelected} />
        ))}
      </div>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          {selected.media && (
            <div className="project-modal-media">
              {selected.media.type === "image" ? (
                <img src={selected.media.src} alt={selected.title} />
              ) : (
                <video src={selected.media.src} controls autoPlay loop />
              )}
            </div>
          )}
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <div className="project-tech">
            {selected.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="project-links">
            {selected.link && (
              <a href={selected.link} target="_blank" rel="noreferrer" className="project-inline-link">
                Live
              </a>
            )}
            {selected.github && (
              <a href={selected.github} target="_blank" rel="noreferrer" className="project-inline-link">
                Code
              </a>
            )}
            {selected.blog && (
              <a
                href={selected.blog.indexOf("http") === 0 ? selected.blog : "#blog/" + selected.blog}
                target={selected.blog.indexOf("http") === 0 ? "_blank" : undefined}
                rel={selected.blog.indexOf("http") === 0 ? "noreferrer" : undefined}
                className="project-inline-link"
              >
                Read Blog
              </a>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}