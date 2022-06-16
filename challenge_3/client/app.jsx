class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: '',
      id: 1,
      name: '',
      email: '',
      password: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      ['zip_code']: '',
      ['card_number']: '',
      ['exp_date']: '2022-01-01',
      cvv: '',
      ['billing_zip']: ''
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
      [key]: value
    }
    this.setState(newState);
  }

  // handle next (submit) on forms
  handleNext(event) {
    event.preventDefault();

    // send appropriate request to server
    $.ajax({
      url: '/forms',
      method: 'POST',
      data: this.state
    })
      .done((success) => {
        $.ajax({
          url: '/forms',
          method: 'GET'
        })
          .done((response) => {
            console.log(response.data);
          })
          .fail((failed) => {
            console.log(failed);
          })
      })
      .fail((failed) => {
        console.log(failed);
      })

  }

  // handle checkout button
  handleCheckout(event) {
  }

  // handle purchase button
  handlePurchase(event) {
  }

  render() {
    // conditional rendering component based on this.state.current
    var renderForm = (component) => {
      switch(component) {
        case 'checkout':
          return <Checkout handleCheckout={this.handleCheckout}/>;
          break;
        case 'buyer':
        case 'address':
        case 'card':
          return <Form state={this.state} handelChange={this.handelChange} handleNext={this.handleNext}/>;
          break;
        case 'purchase':
          return <Purchase state={this.state} handlePurchase={this.handlePurchase}/>;
          break;
        default:
          return <Checkout handleCheckout={this.handleCheckout}/>;
      }
    }

    return (
      <div>
        {renderForm(this.state.component)}
      </div>
    )
  }
}

function Checkout(props) {
  return (
    <button onClick={props.handleCheckout}>Checkout</button>
  );
}

function Form(props) {
  var form1 = (
    <form name="buyer" onSubmit={props.handleNext}>Account Information
    <br></br>
      <label>
        Name:
        <input type="text" name="name" value={props.state.name} onChange={props.handelChange}></input>
      </label>
      <br></br>
      <label>
        Email:
        <input type="text" name="email" value={props.state.email} onChange={props.handelChange}></input>
      </label>
      <br></br>
      <label>
        Password:
        <input type="password" name="password" value={props.state.password} onChange={props.handelChange}></input>
      </label>
      <br></br>
      <input type="submit" value="Next"></input>
    </form>
  );

  var form2 = (
    <form name="address" onSubmit={props.handleNext}> Shipping Address
    <br></br>
    <label>
      Street line 1:
      <input type="text" name="street1" value={props.state.street1} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      Street line 2:
      <input type="text" name="street2" value={props.state.street2} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      City:
      <input type="text" name="city" value={props.state.city} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      State:
      <input type="text" name="state" value={props.state.state} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      Zip code:
      <input type="text" name="zip-code" value={props.state['zip-code']} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <input type="submit" value="Next"></input>
  </form>
  );

  var form3 = (
    <form name="card" onSubmit={props.handleNext}> Payment
    <br></br>
    <label>
      Credit card number:
      <input type="text" name="card-number" value={props.state['card-number']} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      Expiration date:
      <input type="date" name="exp-date" value={props.state['exp-date']} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      CVV:
      <input type="text" name="cvv" value={props.state.cvv} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      Billing zip code:
      <input type="text" name="billing-zip" value={props.state['billing-zip']} onChange={props.handelChange}></input>
    </label>
    <input type="submit" value="Next"></input>
  </form>
  );

  switch(props.state.component) {
    case 'buyer':
      return form1;
      break;
    case 'address':
      return form2;
      break;
    case 'card':
      return form3;
      break;
    default:
      alert('error retrieving forms');
  }
}

function Purchase(props) {
  var keys = Object.keys(props.state);
  var fields = keys.slice(2);
  var confirmation = fields.map((field, index) =>
    <p keys={index.toString()}>{field}: {props.state[field]}</p>
  );
  return (
    <div>
      <h4>Order Confirmation</h4>
      {confirmation}
      <button onClick={props.handlePurchase}>Purchase</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);