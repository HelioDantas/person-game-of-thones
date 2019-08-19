import React from 'react';
import axios from 'axios';

import './App.css';
import CharacterCard from "./components/CharacterCard";
import CardLoading from "./components/CardLoading";
import Button from './components/Button';
import reducer, {
    CHARACTERS_LOADED,
    CHANGE_ACTUAL_CHARACTER,
    ANIMATE_CHARACTER_IN,
    CHARACTER_IS_VISIBLE,
    ANIMATE_CHARACTER_OUT
} from "./reducer";
import * as stateMachineDefinitions from "./stateMachineDefinitions";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = reducer();
    }

    dispatch(action) {
        this.setState(state => reducer(state, action));
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: "https://www.anapioficeandfire.com/api/characters?page=2&pageSize=20"
        }).then(response => {
            this.setState(state => {
                this.dispatch({type: CHARACTERS_LOADED, payload: response.data});
                this.dispatch({type: ANIMATE_CHARACTER_IN});
            });
        });

    }

    render() {
        return (
            <main className="appRoot__wrapper">
                {this.renderCard()}
                <Button clickHandler={() => {
                    this.setState(state => this.dispatch({type: ANIMATE_CHARACTER_OUT}));
                }}/>
            </main>
        );
    }

    renderCard() {
        const character = this.state.characters[this.state.actualCharacter];

        switch (this.state.currentState) {
            case stateMachineDefinitions.IS_LOADING:
                return <CardLoading/>;
            case stateMachineDefinitions.CARD_VISIBLE:
                return (
                    <CharacterCard
                        name={character.name}
                        culture={character.culture}
                        gender={character.gender}
                        numberOfSeasons={character.numberOfSeasons}
                        isDead={character.isDead}
                    />
                );
            case stateMachineDefinitions.ENTERING_CARD:
                return (
                    <CharacterCard
                        additionalClass="--cardIn"
                        name={character.name}
                        culture={character.culture}
                        gender={character.gender}
                        numberOfSeasons={character.numberOfSeasons}
                        isDead={character.isDead}
                        animationEndHandler={() => {
                            this.dispatch({type: CHARACTER_IS_VISIBLE});
                        }}
                    />
                );
            case stateMachineDefinitions.LEAVING_CARD:
                return (
                    <CharacterCard
                        additionalClass="--cardOut"
                        name={character.name}
                        culture={character.culture}
                        gender={character.gender}
                        numberOfSeasons={character.numberOfSeasons}
                        isDead={character.isDead}
                        animationEndHandler={() => {
                            this.dispatch({
                                type: CHANGE_ACTUAL_CHARACTER,
                                payload: Math.floor(
                                    Math.random() * this.state.characters.length
                                )
                            });
                            this.dispatch({type: ANIMATE_CHARACTER_IN});
                        }}
                    />
                );
        }
    }
}

export default App;
