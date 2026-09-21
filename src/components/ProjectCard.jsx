import Reveal from "./Reveal";

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-sticky"
      style={{
        top: `${100 + index * 18}px`,
        zIndex: index + 1,
      }}
    >
      <Reveal>
        <article
          className={`project-card ${
            index % 2 !== 0 ? "project-card-reverse" : ""
          }`}
        >
          <div className="project-content">
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a href={project.link} className="project-link">
              Ver projeto
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </article>
      </Reveal>
    </div>
  );
}

export default ProjectCard;
