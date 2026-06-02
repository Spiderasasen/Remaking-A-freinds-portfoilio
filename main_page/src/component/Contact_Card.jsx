import React from 'react';
import "../styles/contacts.css"

function ContactCard({name, link}) {
    if(name !== "Email" && name !== "Phone"){
        return (
            <div className="contact-card">
                <h3>{name}</h3>
                <a href={link} target="_blank">{link}</a>
            </div>
        );
    }
    else if(name === "Email"){
        return (
            <div className="contact-card">
                <h3>{name}</h3>
                <a href={`mailto:${link}`}>{link}</a>
            </div>
        );
    }
    else{
        return(
            <div className="contact-card">
                <h3>{name}</h3>
                <p>{link}</p>
            </div>
        );
    }
}
export default ContactCard;