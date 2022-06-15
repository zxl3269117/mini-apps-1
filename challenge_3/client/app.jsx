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
      ['zip-code']: '',
      ['card-number']: '',
      ['exp-date']: '2022-01-01',
      cvv: '',
      ['billing-zip']: ''
    }

    this.handelChange = this.handelChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
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

  // handle next (submit) on forms
  handleNext(event) {
    event.preventDefault();
    // send appropriate request to server
  }

  // handle checkout button
  handleCheckout(event) {
  }

  // handle purchase button
  handlePurchase(event) {
  }

  render() {
    return (
      <div>
        <Checkout handleCheckout={this.handleCheckout}/>
        <Form state={this.state} handelChange={this.handelChange} handleNext={this.handleNext}/>
        <Confirmation handlePurchase={this.handlePurchase}/>
      </div>
    )
  }
}

function Checkout(props) {
  return <button onClick={props.handleCheckout}>Checkout</button>
}

function Form(props) {
  var form1 = (
    <form onSubmit={props.handleNext}>Account
    <br></br>
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

  var form2 = (
    <form onSubmit={props.handleNext}> Shipping Address
    <br></br>
    <label>
      Street line 1:
      <input type="text" name="street1" value={props.state.street1} onChange={props.handelChange}></input>
    </label>
    <label>
      Street line 2:
      <input type="text" name="street2" value={props.state.street2} onChange={props.handelChange}></input>
    </label>
    <label>
      City:
      <input type="text" name="city" value={props.state.city} onChange={props.handelChange}></input>
    </label>
    <label>
      State:
      <input type="text" name="state" value={props.state.state} onChange={props.handelChange}></input>
    </label>
    <label>
      Zip code:
      <input type="text" name="zip-code" value={props.state['zip-code']} onChange={props.handelChange}></input>
    </label>
    <input type="submit" value="Next"></input>
  </form>
  );

  var form3 = (
    <form onSubmit={props.handleNext}> Payment
    <br></br>
    <label>
      Credit card number:
      <input type="text" name="card-number" value={props.state['card-number']} onChange={props.handelChange}></input>
    </label>
    <label>
      Expiration date:
      <input type="date" name="exp-date" value={props.state['exp-date']} onChange={props.handelChange}></input>
    </label>
    <label>
      CVV:
      <input type="text" name="cvv" value={props.state.cvv} onChange={props.handelChange}></input>
    </label>
    <label>
      Billing zip code:
      <input type="text" name="billing-zip" value={props.state['billing-zip']} onChange={props.handelChange}></input>
    </label>
    <input type="submit" value="Next"></input>
  </form>
  );

  return form3
    // <div>{form2}</div>
}

function Confirmation(props) {
  return <button onClick={props.handlePurchase}>Purchase</button>
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
//     this.handleNext = this.handleNext.bind(this);
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

//   handleNext(event) {
//     event.preventDefault();
//     // send appropriate request to server
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleNext}>
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