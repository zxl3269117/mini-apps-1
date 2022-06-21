const express = require('express');
const app = express();
const PORT = 7070;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dummy database
var gameData = Array(7).fill(Array(7).fill(''));

app.get('/api/start', (req, res) => {
  gameData = Array(7).fill(Array(7).fill(''));
  res.status(200).json(gameData);
});

app.post('/api/connect-four', (req, res) => {
  console.log('request data', req.body);
  var row = req.body.row;
  var col = req.body.col;
  var player = req.body.player;
  console.log(gameData[row][col], row, col, player);
  // var newRow = gameData[row].splice(col, 1, player);
  // gameData[row] = newRow;
  gameData[row][col] = player;
  console.log(gameData);
  res.sendStatus(201);
});

app.get('/api/connect-four', (req, res) => {
  res.status(200).json(gameData);
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
})