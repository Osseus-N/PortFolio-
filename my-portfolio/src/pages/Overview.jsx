import "../styles/overview.css";    

function Overview({character}) {

    return (
        <section id="overview" className="spa-section">
          <h2 className="section-title">OVERVIEW</h2>
          <div className="pixel-panel">
            <p>{character.description}</p>
          </div>

          <h3 className="subsection-title">SKILLS & TOOLKIT</h3>
          <div className="skill-tags">
           {character.skills.map((skill, index) => (
            <span key={index} className="tag">{skill}</span>
            ))}
          </div>
        </section>
    );
}

export default Overview;