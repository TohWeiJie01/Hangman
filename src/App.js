import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Stickman from './components/Stickman';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';

function App() {
  const [canPlay, setCanPlay] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <div>
      <Header />
      <div className='game-container'>
        <Stickman />
        <WrongLetters />
        <Word />
      </div>
    </div>
  );
}

export default App;
