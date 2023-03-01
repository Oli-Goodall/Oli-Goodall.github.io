import React from "react";
import "./CVPage.scss"

export const CVPage: React.FunctionComponent = () => {
    return(
        <div className="cv-page">
            <h1 className="cv-page-heading">Curriculum Vitae</h1>
            <h2 className="education">Education
                <p className="education-experience-title">
                2018-2019 | University College London
                <p className="education-body">Master of Research in Speech, Language and Cognition (Distinction)</p> 
                </p>
                <p className="education-experience-title">2014-2018 | University College London
                <p className="education-body">Bachelor of Arts with Honours in Linguistics (Upper Second Class)</p>                 
                </p>


            </h2>
        </div>
    )
}