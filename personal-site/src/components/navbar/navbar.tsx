import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";


export const Navbar: React.FunctionComponent = () => {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <ul className="menu-items">
                <Link className="name-top-left" to="/">
                    Oli Goodall
                </Link>
                <div className="nav-links">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/cv">
                        CV
                    </Link>
                    <Link to="/projects">
                        Projects
                    </Link>
                </div>
            </ul>
        </nav>
    )
}
