import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import Status from './components/Status.jsx';
import Game from './components/Game.jsx';
import gameLogic from './gameLogic.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameData: [0, 1, 2, 3, 4, 5].map(row => ( Array(7).fill('').slice() )), // initialize the game board
      redIsNext: true, // red always starts the game
      message: '' // before detecting winning/tie, no display of message
    };

    this.handleDropButton = this.handleDropButton.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/start'
    })
      .then(response => {
        this.setState({ gameData: response.data })
      })
      .catch(err => { console.log(err) });
  }

  handleDropButton( col, redIsNext) {
    // get the row information
    var player = redIsNext ? 'red' : 'black';
    var row = gameLogic.getToggledRow(this.state.gameData, col);

    console.log('Disc dropped at', row, col, player);
    axios({
      method: 'post',
      url: '/api/connect-four',
      data: { row, col, player }
    })
      .then(() => {
        return axios({
          url: '/api/connect-four',
          method: 'get'
        })
      })
      .then(response => {
        // console.log(response);

        // set state to reflect updated gameData
        var tie = gameLogic.detectTie(response.data);
        var winningPlayer = gameLogic.detectWin(response.data);
        if(winningPlayer) {
          this.setState({ gameData: response.data, message: `${winningPlayer} WIN!`});
          // disable button function

        } else if(tie) {
          this.setState({ gameData: response.data, message: `It's a TIE!`});
        } else {
          this.setState({ gameData: response.data, redIsNext: !this.state.redIsNext});
        }
      })
      .catch(err => { console.log(err) });
  }

  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <Status
          redIsNext={this.state.redIsNext}
          message={this.state.message}
        />
        <Game
          gameData={this.state.gameData}
          redIsNext={this.state.redIsNext}
          gameEnds={this.state.message}
          handleDropButton = {this.handleDropButton}
        />
      </div>
    )
  }
}

const container =  document.getElementById('app');
const root = createRoot(container);
root.render(<App />)
