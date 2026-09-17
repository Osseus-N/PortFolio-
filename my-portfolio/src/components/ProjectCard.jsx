import githubIcon from "../assets/github/github-normal.png";

function ProjectCard({ project }) {
    return (
        <article className="project-card">

            <div className="project-number">
                #{String(project.id).padStart(2, "0")}
            </div>

            <div className="project-info">

                <span className="project-type">
                    {project.type}
                </span>
                <div className="project-title">
                    <h2>{project.title}</h2>

                <button className="project-link" 
                onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}>
                <img src={githubIcon} alt="GitHub repository link" />
                </button>
            </div>
                <p>
                    {project.description}
                </p>


                <div className="project-tech">

                    {project.tech.map(technology => (
                        <span
                            key={technology}
                            className="tech-tag"
                        >
                            {technology}
                        </span>
                    ))}

                </div>

            </div>


            <div className="project-status">

                <span>
                    STATUS
                </span>

                <strong>
                    {project.status}
                </strong>

            </div>

        </article>
    );
}

export default ProjectCard;