import React from 'react';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => {
        return (
          <p key={index}>{guess}</p>
        );
      })}
    </div>
  );
}

export default GuessResults;
