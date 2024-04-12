import React from 'react';

import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status
    ? `cell ${status}`
    : `cell`;

  return <span className={className}>{letter}</span>
}

function Guess({ value, answer }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((letterIndex) => (
          <Cell 
            key={letterIndex}
            letter={value ? value[letterIndex].letter : undefined}
            status={value ? value[letterIndex].status : undefined}
          />
        ))}
      </p>
    </div>
  );
}

export default Guess;
