class Game {
  constructor(playerOne, playerTwo){
    this.turn = playerOne || playerTwo;
    this.turnCount = 0;
    this.possibleMoveValues = [1,2,3,4,5,6,7,8,9]
    playerOne.moves = [1,2,5];
    playerTwo.moves = [6,9,3,8];
    this.win = false;
    this.draw = false;


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
      this.turn = playerOne;
    } else {
      this.turn = playerTwo;
    }
    if(this.turnCount <= 8){
      this.turnCount ++;
    } else {
      this.turnCount = 0;
    }
    console.log(`it's ${this.turn}'s turn`);
    console.log("Turn Count Changed To", this.turnCount);
  }

  checkBoardForWin(player){
    for(var i = 0; i < this.winCombinations.length; i++){
      if(player.moves.indexOf(this.winCombinations[i][0])) {
        console.log(player.moves.indexOf(this.winCombinations[i][0]))
        if(player.moves.indexOf(this.winCombinations[i][1])){
          console.log(player.moves.indexOf(this.winCombinations[i][1]))
          if(player.moves.indexOf(this.winCombinations[i][2])){
            console.log(player.moves.indexOf(this.winCombinations[i][2]))
            player.wins++;
            this.win = true;
            }
          }
        }
      };
    };


  checkBoardForDraw(){
    if(this.possibleMoveValues.length === 0){
      this.draw = true;
    }
  };


  resetBoard(){
    this.turn = playerOne || playerTwo;
    this.turnCount = 0;
    this.possibleMoveValues = [1,2,3,4,5,6,7,8,9]
    playerOne.moves = [];
    playerTwo.moves = [];
  };


}


//Mock Game Information --
var playerOne = new Player(1);
var playerTwo = new Player(2);

var newGame = new Game(playerOne, playerTwo);

//Questions for Mentor:
//1) At first I have a this.players = [playerOne, playerTwo] in the constructor,
//would this be helpful to track moves a little easier?

//2) Will you psuedoCode winning conditions with me?
