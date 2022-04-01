import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../slices/attemptSlice";
import { pushHistory } from "../slices/historyAttemptSlice";
import { changeGuess } from "../slices/guessSlice";
import { selectAnswer } from "../slices/wordSlice";
import WordValidator from "./WordValidator";

export default function SubmitBox() {
  const answer = useSelector(selectAnswer);
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const [cong, setCong] = useState(false);
 
  const handleSubmit = event => {
      event.preventDefault();
      dispatch(changeGuess(word));
      // Just a hard code. Will need functions to check what's the correct input length
      if (word.length === answer.length) {
        dispatch(decrement());
        dispatch(pushHistory(word));
      }
      // Empty the input box
      event.target.reset();
  }

  const getInput = event => {
      setWord(event.target.value);
  }

  const content = "Guess the word in length " + answer.length;

  return (
      <div>
          <WordValidator callback={setCong} />
          <form className='input-box' onSubmit={handleSubmit}>
              <input className='input-field' onChange={getInput} placeholder={content} disabled={cong}></input>
          </form>
          <button className='button' type="submit" disabled={cong}>Submit</button>
      </div>)}
