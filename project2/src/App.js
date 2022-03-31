import React from 'react';
import Wordle from './features/wordle/Wordle';
import DifficultySelector from './features/difficultyHandler/DifficultySelector';
import { BrowserRouter as Router, Route, Switch， Link } from 'react-router-dom'
import GameRule from './GameRule';

function App() {
  return (
    <Router>
      <div>
      This will be a future float nav bar :) :) :)
        <Switch>
          <Route exact path='/'>
            <Link to="/game">
              <DifficultySelector />
            </Link>
          </Route>
          <Route path='/Game'>
            <DifficultySelector />
            <Wordle />
          </Route>
          <Route path='/GameRule'>
            <GameRule />
          </Route>
//         <header>
        </Switch>
//         </header>
      </div>
    </Router>
  );
}

export default App;
