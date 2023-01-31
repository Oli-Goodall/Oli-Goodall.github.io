import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <p className="footer-name">Oli Goodall</p>
            <Link to={{ pathname: "https://www.linkedin.com/in/oligoodall/"}} target="_blank">LinkedIn</Link>
            <Link to={{ pathname: "https://github.com/Oli-Goodall"}} target="_blank">Github</Link>
        </div>
    );
};