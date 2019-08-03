import React from 'react';

import './App.css';
import CharacterCard from "./components/CharacterCard";
import Button from './components/Button';


function App() {
    return (
        <main className="appRoot__wrapper">
            <CharacterCard/>
            <Button/>
        </main>
    );
}

export default App;
