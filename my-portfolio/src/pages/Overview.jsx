import { characters } from "../data/characters";

import "../styles/overview.css";    

function Overview() {

    const character = characters.norlito;

    return (
        <section className="overview">

            <PixelHeader character={character} />


            <div className="overview-grid">

                {/* ABOUT */}

                <article className="pixel-panel about-panel">

                    <div className="panel-title">
                        ABOUT ME
                    </div>

                    <p>
                        {character.description}
                    </p>

                    <p>
                        I enjoy building applications that solve
                        practical problems while learning new
                        technologies along the way.
                    </p>

                </article>


                {/* SKILLS */}

                <article className="pixel-panel">

                    <div className="panel-title">
                        SKILL INVENTORY
                    </div>

                    <div className="skill-list">

                        {character.skills.map(skill => (
                            <span
                                className="skill-item"
                                key={skill}
                            >
                                {skill}
                            </span>
                        ))}

                    </div>

                </article>


                {/* STATS */}

                <article className="pixel-panel stats-panel">

                    <div className="panel-title">
                        CHARACTER STATS
                    </div>

                    {Object.entries(character.stats).map(
                        ([label, value]) => (
                            <StatBox
                                key={label}
                                label={label.toUpperCase()}
                                value={value}
                            />
                        )
                    )}

                </article>


                {/* QUEST */}

                <article className="pixel-panel quest-panel">

                    <div className="panel-title">
                        CURRENT QUEST
                    </div>

                    <div className="quest">

                        <span className="quest-icon">
                            !
                        </span>

                        <div>

                            <strong>
                                BUILD THE NEXT PROJECT
                            </strong>

                            <p>
                                Continue improving skills,
                                creating projects, and
                                learning new technologies.
                            </p>

                        </div>

                    </div>

                </article>

            </div>

        </section>
    );
}

export default Overview;