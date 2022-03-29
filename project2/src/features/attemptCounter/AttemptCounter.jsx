import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  selectCount,
} from './reducerSlice.jsx';
import { useState } from 'react';
import WordChecker from './WordChecker.jsx';

export function AttemptCounter() {
  const count = useSelector(selectCount);
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

  if (count > 0) {
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
        </div>
      </div>
    );
  } else {
    return (
      <div> Sorry, you lose. No more chances.</div>
    )
  }

  
}
