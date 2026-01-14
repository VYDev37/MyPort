import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavBar from "./NavBar";
import Skills from "./Skills";
import Works from "./Works";

import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import '../App.css';

const PackedComp = () => {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Works />
            <Contact />
        </>
    )
}

export { PackedComp, NavBar };