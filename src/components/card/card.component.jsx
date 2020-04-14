import React from "react";
import "./card.style.css";

export const Card = (probs) => {
    return (
        <div className="card-container">
            <img alt="monster" src={ `https://robohash.org/
            ${probs.monster.id}?set=set2&size=180x180` }></img>
            <h3>{ probs.monster.name }</h3>
            <p>{ probs.monster.email }</p>
        </div>
    )
}