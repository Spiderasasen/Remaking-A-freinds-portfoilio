import "../styles/main.css"
import {useNavigate} from "react-router-dom";

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
            <h1>Contact Me</h1>
        </>
    )
}
export default Contact_Me;