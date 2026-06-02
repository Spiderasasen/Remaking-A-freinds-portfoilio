import React from 'react';

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