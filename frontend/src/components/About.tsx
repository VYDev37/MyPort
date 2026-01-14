const About = () => {
    const journeyCards = [
        { id: 1, title: "Frontend Journey", desc: "Started with HTML5 and CSS3, then moved to React and exploring new frameworks and libraries." },
        { id: 2, title: "Backend Journey", desc: "My backend journey began with Express.js (Node.js), focusing on traditional APIs. I then migrated to the Hono framework (API server) powered by the Bun.js runtime for superior speed and Type Safety with TypeScript. Currently expanding expertise with Go for high-performance microservices." },
        { id: 3, title: "Other Skills Journey", desc: "Currently learning server-side development with Bun.js and TypeScript." }
    ];

    return (
        <section id="about" className="container-fluid text-center py-5 w-100" style={{ background: "#2c313c" }}>
            <div className="text-warning fs-1 mb-3"></div>
            <h1 className="fw-bold mb-3">About me</h1>
            <p className="text-light fs-4 mt-3">A self-taught full-stack developer</p>

            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-4 mt-5">
                    <h3 className="text-start">My Programming Journey</h3>
                    <p className="lead mt-4 text-justify">I began to learn Programming about 5 years ago and Website Development recently, completely self-taught from online resources and lots of tests. I started with C++ and Python as I was curious about Game and Discord Bot Development, but then switched to website development since I also curious on how websites and apps integrated.</p>
                    <p className="lead mt-4 text-justify">I'm still learning every day, but I've got used with TypeScript and used it for both frontend and backend things. I love the problem-solving aspect of coding and the satisfaction of realizing an idea to something real in the browser.</p>
                </div>
                <div className="col-10 col-md-4 mt-4 ms-4">
                    {journeyCards.map(journey => (
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