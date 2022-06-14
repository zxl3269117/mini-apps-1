
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);