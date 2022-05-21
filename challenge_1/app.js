console.log('app is running');

var app = document.getElementById("app");

/************************************************************/
/*>>>>> MODEL <<<<<<*/
/************************************************************/

var gameData = {
  gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  xIsPlaying: true,
  gameResult: null
}

/************************************************************/
/*>>>>> CONTROLLER <<<<<<*/
/************************************************************/

// check if there is a winner
var checkWinner = () => {
 var winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < winning.length; i++) {
    var [a, b, c] = winning[i];
    if ((gameData.gameBoard[a] === 'X' || gameData.gameBoard[a] === 'O')
      && gameData.gameBoard[a] === gameData.gameBoard[b] && gameData.gameBoard[b] === gameData.gameBoard[c]) {
      gameData.gameResult = gameData.gameBoard[a];
    }
  }
}

// Handle game playing
var handleClick = (event) => {
  var id = event.target.id;

  // update the player data
  gameData.gameBoard[id] = gameData.xIsPlaying ? 'X' : 'O';
  gameData.xIsPlaying = !gameData.xIsPlaying;

  checkWinner();
  renderView();
}

// Restart the game
var handleGameReset = () => {
  gameData.gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  gameData.xIsPlaying = true;
  gameData.gameResult = null;

  renderView();
}

/************************************************************/
/*>>>>> VIEW <<<<<<*/
/************************************************************/

// Game status view
var gameStatus = () => {
  var gameStatus = document.createElement("h4");
  var winner = gameData.gameResult;
  var player = gameData.xIsPlaying ? 'X' : 'O';

  if (winner) {
    gameStatus.innerHTML = `Winner is: ${winner}`;
  } else {
    gameStatus.innerHTML = `${player} is playing`;
  }

  app.appendChild(gameStatus);
}

// Game board view
var renderGameBoard = () => {
  var tb = document.createElement("table");
  var tbapp = document.createElement("tapp");
  for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 3; j++) {
      var cell = document.createElement("td");
      var id = i * 3 + j;
      cell.id = id;

      // if game board at row i, column j has occupied by a player
      var cellData = gameData.gameBoard[id];
      if (cellData === 0) {
        var cellText = document.createTextNode("__");
      }
      if (cellData !== 0) {
        var cellText = document.createTextNode(gameData.gameBoard[id]);
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tbapp.appendChild(row);
  }

  tb.setAttribute("border", 2);
  tb.appendChild(tbapp);
  app.appendChild(tb);
}

// Game reset button
var resetButton = () => {
  var button = document.createElement("button");
  button.innerHTML = "Reset the game board";
  app.appendChild(button);
  // app.appendChild(document.createElement("p"));
}

// Add all event listeners
var addListener = () => {

  // should not add event listener to game board cells if there is a winner
  if (!gameData.gameResult) {
    for (var i = 0; i < 9; i++) {
      var cell = document.getElementById(i + "");

      // should not add event listener to occupied cell
      if (cell.innerHTML === "__") {
        cell.addEventListener("click", handleClick);
      }
    }
  }

  var button = document.querySelector("button");
  button.addEventListener("click", handleGameReset);
};

// Render all views
var renderView = () => {
  // clears the app for before rendering
  app.innerHTML = '';

  resetButton();
  gameStatus();
  renderGameBoard();
  addListener();
}

// Initialize the app
renderView();
