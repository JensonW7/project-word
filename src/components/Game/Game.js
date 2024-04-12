import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WinningBanner from '../WinningBanner/WinningBanner';
import LosingBanner from '../LosingBanner/LosingBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function handleSubmitGuess(guess) {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);

    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
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
      {gameStatus === 'won' ? <WinningBanner guessNum={guessList.length}/>
      : gameStatus ==='lost' ? <LosingBanner />
      : undefined
      }
    </>
  );
}

export default Game;
