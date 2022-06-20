import React from 'react';
import BoardRow from './BoardRow.jsx';

const Game = (props) => (
  <div>
    <div className="game-play">{
      Array.from(Array(10).keys()).map(col => (
        <button className="play-button" onClick={event => { props.handleClick(col) }}>Drop</button>
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