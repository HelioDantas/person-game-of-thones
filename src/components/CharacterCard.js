import React from "react";

function CharacterCard(props) {
    return (
        <article className="characterCard">
            <header className="characterCard-header__wrapper --isDead">
                <h1 className="characterCard-name">{props.name}</h1>
            </header>
            <ul className="characterCard-body">
                <li className="characterCard-culture">culture: {props.culture}</li>
                <li className="characterCard-gender">gender: {props.gender}</li>
            </ul>
            <footer className="characterCard-seasonsAppearence">
                featured in {props.numberOfSeasons} seasons
            </footer>
        </article>
    );
}

export default CharacterCard;