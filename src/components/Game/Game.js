import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WinningBanner from '../WinningBanner/WinningBanner';
import LosingBanner from '../LosingBanner/LosingBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [guessNum, setGuessNum] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function handleSubmitGuess(guess) {
    if (guess === answer) {
      setGameStatus("won");
    }

    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);

    const nextGuessNum = guessNum + 1;
    nextGuessNum >= 6 ? setGameStatus("lost") : setGuessNum(nextGuessNum);
  }

  return (
    <>
      <GuessResults 
        guessList={guessList}
        answer={answer}
      />
      <GuessInput 
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' ? <WinningBanner guessNum={guessNum}/>
      : gameStatus ==='lost' ? <LosingBanner />
      : undefined
      }
    </>
  );
}

export default Game;
