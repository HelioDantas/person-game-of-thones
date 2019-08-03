import React from 'react';
import axios from 'axios';

import './App.css';
import CharacterCard from "./components/CharacterCard";
import CardLoading from "./components/CardLoading";
import Button from './components/Button';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            hasFetched: false,
            actualCharacter: 0
        };
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: "https://www.anapioficeandfire.com/api/characters?page=2&pageSize=20"
        }).then(response => {
            this.setState(state => {
                return {
                    characters: response.data,
                    hasFetched: true
                };
            });
        });

    }

    render() {
        const character = this.state.characters[this.state.actualCharacter];

        return (
            <main className="appRoot__wrapper">
                {this.state.hasFetched ? (
                    <CharacterCard
                        name={character.name}
                        culture={character.culture}
                        gender={character.gender}
                        numberOfSeasons={character.numberOfSeasons}
                        isDead={character.isDead}
                    />
                ) : (
                    <CardLoading/>
                )}
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
