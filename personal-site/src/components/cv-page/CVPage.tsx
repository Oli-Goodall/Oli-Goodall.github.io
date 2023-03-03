import React from "react";
import "./CVPage.scss"

export const CVPage: React.FunctionComponent = () => {
    return(
        <div className="cv-page">
            <h1 className="cv-page-heading">Curriculum Vitae</h1>
            <h2 className="education">Education
                <p className="education-experience-title">
                University College London | 2018-2019 
                <p className="education-body">Master of Research in Speech, Language and Cognition (Distinction)</p> 
                </p>
                <p className="education-experience-title">University College London | 2014-2018
                <p className="education-body">Bachelor of Arts with Honours in Linguistics (Upper Second Class)</p>                 
                </p>
            </h2>
            <h2 className="education">Experience
                <p className="education-experience-title">
                TechSwitch Bootcamp | Trainee Full Stack Developer | August 2022-October 2022</p>
                <p className="education-experience-title">Opus 2 International | Speech-to-Text Editor | February 2020-July 2022</p>
                <p className="education-experience-title">Lady Dinah's Cat Emporium | Team Member | March 2019-February 2020</p>
            </h2>
        </div>
    )
}