import React from 'react';
import BoardRow from './BoardRow.jsx';

const Game = (props) => (
  <div>
    <div className="game-play">{
      Array.from(Array(7).keys()).map(col => (
        <button
          disabled={props.gameEnds ? true : false}
          className={`play-button ${props.redIsNext ? 'red' : 'black'}`}
          onClick={event => { props.handleDropButton(col, props.redIsNext) }}>Drop
        </button>
      ))
    }
    </div>
    <div className="game-board">{
      props.gameData.map((colArr, row) => (
        <BoardRow row={row} cols={colArr}/>
      ))
    }</div>
  </div>
);

export default Game;