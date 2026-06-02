import React from "react";

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