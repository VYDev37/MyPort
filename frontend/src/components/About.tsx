import appConfig from "../../app.config";

const About = () => {
    return (
        <section id="about" className="container-fluid text-center py-5 w-100" style={{ background: "#2c313c" }}>
            <div className="text-warning fs-1 mb-3"></div>
            <h1 className="fw-bold mb-3">About me</h1>
            <p className="text-light fs-4 mt-3">{appConfig.role}</p>

            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-4 mt-5">
                    <h3 className="text-start">My Programming Journey</h3>
                    {appConfig.journey.description.map((desc, index) => (
                        <p key={index} className="lead mt-4 text-justify">{desc}</p>
                    ))}
                </div>
                <div className="col-10 col-md-4 mt-4 ms-4">
                    {appConfig.journey.cards.map(journey => (
                        <div key={journey.id} className="card p-0 bg-dark text-white my-3">
                            <div className="card-body text-justify">
                                <p className="fw-bold">{journey.title}</p>
                                <p>{journey.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    )
}

export default About;