import { useSelector } from 'react-redux';
import { selectCount } from '../slices/attemptSlice.jsx';
import WordChecker from './WordChecker.jsx';
import { selectAnswer } from '../slices/wordSlice.jsx';
import React from 'react';
import SubmitBox from './SubmitBox.jsx';

export default function Wordle() {
  const count = useSelector(selectCount);
  const answer = useSelector(selectAnswer);

  if (count === undefined) {
    return (<div>
      Please select a difficulty level to start the game
    </div>)
  } else if (count > 0) {
    return (
      <div>
        <div>
          <SubmitBox />
          <div style={{color:"red"}}>
              You have {count} attempt(s) left
          </div>
          <WordChecker />
          <div>answer: {answer}</div>
        </div>
      </div>
    );
  }

  if (count === 0) {
    return (
      <div> Sorry, you lose. No more chances.</div>
    )
  }
}
