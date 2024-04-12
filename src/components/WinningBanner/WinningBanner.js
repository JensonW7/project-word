import React from 'react';

function WinningBanner({ guessNum, handleRestart }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{`${guessNum} ${guessNum == 1 ? "guess" : "guesses"}`}</strong>.
      </p>
      {handleRestart && <button onClick={handleRestart}>Restart game</button>}
    </div>
  );
}

export default WinningBanner;
