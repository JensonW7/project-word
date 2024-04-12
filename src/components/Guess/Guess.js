import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status
    ? `cell ${status}`
    : `cell`;

  return <span className={className}>{letter}</span>
}

function Guess({ value, answer }) {
  const guessResult = checkGuess(value, answer);
  console.log(guessResult);

  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((letterIndex) => (
          <Cell 
            key={letterIndex}
            letter={guessResult ? guessResult[letterIndex].letter : undefined}
            status={guessResult ? guessResult[letterIndex].status : undefined}
          />
        ))}
      </p>
    </div>
  );
}

export default Guess;
