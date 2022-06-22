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
  detectWin: (gameData) => {
    var horizontalWin = gameLogic._detectHorizontalWin(gameData);
    var verticalWin = gameLogic._detectVerticalWin(gameData);
    var diagnalWin = gameLogic._detectDiagnalWin(gameData);

    if(horizontalWin || verticalWin || diagnalWin) {
      return horizontalWin || verticalWin || diagnalWin;
    }

    return null;
  },

  // detect tie
  detectTie: (gameData) => {
    var tie = true;
    // check if all spaces are occupied
    for(var i = 0; i < gameData.length; i++) {
      if(gameData[i].includes('')) {
        tie = false;
        break;
      }
    }
    return tie;
  },

  // detect horizontal win
  _detectHorizontalWin: (gameData) => {
    for(var i = 0; i < gameData.length; i++) {
      var rowData = gameData[i];
      var rowMatch = gameLogic._rowMatch(rowData);
      if(rowMatch) {
        return rowMatch;
      }
    }
    return null;
  },

  // detect row match
  _rowMatch: (rowData) => {
    var color = '';
    var count = 0;
    for(var i = 0; i <= rowData.length; i++) {
      var cell = rowData[i];
      // found 4 connected color
      if(count === 4) {
        return color;
      }

      // cell is empty
      if(cell === '') {
        continue;
      } else {

        // if color matches
         if(color === cell) {
          count ++;
        } else {
        // if color does not match, reassign color, count start over
          color = cell;
          count = 1;
        }
      }
    }
    return null;
  },

  // detect vertical win
  _detectVerticalWin: (gameData) => {
    for(var i = 0; i < gameData[0].length; i++) {
      var colMatch = gameLogic._colMatch(gameData, i);
      if(colMatch) {
        return colMatch;
      }
    }
    return null;
  },

  // detect vertical match
  _colMatch: (gameData, col) => {
    var color = '';
    var count = 0;
    for(var i = 0; i < gameData.length; i++) {
      var cell = gameData[i][col];
      // found 4 connected color
      if(count === 4) {
        return color;
      }

      // cell is empty
      if(cell === '') {
        continue;
      } else {

        // if color matches
         if(color === cell) {
          count ++;
        } else {
        // if color does not match, reassign color, count start over
          color = cell;
          count = 1;
        }
      }
    }

    if(count === 4) {
      return color;
    }

    return null;
  },

  // detect diagnal win
  _detectDiagnalWin: (gameData) => {
    for(var i = 0; i < gameData[0].length; i++) {
      var majorDiagnalMatch = gameLogic._majorDiagnalMatch(gameData, i);
      var minorDiagnalMatch = gameLogic._minorDiagnalMatch(gameData, i);

      if(majorDiagnalMatch || minorDiagnalMatch) {
        return majorDiagnalMatch || minorDiagnalMatch;
      }
    }

    return null;
  },

  // detect major diagnal match (top left -> bottom right)
  _majorDiagnalMatch: (gameData, col) => {
    var color = '';
    var row = 0;
    var i, j, count;

    while(row < 3) {
      i = row;
      j = col;
      count = 0;

      while(gameData[i] && gameData[i][j]) {
        var cell = gameData[i][j];

        if(count === 4) {
          return color;
        }

        // cell is empty
        if(cell === '') {
          i ++;
          j ++;
          continue;
        } else {

          // if color matches
          if(color === cell) {
            count ++;
          } else {
          // else reassign color, count start over
            color = cell;
            count = 1;
          }

          i ++;
          j ++;
        }
      }
      row ++;
    }

    if(count === 4) {
      return color;
    }

    return null;
  },

  // detect minor diagnal match (top right -> bottom left)
  _minorDiagnalMatch: (gameData, col) => {
    var color = '';
    var row = 0;
    var i, j, count;

    while(row < 3) {
      i = row;
      j = col;
      count = 0;

      while(gameData[i] && gameData[i][j]) {
        var cell = gameData[i][j];

        if(count === 4) {
          return color;
        }

        // cell is empty
        if(cell === '') {
          i ++;
          j --;
          continue;
        } else {

          // if color matches
          if(color === cell) {
            count ++;
          } else {
          // else reassign color, count start over
            color = cell;
            count = 1;
          }

          i ++;
          j --;
        }
      }
      row ++;
    }

    if(count === 4) {
      return color;
    }

    return null;
  }
}

// if(!module) {
//   var module = {};
// }

module.exports = gameLogic;