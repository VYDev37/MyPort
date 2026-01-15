import { useState } from 'react';
import appConfig from '../../app.config';

const NavBar = () => {
    const [opened, setOpened] = useState<boolean>(false);
    const navLinks = appConfig.navLinks;

    return (
        <header className="bg-dark shadow">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <span className="fs-4 ps-3 fw-bold" style={{ color: "var(--fav-color)" }}>My Page</span>
                </a>
                <button className="navbar-toggler" type="button" onClick={() => setOpened(!opened)} aria-expanded={opened}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${opened ? 'show' : ''}`}>
                    <ul className="navbar-nav mx-auto">
                        {navLinks.map(link => (
                            <a key={link.id} className="nav-link btn btn-link text-light text-decoration-none ms-5" href={link.ref}>
                                {link.label}
                            </a>
                        ))}
                    </ul>
                </div>
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <span className="fs-4 ps-3 fw-bold" style={{ color: "var(--fav-color)" }}> {appConfig.ownerName}</span>
                </a>
            </nav>
            
        </header>
    );
}

export default NavBar;