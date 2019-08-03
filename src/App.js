import React from 'react';

import './App.css';
import CharacterCard from "./components/CharacterCard";
import Button from './components/Button';


function App() {
    return (
        <main className="appRoot__wrapper">
            <CharacterCard
                name="Jon Snow"
                culture="Northmen"
                gender="Male"
                numberOfSeasons={7}
            />
            <CharacterCard
                name="Daenerys"
                culture="Westerosi"
                gender="Female"
                numberOfSeasons={7}
            />
            <Button/>
        </main>
    );
}

export default App;
