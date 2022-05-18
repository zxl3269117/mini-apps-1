console.log('app running');

/************************************************************/
/*>>>>> MODEL <<<<<<*/
/************************************************************/

var gameData = {
  gameBoard: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  xIsPlaying: true,
  gameResult: null
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
      cell.id = i * 3 + j;

      // if game board at i, j has occupied by a player
      var cellData = gameData.gameBoard[i][j];
      if (cellData === 0) {
        // var cellText = document.createTextNode(" ");
        var cellText = document.createTextNode("___");
      }
      if (cellData !== 0) {
        var cellText = document.createTextNode(gameData.gameBoard[i][j]);
      }
      cell.addEventListener("click", handleClick);
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
  button.addEventListener("click", handleGameReset);
  if (gameData.gameResult) {
    button.setAttribute("disabled", false);
  } else {
    button.setAttribute("disabled", true);
  }
  app.appendChild(button);
}

var renderView = () => {
  // clears the app for before rendering
  app.innerHTML = '';

  resetButton();
  gameStatus();
  renderGameBoard();
}

// initialize the app
renderView();

/************************************************************/
/*>>>>> CONTROLLER <<<<<<*/
/************************************************************/
/**
 * FUNCTION2: win or tie
 * checker winner, update the model
 * disable click event on the board
 */

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
    var a = document.getElementById(winning[i][0]).value;
    var b = document.getElementById(winning[i][1]).value;
    var c = document.getElementById(winning[i][2]).value;

    if (a === b && b === c) {
      return gameData.gameResult = a;
      // disable the click function of all table cells
    }
  }

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
  // add the text node to the clicked cell
  console.log(event);
  gameData.xIsPlaying = !gameData.xIsPlaying;
  checkWinner();
}

var handleGameReset = () => {
  // reset model
  gameData.gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  gameData.xIsPlaying = true;
  gameData.gameResult = null;
  // call the render
  renderView();
}