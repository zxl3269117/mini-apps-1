const express = require('express');
const Models = require('./Models.js');
const app = express();
const port = 8080;

const components = ['checkout', 'buyer', 'address', 'card', 'purchase'];
var i = 0;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initial get when page loads
app.get('/', (req, res) => {

  // component = components[i]
  // respond with component
  res.status(200).send(components[i]);
})

// get from checkout page
app.get('/checkout', (req, res) => {
  // respond with component[i++]
  res.status(200).send(components[i++]);
  res.status(200).send('buyer');
})

// get from the forms page
app.get('/forms', (req, res) => {
  // based on what component is
  // respond with component[i++]
})

// get the purhcase page
  // response with component = 'checkout', and id = id++

// post the checkout
app.post('/checkout', (req, res) => {
  var id = req.body.id;
  Models.create(id, (err, response) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(201);
    }
  })
})

// post the forms data
app.post('/forms', (req, res) => {
  console.log(req.body);
  var data = req.body;

  // update existing record
  Models.save(data, (err, success) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(201);
    }
  })
})


app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
