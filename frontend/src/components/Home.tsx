import appConfig from "../../app.config";

const Home = () => {
    return (
        <section id="home" className="container-fluid bg-dark text-center py-5 w-100" style={{ height: '80vh' }}>
            <div className="text-warning fs-1 mb-3"></div>
            <div className="mt-5">
                <h1 className="display-4 fw-bold mb-3">Welcome to my page!</h1>
                <h2 className="h3 fw-semibold">Hi, I'm <span style={{ color: "var(--fav-color)" }}>{appConfig.ownerName}</span>.</h2>
                <div className="row d-flex fs-5 mt-5 justify-content-center">
                    <div className="col-10 col-md-5">{appConfig.ownerDescription}</div>
                </div>
            </div>
            <div className="col-12 col-md-12 d-flex justify-content-center mt-5">
                <a className="button text-white rounded-2 border-0 outline-0 text-decoration-none fs-6 py-2 px-4 fs-5 my-4 mx-3 fw-bold" 
                    style={{ background: "var(--fav-color)" }} href="/api/download-cv" target="_blank" rel="noopener noreferrer"><i className="fas fa-download"></i>Download CV</a>
                <a className="button text-white bg-transparent border-2 rounded-2 outline-0 fs-6 text-decoration-none py-2 px-4 fs-5 my-4 mx-3 fw-bold"
                    style={{ borderColor: "var(--fav-color)", borderStyle: "solid" }} href="#about">About me</a>
            </div>
        </section>
    )
}

export default Home;