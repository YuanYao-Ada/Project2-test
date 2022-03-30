import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../slices/attemptSlice.jsx';
import { changeDifficulty } from '../slices/difficultySlice.jsx';
import { changeLength } from '../slices/wordLengthSlice.jsx';
import { useState } from 'react';
import { selectedMap } from '../slices/dictionarySlice.jsx';
import { changeAnswer } from '../slices/wordSlice.jsx';
import React from 'react';

export default function DifficultySelector() {
  const dispatch = useDispatch();
  const map = useSelector(selectedMap);

  const [disabled, setDisabled] = useState(false);
  const randomIndex = Math.floor(Math.random() * 10);

  return (
    <div>
        <select onChange={(e)=>{
            setDisabled(true);
            if (e.target.value === "easy") {
              dispatch(initialize(7));
              dispatch(changeDifficulty("easy"));
              dispatch(changeLength(5));
              dispatch(changeAnswer(map.get("easy")[randomIndex]));
            }
            if (e.target.value === "medium") {
              dispatch(initialize(6));
              dispatch(changeDifficulty("medium"));
              dispatch(changeLength(6));
              dispatch(changeAnswer(map.get("medium")[randomIndex]));
            }
            if (e.target.value === "hard") {
              dispatch(initialize(5));
              dispatch(changeDifficulty("hard"));
              dispatch(changeLength(7));
              dispatch(changeAnswer(map.get("hard")[randomIndex]));
            }
        }} disabled={disabled}>
            <option value="none" selected>Select a difficulty level</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
    </div>
  );
}
