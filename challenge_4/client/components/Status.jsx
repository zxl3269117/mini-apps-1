import React from 'react';

const Status = (props) => (
  <div className="game-status">{
    props.redIsNext ?
    <h4 className="player">Red is playing</h4>
    :
    <h4 className="player">Black is playing</h4>
  }
    <div className="message">
      {props.message.length !== 0 &&
      <p>{props.message.length}</p>
      }
    </div>
  </div>
)

export default Status;