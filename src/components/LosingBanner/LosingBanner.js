import React from 'react';

function LosingBanner({ answer, handleRestart }) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      {handleRestart && <button onClick={handleRestart}>Restart game</button>}
    </div>
  );
}

export default LosingBanner;
