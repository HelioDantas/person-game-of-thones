import React from "react";

function CharacterCard() {
    return (
        <article className="characterCard">
            <header className="characterCard-header__wrapper --isDead">
                <h1 className="characterCard-name">Joffrey</h1>
            </header>
            <ul className="characterCard-body">
                <li className="characterCard-culture">culture: Northmen</li>
                <li className="characterCard-gender">gender: Male</li>
            </ul>
            <footer className="characterCard-seasonsAppearence">
                featured in N seasons
            </footer>
        </article>
    );
}

export default CharacterCard;