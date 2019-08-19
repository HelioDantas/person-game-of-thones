import React from "react";

function CharacterCard(props) {
    return (
        <article
            onAnimationEnd={props.animationEndHandler}
            className={`characterCard ${props.additionalClass || ""}`}>
            <header className={`characterCard-header__wrapper ${props.isDead ? "--isDead" : ""}`}>
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