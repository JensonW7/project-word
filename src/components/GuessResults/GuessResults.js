import React from 'react';
import Guess from '../Guess/Guess';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess 
            key={index}
            value={guessList[index]} 
          />
      ))}
    </div>
  );
}

export default GuessResults;
