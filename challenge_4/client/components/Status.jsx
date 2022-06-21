import React from 'react';

const Status = (props) => (
  <div className="game-status">{
    props.message.length === 0 ?
    (
      props.redIsNext ?
      <h4 className="player"><span className="red">RED</span> is playing</h4>
      :
      <h4 className="player"><span className="black">BLACK</span> is playing</h4>
    )
    :
    <div className="message">
      <p>{props.message}</p>
    </div>
  }
  </div>


  // <div className="game-status">{
  //   props.redIsNext ?
  //   <h4 className="player"><span className="red">RED</span> is playing</h4>
  //   :
  //   <h4 className="player"><span className="black">BLACK</span> is playing</h4>
  // }
  //   <div className="message">
  //     {props.message.length !== 0 &&
  //     <p>{props.message.length}</p>
  //     }
  //   </div>
  // </div>
)

export default Status;