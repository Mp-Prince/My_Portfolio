import { useState } from 'react';
import { NavLink } from "react-router";

export default function NavBar(prop) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`portfolio-nav ${prop.Mode}`} data-bs-theme={`${prop.Mode}`}>
            <div className="container portfolio-nav-inner">
                <NavLink to="/" className="brand-mark" end><span className="brand-symbol">&lt;/&gt;</span><span className="brand-name">Maheboob</span><span className="brand-dot">.</span></NavLink>
                <button className="navbar-toggler" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-controls="navbarNav" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                </button>
                <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''} text-${prop.text}`} id="navbarNav">
                    <ul className="navbar-nav portfolio-links ms-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" onClick={closeMenu} end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Education" className="nav-link" onClick={closeMenu} end>Education</NavLink>
                        </li>
                    </ul>
                    <div className="theme-control">
                        <input className="form-check-input" type="checkbox" id="checkNativeSwitch" onChange={prop.toggel} checked={prop.Mode === 'light'} />
                        <label className={`form-check-label text-${prop.text}`} htmlFor="checkNativeSwitch">
                            {prop.Mode === 'dark' ? 'Light mode' : 'Dark mode'}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
NavBar.defaultProps = {
    Mode: 'light',
    toggel: 'light',
    text : 'Dark'
}
