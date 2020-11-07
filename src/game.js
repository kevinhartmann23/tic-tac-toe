class Game {
  constructor(playerOne, playerTwo){
    this.turn = playerOne || playerTwo;
    this.turnCount = 0;
    this.possibleMoveValues = [1,2,3,4,5,6,7,8,9]
    playerOne.moves = [];
    playerTwo.moves = [];


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

  recordPlayersTurn(selectedMove){
    var player = this.turn;
    for(var i = 0; i < this.possibleMoveValues.length; i++){
      if(this.possibleMoveValues.includes(selectedMove)){
        player.moves.push(selectedMove);
        this.possibleMoveValues.splice(this.possibleMoveValues.indexOf(selectedMove), 1);
      }
    }
    console.log(player.moves);
    console.log(this.possibleMoveValues);
  }

  checkBoardForDraw(){
    //Only possibility for a draw is if there are possibleMoveValues remaining
    //iterate through possibleMoveValues
    //if possibleMoveValues.length = 0
    //this.draw = true;
  }


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

// playerOne.playerMoves = [1,2,3,5]; //SHOULD WIN
// playerTwo.playerMoves = [6,8,9]; //SHOULD REMAIN WINS=0

var newGame = new Game(playerOne, playerTwo);


//Questions for Mentor:
//1) At first I have a this.players = [playerOne, playerTwo] in the constructor,
//would this be helpful to track moves a little easier?

//2) Will you psuedoCode winning conditions with me?
