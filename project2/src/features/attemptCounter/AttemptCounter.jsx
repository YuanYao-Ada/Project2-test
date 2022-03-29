import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  selectCount,
} from './attemptSlice.jsx';
import {
  selectDifficulty,
} from './difficultySlice.jsx';
import { useState } from 'react';
import WordChecker from './WordChecker.jsx';
import { selectLength } from './wordLengthSlice.jsx';
import { selectAnswer } from './wordSlice.jsx';

export function AttemptCounter() {
  const count = useSelector(selectCount);
  const difficulty = useSelector(selectDifficulty);
  const wordLength = useSelector(selectLength);
  const answer = useSelector(selectAnswer);
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  // Control when the guess result will show.
  // If the word is not submitted, the guess result will not show
  const [bool, setBool] = useState(false);
 
  const handleSubmit = event => {
      event.preventDefault();
      // Just a hard code. Will need functions to check what's the correct input length
      if (word.length === 5) {
        dispatch(decrement());
      }
      // Empty the input box
      event.target.reset();
      // Show the guess result
      setBool(true);
  }

  const getInput = event => {
    setBool(false);
    setWord(event.target.value);
  }

  if (count === undefined) {
    return (<div>
      Please select a difficulty level to start the game
    </div>)
  } else if (count > 0) {
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>
              <input onChange={getInput} placeholder='Guess the word!'></input>
              <button type="submit">Submit</button>
          </form>
          <div style={{color:"red"}}>
              You have {count} attempt(s) left
          </div>
          <WordChecker guess={word} ifShow={bool} changeShow={setBool} />
          <div>difficulty: {difficulty}</div>
          <div>wordLength: {wordLength}</div>
          <div>selectedWord: {answer}</div>
        </div>
      </div>
    );
  }

  if (count == 0) {
    return (
      <div> Sorry, you lose. No more chances.</div>
    )
  }
}
