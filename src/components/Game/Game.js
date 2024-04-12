import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Keyboard from '../Keyboard/Keyboard';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WinningBanner from '../WinningBanner/WinningBanner';
import LosingBanner from '../LosingBanner/LosingBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }

  const validatedGuesses = guessList.map((guess) =>
    checkGuess(guess, answer)
  );

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
        guessList={validatedGuesses}
        answer={answer}
      />
      <GuessInput 
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' ? <WinningBanner guessNum={guessList.length}/>
      : gameStatus ==='lost' ? <LosingBanner answer={answer}/>
      : undefined
      }
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
