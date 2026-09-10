import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

function SelectedWork() {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <SectionTitle>Trabalhos selecionados</SectionTitle>

        <div className="project-stack">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
