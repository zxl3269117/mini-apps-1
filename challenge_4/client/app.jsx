import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <p>React running</p>
  }
}

const root = document.getElementById('app');
ReactDOM.render(<App />, root);
