import React from "react";
import "../styles/skill_card.css";

function SkillCard({ name, category, description }) {
    return (
        <div className="skill-card">
            <h3>{name}</h3>
            <h4>{category}</h4>
            <p>{description}</p>
        </div>
    );
}

export default SkillCard;
