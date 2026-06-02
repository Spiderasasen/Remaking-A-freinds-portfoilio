import {useNavigate} from "react-router-dom";
import "../styles/main.css"
import React from "react";
import Tubby from "../assets/image_of_tubby.jpeg";
import fun_stuff from "../data/fun_stuff.json";
import FunStuff from "../component/Fun_Stuff.jsx";

function About_Me() {
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
                    <h1>About Me</h1>
                </div>

                <div className="about">
                    <figure>
                        <img src={Tubby} alt="A picture of Divesh Anchaliya"/>
                        <figcaption>Image of Divesh Anchaliya when he graduated Elon University</figcaption>
                    </figure>
                    <h3>About me</h3>
                    <p>My name is Divesh Anchaliya, and I am a sophomore at Elon University majoring in Computer Science and Mathematics on the Pre-Law track. I am aspiring to attend Law School and to specialize in Patent and Intellectual Property Law. I have a passion for coding, solving complex problems, engaging in mathematical research, and playing tennis. I am constantly seeking out new learning opportunities and experiences to further my understanding of technology and its applications.</p>
                </div>

                <div>
                    <h3>Fun Facts of Me:</h3>
                    <div className="fun-stuff">
                        <FunStuff title="Favorite Foods" items={fun_stuff.favoriteFoods} />
                        <FunStuff title="Favorite Movies" items={fun_stuff.favoriteMovies} />
                        <FunStuff title="Favorite TV Shows" items={fun_stuff.favoriteTVShows} />
                        <FunStuff title="Favorite Songs" items={fun_stuff.favoriteSongs} />
                        <FunStuff title="Favorite Sports" items={fun_stuff.favoriteSports} />
                    </div>
                </div>
            </main>
        </>
    )
}
export default About_Me;