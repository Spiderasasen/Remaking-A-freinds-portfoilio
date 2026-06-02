import "../styles/main.css"
import {useNavigate} from "react-router-dom";
import React from "react";
import projects from "../data/projects.json";
import ProjectCard from "../component/Project_Card.jsx";

function Projects() {
    //simple nav
    const navigate = useNavigate();
    const navItems = [
        { id: "home", text: "Home" },
        { id: "project", text: "Projects" },
        { id: "about", text: "About Me" },
        { id: "contact", text: "Contact Me" },
    ];

    //checking what the user clicks
    onclick = (e) => {
        switch (e.target.id) {
            case "home":
                navigate("/");
                break;
            case "project":
                navigate("/projects");
                break;
            case "about":
                navigate("/about");
                break;
            case "contact":
                navigate("/contact");
                break;
        }
    }

    return(
        <>
            {/*header section*/}
            <header>
                <nav>
                    <ul>
                        <li id={"home"}>Home</li>
                        <li id={"project"}>Projects</li>
                        <li id={"about"}>About Me</li>
                        <li id={"contact"}>Contact Me</li>
                    </ul>
                </nav>
            </header>

            {/*main section*/}
            <main>
                <div className="intro">
                    <h1>Projects</h1>
                    <h2>Recent Projects that I had worked on:</h2>
                </div>
                <div className="projects">
                    {projects.map((project) => (
                        <ProjectCard
                             key={project.id}
                             title={project.title}
                             role={project.role}
                             description={project.description}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}
export default Projects;