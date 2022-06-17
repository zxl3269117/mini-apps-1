const express = require('express');
const cookieParser = require('cookie-parser');
const Models = require('./Models.js');
const app = express();
const port = 8080;

const components = ['checkout', 'buyer', 'address', 'card', 'purchase'];

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// initialize when page loads
app.get('/home', (req, res) => {
  if(req.cookies.id) {
    res.status(200).json({ id: req.cookies.id, component: req.cookies.component});
  } else {
    Models.count((err, response) => {
      if(err) {
        res.status(500).send(err);
      } else {
        var count = response[0]['COUNT(id)'];
        var component = 'checkout';
        var id = count + 1;
        res.cookie('component', component);
        res.cookie('id', id.toString());
        res.status(200).json({ id, component });
      }
    })

  }
})

// get from checkout page
app.get('/checkout', (req, res) => {
  var component = req.cookies.component;
  var nextComp = components[components.indexOf(component) + 1];
  res.cookie('component', nextComp);
  res.status(200).json({ component: nextComp });
})

// get from the forms page
app.get('/forms', (req, res) => {
  var component = req.cookies.component;
  var nextComp = components[components.indexOf(component) + 1];
  res.cookie('component', nextComp);
  res.status(200).json({ component: nextComp });
})

// get the purhcase page
app.get('/purchase', (req, res) => {
  var id = req.cookies.id;
  console.log(id);
  Models.fetch(id, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      var data = Object.assign(response[0], { component: 'checkout' });
      id ++;
      data.id = id;
      res.cookie('component', 'checkout');
      res.cookie('id', id.toString());
      console.log(data);
      res.status(200).json(data);
    }
  })
})

// post the checkout
app.post('/checkout', (req, res) => {
  var id = req.cookies.id;
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
  // console.log(req.body);
  var data = req.body;

  // update existing record
  Models.save(data, (err, success) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.sendStatus(201);
    }
  })
})


app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
