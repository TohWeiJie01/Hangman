import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Stickman from './components/Stickman';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Category from './components/Category';
import Dictionary from './components/Dictionary';
import Notification from './components/Notification';
import Popup from './components/Popup';

let type = Category();
let currentWord = Dictionary(type);

export function alert(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 1500);
}

function App() {
  const [canPlay, setCanPlay] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = e => {
      const {key, keyCode} = e;
        if (canPlay && (keyCode >= 65 && keyCode <= 90)) {
          const letter = key.toLowerCase();

          if (currentWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } else {
              alert(setShowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
              setMistakes(mistakes + 1);
            } else {
              alert(setShowNotification);
            }
          }
        } 
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [correctLetters, wrongLetters, canPlay]);

  function playAgain() {
    setCanPlay(true);

    setCorrectLetters([]);
    setWrongLetters([]);
    setMistakes(0);

    type = Category();
    currentWord = Dictionary(type);
  }

  return (
    <>
      <Header />
      <hr></hr>
      <div className='hangman-container'>
        <Stickman mistakes={mistakes}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <p className='cat' style={{textAlign: "center"}}>CATEGORY: {type.toUpperCase()}</p>
        <Word correctLetters={correctLetters} currentWord={currentWord}/>
      </div>
      <hr></hr>
      <Popup setCanPlay={setCanPlay} correctLetters={correctLetters} mistakes={mistakes} currentWord={currentWord} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
