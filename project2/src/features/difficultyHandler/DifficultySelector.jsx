import React from 'react';
import { Link } from 'react-router-dom';

export default function DifficultySelector() {
  return (
    <div>
          <div>
          <div>
            Please select the difficulty of the game.
          </div>
          <Link to="/Game/easy">
            <button value="Game/easy">Easy</button>
          </Link>
          <Link to="/Game/medium">
            <button value="Game/medium">Medium</button>
          </Link>
          <Link to="/Game/hard">
            <button value="Game/hard">Hard</button>
          </Link> 
        </div>
    </div>
  );
}
