const helper = {
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

  // check for 4 connected row

  // check for 4 connected col

  // check for 4 connected major diagnal (top left -> bottom right)

  // check for 4 connected minor diagnal (top right -> bottom left)
}

module.exports = helper;