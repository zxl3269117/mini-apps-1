class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
      name: '',
      email: '',
      password: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      ['zip-code']: 0,
      ['card-number']: 0,
      ['exp-date']: '',
      cvv: 0,
      ['billing-zip']: 0
    }

    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handelChange(event) {
    // update corresponding state
    var key = event.target.name;
    var value = event.target.value;
    var newState = {
      key: value
    }
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    // send appropriate request to server
  }

  handleClick() {
    // handle checkout click
  }

  render() {
    return (
      <div>
        <Checkout handleClick={this.handleClick}/>
        <Form state={this.state} handelChange={this.handelChange} handleSubmit={this.handleSubmit}/>
        {/* <Form2 />
        <Form3 /> */}
        <Confirmation />
      </div>
    )
  }
}

function Checkout(props) {
  return <button onClick={props.handleClick}>Checkout</button>
}

function Form(props) {
  var form1 = (
    <form onSubmit={props.handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={props.state.name} onChange={props.handelChange}></input>
      </label>
      <label>
        Email:
        <input type="text" name="email" value={props.state.email} onChange={props.handelChange}></input>
      </label>
      <label>
        Password:
        <input type="password" name="password" value={props.state.password} onChange={props.handelChange}></input>
      </label>
      <input type="submit" value="Next"></input>
    </form>
  );

  // var from2 = (
  //   <form onSubmit={props.handleSubmit}>
  //   <label>
  //     Name:
  //     <input type="text" name="name" value={props.name} onChange={props.handelChange}></input>
  //   </label>
  //   <label>
  //     Email:
  //     <input type="text" name="email" value={this.state.emal} onChange={this.handelChange}></input>
  //   </label>
  //   <label>
  //     Password:
  //     <input type="password" name="password" value={this.state.name} onChange={this.handelChange}></input>
  //   </label>
  //   <input type="submit" value="Next"></input>
  // </form>
  // );

  // var form3 = (

  // );

  return form1
    // <div>{form2}</div>
}

function Confirmation(props) {

}

// class Form2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       street1: '',
//       street2: '',
//       city: '',
//       state: '',
//       city: '',
//       zip:
//     };
//     this.handelChange = this.handelChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handelChange(event) {
//     // update the state
//     var key = event.target.name;
//     var value = event.target.value;
//     var newState = {
//       key: value
//     }
//     this.setState(newState);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     // send appropriate request to server
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={this.state.name} onChange={this.handelChange}></input>
//         </label>
//         <label>
//           Email:
//           <input type="text" name="email" value={this.state.emal} onChange={this.handelChange}></input>
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" value={this.state.name} onChange={this.handelChange}></input>
//         </label>
//         <input type="submit" value="Next"></input>
//       </form>
//     )
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);