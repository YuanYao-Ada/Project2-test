import { useSelector } from 'react-redux';
import { selectCount } from '../slices/attemptSlice.jsx';
import WordChecker from './WordChecker.jsx';
import { selectAnswer } from '../slices/wordSlice.jsx';
import React from 'react';
import SubmitBox from './SubmitBox.jsx';
import { useParams } from 'react-router-dom';
import { initialize } from '../slices/attemptSlice.jsx';
import { changeDifficulty } from '../slices/difficultySlice.jsx';
import { changeLength } from '../slices/wordLengthSlice.jsx';
import { changeAnswer } from '../slices/wordSlice.jsx';
import { useDispatch } from 'react-redux';
import { selectedMap } from '../slices/dictionarySlice.jsx'
import { useState } from 'react';

export default function Wordle() {
  const count = useSelector(selectCount);
  const answer = useSelector(selectAnswer);
  const {type} = useParams();
  const dispatch = useDispatch();
  const map = useSelector(selectedMap);
  const randomIndex = Math.floor(Math.random() * 10);
  // This bool is used to initialize the values only once.
  const [bool, setBool] = useState(false);

  function easy() {
    dispatch(initialize(7));
              dispatch(changeDifficulty("easy"));
              dispatch(changeLength(5));
              dispatch(changeAnswer(map.get("easy")[randomIndex]));
  }

  function medium() {
    dispatch(initialize(6));
              dispatch(changeDifficulty("medium"));
              dispatch(changeLength(6));
              dispatch(changeAnswer(map.get("medium")[randomIndex]));
  }

  function hard() {
    dispatch(initialize(5));
              dispatch(changeDifficulty("hard"));
              dispatch(changeLength(7));
              dispatch(changeAnswer(map.get("hard")[randomIndex]));
  }

  function reset() {
    if (!bool) {
      switch(type) {
        case "easy":
          easy();
          setBool(true);
          break;
        case "medium":
          medium();
          setBool(true);
          break;
        case "hard":
          hard();
          setBool(true);
          break;
        default:
          break;
      }
    }
  }

  reset();
  
  if (count === undefined) {
    return (
    <div className='game-title'> 
      Please select a difficulty level to start the game
    </div>)
  } else if (count > 0) {
    return (
      <div className='input-box'>
        <div>
          <SubmitBox />
          <div style={{color:"red"}}>
              You have {count} attempt(s) left
          </div>
          <WordChecker />
          <div>answer: {answer}</div>
          <button className='reset' onClick={() => {window.location.reload();}}>Reset</button>
        </div>
      </div>
    );
  }

  if (count === 0) {
    return (
      <div className='input-box'>
        <div > Sorry, you lose. No more chances.</div>
        <div> The correct answer is {answer} </div>
        <button className='reset' onClick={() => {window.location.reload();}}>Reset</button>
      </div>
    )
  }
}
