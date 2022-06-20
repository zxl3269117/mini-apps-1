import React from 'react';

const BoardCell = (props) => {
  var occupiedPlayer = (player) => {
    if(player === 'red') {
      return <div className="red"></div>
    }
    if(player === 'black') {
      return <div className="red"></div>
    }
    return <div className="white"></div>
  }
  return(
  <div className="cell" row={props.row} col={props.col}>{
    occupiedPlayer(props.occupiedPlayer)
  }</div>
  );
}

export default BoardCell;