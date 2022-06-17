class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: '',
      id: 0,
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

  componentDidMount() {
    $.ajax({
      url: '/home',
      method: 'GET',
    })
      .done(res => {
        // console.log(res);
        this.setState(res);
      })
  }

  handelChange(event) {
    var key = event.target.name;
    var value = event.target.value;
    var newState = {
      [key]: value
    }
    this.setState(newState);
  }

  // handle checkout button
  handleCheckout(event) {
    $.ajax({
      url: '/checkout',
      method: 'POST',
      data: { id: this.state.id }
    })
      .done(success => {
        $.ajax({
          url: '/checkout',
          method: 'GET'
        })
          .done(res => {
            // console.log(res);
            this.setState({ component: res.component, id: res.id });
          })
          .fail(err => {
            console.log(err);
          })
      })
      .fail(err => {
        console.log(err);
      })
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
      .done(success => {
        $.ajax({
          url: '/forms',
          method: 'GET'
        })
          .done(res => {
            // console.log(res);
            this.setState(res);
          })
          .fail(failed => {
            console.log(failed);
          })
      })
      .fail(failed => {
        console.log(failed);
      })

  }


  // handle purchase button
  handlePurchase(event) {
    $.ajax({
      url: '/purchase',
      method: 'GET'
    })
      .done(res => {
        // console.log(res);
        this.setState({
          component: 'checkout',
          id: 0,
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
        });
      })
    .fail(err => {
      console.log(err);
    })
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
      <input type="text" name="zip_code" value={props.state['zip_code']} onChange={props.handelChange}></input>
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
      <input type="text" name="card_number" value={props.state['card_number']} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      Expiration date:
      <input type="date" name="exp_date" value={props.state['exp_date']} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      CVV:
      <input type="text" name="cvv" value={props.state.cvv} onChange={props.handelChange}></input>
    </label>
    <br></br>
    <label>
      Billing zip code:
      <input type="text" name="billing_zip" value={props.state['billing_zip']} onChange={props.handelChange}></input>
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