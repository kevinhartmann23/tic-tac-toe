class Game {
  constructor(playerOne, playerTwo){
    this.turnCount = 0;
    this.moves = [];

    this.winCombinations = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]
          ];
  }

  selectPlayersTurn(){
    if(this.turnCount %2 == 0){
      playerOne.turn = true;
      playerTwo.turn = false;
    } else {
      playerTwo.turn = true;
      playerOne.turn = false;
    }
    if(this.turnCount <= 8){
      this.turnCount ++;
    } else {
      this.turnCount = 0;
    }
    console.log(this.turnCount);
    console.log(playerOne.turn);
    console.log(playerTwo.turn);
  }

  checkBoardForWins(){


    //iterate through player moves array, and compare to win winCombinations
  }

  checkBoardForDraw(playerOne, playerTwo){
    if(this.moves.length === 8){
      resetBoard();
    } else {
      checkBoardForWins();
    }
    //iterate through player moves array, if length is 9 === draw;
    //reset playerMoves
  }

  assignWinner(){
    //call checkBoardForWins():
    //If return is true -
    //player.wins ++
    //player.saveWins(player.id)
    //reset playerMoves
  }

  resetBoard(){
    this.turnCount;
    playerOne.moves;
    playerTwo.moves;
    playerOne.turn;
    playerTwo.turn;
    this.moves;
    //empty all moves in both player arrays
  }




}



var playerOne = new Player(1);
var playerTwo = new Player(2);

var newGame = new Game(playerOne, playerTwo);
