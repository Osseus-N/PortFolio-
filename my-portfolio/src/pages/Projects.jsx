import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

 function Projects({ projects }) {
  return (
    <section id="projects" className="spa-section">
      <h2 className="section-title">PROJECTS</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="pixel-panel project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;