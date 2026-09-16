import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/projects";

import "../styles/projects.css";

function Projects() {
    return (
        <section className="projects-page">

            <div className="page-heading">

                <span>
                    ARCHIVE / PROJECTS
                </span>

                <h1>
                    PROJECT LOG
                </h1>

                <p>
                    A collection of completed and ongoing missions.
                </p>

            </div>


            <div className="projects-list">

                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}

            </div>

        </section>
    );
}

export default Projects;