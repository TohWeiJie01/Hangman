import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Stickman from './components/Stickman';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Dictionary from './components/Dictionary';

function App() {
  const [canPlay, setCanPlay] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <div>
      <Header />
      <div className='hangman-container'>
        <Stickman />
        <WrongLetters />
        <Word currentWord={Dictionary()} correctLetters={correctLetters} />
      </div>
    </div>
  );
}

export default App;
