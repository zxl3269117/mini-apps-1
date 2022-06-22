const express = require('express');
const app = express();
const PORT = 7070;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dummy database
var gameRow = Array(7).fill('');
var gameData = [0, 1, 2, 3, 4, 5].map(row => ( gameRow.slice() ));

app.get('/api/start', (req, res) => {
  gameRow = Array(7).fill('');
  gameData = [0, 1, 2, 3, 4, 5].map(row => ( gameRow.slice() ));
  res.status(200).json(gameData);
});

app.post('/api/connect-four', (req, res) => {
  // console.log('request data', req.body);

  var row = req.body.row;
  var col = req.body.col;
  var player = req.body.player;
  gameData[row][col] = player;
  res.sendStatus(201);
});

app.get('/api/connect-four', (req, res) => {
  res.status(200).json(gameData);
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
})