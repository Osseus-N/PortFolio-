import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

function Projects({ projects }) {
  return (
    <section id="projects" className="spa-section">
      <h2 className="section-title">PROJECTS</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;    