const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.statusCode(200);
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
