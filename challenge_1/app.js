console.log('app running');

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

    console.log(a, b, c);
    if ((gameData.gameBoard[a] === 'X' || gameData.gameBoard[a] === 'O')
      && gameData.gameBoard[a] === gameData.gameBoard[b] && gameData.gameBoard[b] === gameData.gameBoard[c]) {
      gameData.gameResult = gameData.gameBoard[a];
      return true;
    }
  }

  // winner not found
  return false;

}

/**
 * FOUNCTION1: click on game board
 * detects player click on the table
 * handle the click by:
 *   1. Update game board in MODEL
 *   2. Rerender the view to show the updated game board
 *   3. check Winner
 */

var handleClick = (event) => {
  var id = event.target.id;

  // update the player data
  gameData.gameBoard[id] = gameData.xIsPlaying ? 'X' : 'O';
  gameData.xIsPlaying = !gameData.xIsPlaying;

  if (checkWinner()) {
    // disable game play ==>  remove all event listner in table?
  }

  renderView();
}

var handleGameReset = () => {
  // reset model
  gameData.gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  gameData.xIsPlaying = true;
  gameData.gameResult = null;
  // call the render
  renderView();
}

/************************************************************/
/*>>>>> VIEW <<<<<<*/
/************************************************************/

/**
 * a <h2>: display winner or tie (use disabled attribute to only show when there's a result)
 * a <h4>: display which player is playing
 * a <table>: the game board
 * a <button>: to reset the game. Only appears when one game ends (use disabled attribute)
 */

var app = document.getElementById("app");

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

      // if game board at i, j has occupied by a player
      var cellData = gameData.gameBoard[id];
      if (cellData === 0) {
        // var cellText = document.createTextNode(" ");
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

// game reset button
var resetButton = () => {
  var button = document.createElement("button");
  button.innerHTML = "Reset the game board";
  if (gameData.gameResult) {
    button.setAttribute("disabled", false);
  } else {
    button.setAttribute("disabled", true);
  }
  app.appendChild(button);
}

// add all event listeners
var addListener = () => {
  for (var i = 0; i < 9; i++) {
    var cell = document.getElementById(i + "");
    cell.addEventListener("click", handleClick);
  }

  var button = document.querySelector("button");
  button.addEventListener("click", handleGameReset);
};

// render views
var renderView = () => {
  // clears the app for before rendering
  app.innerHTML = '';

  resetButton();
  gameStatus();
  renderGameBoard();
  addListener();
}

// initialize the app
renderView();
