console.log('app running');

/************************************************************/
/*>>>>> VIEW <<<<<<*/
/************************************************************/

/**
 * a <p>: display winner or tie
 * a <span>: display which player is playing
 * a <table>: the game board
 */


/************************************************************/
/*>>>>> CONTROLLER <<<<<<*/
/************************************************************/

/**
 * FOUNCTION1: click on game board
 * detects player click on the table
 * handle the click by:
 *   1. Update game board in MODEL
 *   2. Rerender the view to show the updated game board
 */

/**
 * FUNCTION2: win or tie
 * after handling the click, detect:
 *   1. if there's a winner, render the winner on the VIEW
 *   2. if there's a tie, render tie on the VIEW
 */

/************************************************************/
/*>>>>> MODEL <<<<<<*/
/************************************************************/

/**
 * DATA1: game board
 * tracks the board current information in a matrix
 * as user moves, update the matrix
 * [[0, 0, 0],
 *  [0, 0, 0],
 *  [0, 0, 0]]
 */

/**
 * DATA2: who is playing?
 * tracks which player is in turn
 */
