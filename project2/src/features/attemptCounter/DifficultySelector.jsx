import { useDispatch } from 'react-redux';
import {
  decrement,
} from './reducerSlice.jsx';
import { useState } from 'react';

function DifficultySelector() {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);

  return (
    <div>
        <select onChange={(e)=>{
            setDisabled(true);
            if (e.target.value === "medium") {
                dispatch(decrement()); 
            }
            if (e.target.value === "hard") {
                dispatch(decrement());
                dispatch(decrement());
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

export default DifficultySelector;
