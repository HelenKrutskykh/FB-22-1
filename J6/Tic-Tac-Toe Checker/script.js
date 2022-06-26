// Tic-Tac-Toe Checker
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's 
// current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 
// 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
// [0, 1, 2],
// [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots and no winners),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw, all spots are filled).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


let gameArr =[board[0][0] * board[0][1] * board[0][2], 
              board[1][0] * board[1][1] * board[1][2], 
              board[2][0] * board[2][1] * board[2][2], 
              board[0][0] * board[1][1] * board[2][2], 
              board[0][0] * board[1][0] * board[2][0], 
              board[2][0] * board[1][1] * board[0][2], 
              board[0][1] * board[1][1] * board[2][1], 
              board[0][2] * board[1][2] * board[2][2]];  


gameArr.find(function(item) {
  console.log(item);
  let result;
  if (item === 1) 
      result = 'X won';

  if (item === 8) 
      result = 'O won';


  if (item > 0 && item !== 8 && item !== 1) 
      result = 'Draw';

  else {
      function isZero(item) {
          return item === 0;
        }
      if(gameArr.every(isZero)) {
          result = 'Game is not finished yet';
      }; 

  }
  
})

console.log(result);