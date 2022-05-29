import React from 'react';

function Word({correctLetters, currentWord}) {
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
