import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Navbar.scss";


export const Navbar: React.FunctionComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="mobile-menu">
                <Hamburger toggled={isExpanded} toggle={setIsExpanded} />
            </div>
            <ul className={`menu-items ${isExpanded ? "expanded" : ""}`}>
                <Link to="/" onClick={() => setIsExpanded(false)}>
                    Home
                </Link>
                <Link to="/cv" onClick={() => setIsExpanded(false)}>
                    CV
                </Link>
                <Link to="/links" onClick={() => setIsExpanded(false)}>
                    Links
                </Link>
            </ul>
        </nav>
    )
}
