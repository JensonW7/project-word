import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((letterIndex) => (
          <span 
            key={letterIndex}
            className="cell"
          >
            {value
              ? value[letterIndex]
              : undefined
            }
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
