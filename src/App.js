import React from 'react';

import './App.css';
import CharacterCard from "./components/CharacterCard";
import Button from './components/Button';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [
                {
                    name: "Jon Snow",
                    culture: "Northmen",
                    gender: "Male",
                    numberOfSeasons: 7,
                    isDead: true
                },
                {
                    name: "Daenerys Targaryen",
                    culture: "Westerosi",
                    gender: "Female",
                    numberOfSeasons: 7,
                    isDead: false
                },
                
            ],
            actualCharacter: 0
        };
    }

    render() {
        const character = this.state.characters[this.state.actualCharacter];

        return (
            <main className="appRoot__wrapper">
                <CharacterCard
                    name={character.name}
                    culture={character.culture}
                    gender={character.gender}
                    numberOfSeasons={character.numberOfSeasons}
                />
                <Button clickHandler={() => {
                    this.setState(state => ({
                        actualCharacter: (state.actualCharacter + 1) % 2
                    }));
                }}/>
            </main>
        );
    }
}

export default App;
