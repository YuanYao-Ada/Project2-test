import React from 'react';
import { AttemptCounter } from './features/attemptCounter/AttemptCounter';
// import './App.css';
import DifficultySelector from './features/attemptCounter/DifficultySelector';

function App() {
  return (
    <div>
      <header>
        <DifficultySelector />
        <AttemptCounter />
      </header>
    </div>
  );
}

export default App;
