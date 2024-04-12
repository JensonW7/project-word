import React from 'react';

function WinningBanner({ guessNum }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{`${guessNum} ${guessNum == 1 ? "guess" : "guesses"}`}</strong>.
      </p>
    </div>
  );
}

export default WinningBanner;
