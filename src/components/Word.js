import React from 'react';

function Word({currentWord, correctLetters}) {
  return (
    <div className="word">
      {currentWord.split('').map((letter, index) => {
        return (
          <div className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ''}
          </div>
        )
      })}
    </div>
  )
}

export default Word;
