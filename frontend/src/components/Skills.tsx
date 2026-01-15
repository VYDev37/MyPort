import appConfig from "../../app.config";

const Skills = () => {
    const skillCards = appConfig.skills.cards;

    return (
        <section id="skills" className="container-fluid bg-dark text-center py-5 w-100">
            <div className="text-warning fs-1 mb-3"></div>
            <h1 className="fw-bold mb-3">Skills & Technologies</h1>
            <p className="text-light fs-4 mt-3">Technologies & Programming Languages I have used and familiar with:</p>

            <div className="row d-flex justify-content-center mt-4">
                <div className="col-10 col-md-4">
                    {skillCards.slice(0, Math.ceil(skillCards.length / 2)).map(skill => (
                        <div key={skill.id} className="card p-0 bg-dark text-white my-3">
                            <div className="card-body text-start">
                                <div className="d-flex">
                                    <i className={`fs-5 ${skill.icon}`}></i>
                                    <p className="fw-bold ms-2">{skill.title}</p>
                                </div>
                                <p>{skill.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-10 col-md-4 ms-4">
                    {skillCards.slice(Math.ceil(skillCards.length / 2)).map(skill => (
                        <div key={skill.id} className="card p-0 bg-dark text-white my-3">
                            <div className="card-body text-start">
                                <div className="d-flex">
                                    <i className={`fs-5 ${skill.icon}`}></i>
                                    <p className="fw-bold ms-2">{skill.title}</p>
                                </div>
                                <p>{skill.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    )
}

export default Skills;