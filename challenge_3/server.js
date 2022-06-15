const express = require('express');
const db = require('./database.js');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.statusCode(200);
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
