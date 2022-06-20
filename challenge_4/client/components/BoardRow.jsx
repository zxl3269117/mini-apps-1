import React from 'react';
import BoardCell from './BoardCell.jsx';

const BoardRow = (props) => (
  <div className="board-row">{
    props.cols.map((value, col) => (
      <BoardCell row={props.row} col={col} occupiedPlayer={value}/>
    ))
  }</div>
)

export default BoardRow;