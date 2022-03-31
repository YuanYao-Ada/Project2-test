import React from 'react';
import Wordle from './features/wordle/Wordle';
import DifficultySelector from './features/difficultyHandler/DifficultySelector';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GameRule from './GameRule';

function App() {
  return (
    <Router>
      <div>
      This will be a future float nav bar :) :) :)
        <Switch>
          <Route path='/Game/:type'>
            <Wordle />
          </Route>
          <Route path='/GameRule'>
            <GameRule />
          </Route>
          <Route path='/Game'>
            <DifficultySelector />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
