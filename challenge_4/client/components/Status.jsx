import React from 'react';

const Status = (props) => (
  <div className="game-status">
    <h4 className="player">{props.player} is playing</h4>
    <div className="message">
      {props.message.length !== 0 &&
      <p>{props.message.length}</p>
      }
    </div>
  </div>
)

export default Status;