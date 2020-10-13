import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './Character/Model/Character.js';
import CharacterCard from './Character/View/CharacterCard.js';


//let EnemyCharacter = Character();

function App() {

  
  let PlayerCharacter = new Character(10, "Player");
  
  const [enemyCharacterState, setEnemyCharacterState] = useState(new Character(10, "Enemy"));
  const [testState, setTestState] = useState(10);

  const CastFireball = ()=>{
    console.log("Player Character", PlayerCharacter);
    console.log("Enemy Player", enemyCharacterState.Health);
    console.log("Casting Fireball");
    PlayerCharacter.Spells.Fireball.Cast(enemyCharacterState, setEnemyCharacterState);
    console.log("Player Character", PlayerCharacter);
    console.log("Enemy Player", enemyCharacterState.Health);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <CharacterCard Health={PlayerCharacter.Health} Name={PlayerCharacter.Name} />
        <CharacterCard Health={enemyCharacterState.Health} Name={enemyCharacterState.Name} />
        <button id="fireballBtn" onClick={CastFireball}>Cast Fireball</button>
      </header>
    </div>
  );
}

export default App;
