import React from 'react';
import Wordle from './features/wordle/Wordle';
import DifficultySelector from './features/difficultyHandler/DifficultySelector';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GameRule from './GameRule';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar className='nav-color' variant={'light'} >
          <Container>
            <Navbar.Brand as={Link} to={"/game"}>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/gamerule"}>Game Rule</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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

