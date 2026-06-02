import React from "react";
import "../styles/project-card.css"

function ProjectCard({title, role, description}){
    return(
        <div className="project-card">
            <h3>{title}</h3>
            <h4>{role}</h4>
            <p>{description}</p>
        </div>
    );
}
export default ProjectCard;