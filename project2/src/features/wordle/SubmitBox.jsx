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

  const [disabled, setDisabled] = useState(false);

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input onChange={getInput} placeholder='Guess the word!' disabled={disabled}></input>
              <button type="submit" disabled={disabled}>Submit</button>
          </form>
          <WordValidator callback={setDisabled}/>
      </div>)}