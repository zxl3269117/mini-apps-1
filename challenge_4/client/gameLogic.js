const gameLogic = {
  // get the row # of the toggled piece
  getToggledRow: (gameData, col) => {
    for(var row = gameData.length - 1; row >= 0; row--) {
      if(gameData[row][col] === '') {
        return row;
      }
    }
  },

  // detect win

  // detect tie

  // detect horizontal win
  detectHorizontalWin: (gameData) => {
    for(var i = 0; i < gameData.length; i++) {
      var rowData = gameData[i];
      if(gameLogic._rowMatch(rowData)) {
        return gameLogic._rowMatch(rowData);
      }
    }
    return null;
  },

  // detect row match
  _rowMatch: (rowData) => {
    var color = '';
    var count = 0;
    for(var i = 0; i <= rowData.length; i++) {

      // founc 4 connected color
      if(count === 4) {
        return color;
      }

      // cell is empty
      if(rowData[i] === '') {
        continue;
      } else {

        // if color matches
         if(color === rowData[i]) {
          count ++;
        } else {
        // if color does not match, reassign color, count start over
          color = rowData[i];
          count = 1;
        }
      }
    }

    return null;
  },

  // detect vertical win
  detectVerticalWin: (gameData) => {

  }

  // detect vertical match

  // detect diagnal win

  // detect major diagnal match (top left -> bottom right)

  // detect minor diagnal match (top right -> bottom left)
}

var module = {};
module.exports = gameLogic;