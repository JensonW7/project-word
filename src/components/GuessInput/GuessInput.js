import React from 'react';

function GuessInput({ guessList, setGuessList }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault(); 
    setGuessList([...guessList, guess]);
    setGuess('');
  };

  return (
    <form 
        className="guess-input-wrapper"
        onSubmit={handleSubmit}
    >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
            required
            id="guess-input" 
            type="text" 
            pattern="^[a-zA-z]{5}$"
            title="5 Letter Word Required"
            value={guess}
            onChange={(event) => {
              setGuess(event.target.value.toUpperCase());
            }}
        />
    </form>
  );
}

export default GuessInput;
