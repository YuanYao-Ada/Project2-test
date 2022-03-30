import React from 'react';
import Wordle from './features/wordle/Wordle';
import DifficultySelector from './features/difficultyHandler/DifficultySelector';

function App() {
  return (
    <div>
      <header>
        <DifficultySelector />
        <Wordle />
      </header>
    </div>
  );
}

export default App;
