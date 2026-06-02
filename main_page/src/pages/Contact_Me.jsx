import "../styles/main.css"
import {useNavigate} from "react-router-dom";
import React from "react";
import contacts from "../data/contacts.json";
import ContactCard from "../component/Contact_Card.jsx";

function Contact_Me() {
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
                    <h1>Contact Me</h1>
                </div>
            </main>
        </>
    )
}
export default Contact_Me;