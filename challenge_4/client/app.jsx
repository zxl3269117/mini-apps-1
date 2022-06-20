import React from 'react';
import ReactDOM from 'react-dom';

import Status from './components/Status.jsx';
import Game from './components/Game.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameData: Array(7).fill(Array(7).fill('white')), // initialize the game board
      player: 'red', // red always starts the game
      message: '' // before detecting winning/tie, no display of message
    };
  }

  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <Status player={this.state.player} message={this.state.message}/>
        <Game gameData={this.state.gameData}/>
      </div>
    )
  }
}

const root = document.getElementById('app');
ReactDOM.render(<App />, root);
