import React from 'react';
import "../styles/fun_stuff.css"

function FunStuff({ title, items }) {
    return (
        <div className="fun-card">
            <h4>{title}</h4>

            {Array.isArray(items) ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>{items}</p>
            )}
        </div>
    );
}
export default FunStuff;