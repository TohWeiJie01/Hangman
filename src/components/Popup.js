import React, {useEffect} from 'react';

const Popup = ({setCanPlay, correctLetters, mistakes, currentWord, playAgain}) => {
  let canPlay = true;
  let outcomeMessage = "";
  let answerMessage = "";
  let outcome = "pass";
  let currentLetters = currentWord.split("");

  const pass = currentLetters.forEach(letter => {
    if (!(correctLetters.includes(letter))) {
      outcome = " ";
    }
  });
  const fail = mistakes >= 7;

  if (outcome === "pass") {
    outcomeMessage = ("YOU ARE GOOD AT HANGMAN!");
    canPlay = false;
  }

  if (fail) {
    outcomeMessage = ("TRY AGAIN NEXT TIME!");
    answerMessage = `The word is: ${currentWord}`;
    canPlay = false;
  }

  useEffect(() => setCanPlay(canPlay));

  return (
    <div className="popup-container" style={outcomeMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{outcomeMessage}</h2>
        <h3>{answerMessage}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}
  
export default Popup;
  