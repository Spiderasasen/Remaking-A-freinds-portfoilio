import React from "react";
import skills from "../data/skills.json";
import SkillCard from "../component/Skill_Card.jsx"
import "../styles/main.css";

function Home() {
    return(
        <>
            {/*header section*/}
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            {/*main section*/}
            <main>
                <div className="intro">
                    <h1>Divesh Anchaliya | Computer Science & Mathematics</h1>
                    <p>Motivated computer science sophomore at <a href="https://www.elon.edu/" target="_blank">Elon University</a> seeking opportunities to apply programming knowledge and gain experience in the field through internships and projects.</p>
                </div>

                {/*all the skills go here*/}
                <p>Here are some skills I have:</p>
                <div className="skills">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.id}
                            name={skill.name}
                            category={skill.category}
                            description={skill.description}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}
export default Home;