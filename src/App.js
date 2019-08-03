import React from 'react';
import axios from 'axios';

import './App.css';
import CharacterCard from "./components/CharacterCard";
import CardLoading from "./components/CardLoading";
import Button from './components/Button';

const IS_LOADING = Symbol("IS_LOADING");
const ENTERING_CARD = Symbol("ENTERING_CARD");
const CARD_VISIBLE = Symbol("CARD_VISIBLE");
const LEAVING_CARD = Symbol("LEAVING_CARD");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            currentState: IS_LOADING,
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
                    currentState: CARD_VISIBLE
                };
            });
        });

    }

    render() {
        return (
            <main className="appRoot__wrapper">
                {this.renderCard()}
                <Button clickHandler={() => {
                    this.setState(state => ({
                        actualCharacter: (state.actualCharacter + 1) % 2
                    }));
                }}/>
            </main>
        );
    }

    renderCard() {
        const character = this.state.characters[this.state.actualCharacter];
        switch (this.state.currentState) {
            case IS_LOADING:
                return <CardLoading/>;
            case CARD_VISIBLE:
                return (
                    <CharacterCard
                        name={character.name}
                        culture={character.culture}
                        gender={character.gender}
                        numberOfSeasons={character.numberOfSeasons}
                        isDead={character.isDead}
                    />
                );
        }
    }
}

export default App;
