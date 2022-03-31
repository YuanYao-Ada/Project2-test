import './gameRule.css';

export default function GameRule() {
  return (
    <div className="App">
    <h1 className="title">Welcome to the Wordle Game</h1>
    <div className="box">
      <p>
        Wordle, the once-a-day game, was created by a New York software
        engineer who made a prototype several years ago and dusted it off
        during the pandemic. Wordle is at its heart a very simple game.
      </p>
    </div>
    <div className="rules">
      <p>Wordle is such a simple game that there are hardly any rules:</p>
      <ul>
        <li>Select one of 3 difficulties for this game </li>
        <li>You have to guess the Wordle</li>
        <li>Every word you enter must be in the word list</li>
        <li>A correct letter turns green</li>
        <li>A correct letter in the wrong place turns yellow</li>
        <li>An incorrect letter turns gray</li>
        <li>Letters can be used more than once</li>
      </ul>
    </div>
  </div>
  )
}
