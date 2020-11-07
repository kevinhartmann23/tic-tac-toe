class Game {
  constructor(playerOne, playerTwo){
    this.turn = playerOne || playerTwo;
    this.turnCount = 0;
    this.possibleMoveValues = [1,2,3,4,5,6,7,8,9]
    playerOne.moves = [];
    playerTwo.moves = [];
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
    console.log(`it's ${this.turn.token}'s turn`);
    console.log("Turn Count Changed To", this.turnCount);
  }

  recordPlayersTurn(selectedMove){
    var player = this.turn;
    for(var i = 0; i < this.possibleMoveValues.length; i++){
      if(this.possibleMoveValues.includes(selectedMove)){
        player.moves.push(selectedMove);
        this.possibleMoveValues.splice(this.possibleMoveValues.indexOf(selectedMove), 1);
        this.selectPlayersTurn();
      } else {
        return player;
        console.log("That move is already taken, please choose again!")
      }
      }
    };

  checkBoardForWin(player){
    for(var i = 0; i < this.winCombinations.length; i++){
      if((player.moves.indexOf(this.winCombinations[i][0])) >= 0) {
        if((player.moves.indexOf(this.winCombinations[i][1])) >= 0){
          if((player.moves.indexOf(this.winCombinations[i][2])) >= 0){
            this.win = true;
            player.wins ++;
            player.saveWins();
            this.resetBoard();
          } else {
            this.win;
          }
          }
        }
      };
    };


  checkBoardForDraw(){
    if(this.possibleMoveValues.length === 0){
      this.draw = true;
      this.resetBoard();
    }
  };


  resetBoard(){
    if(this.win || this.draw === true){
      this.turn = playerOne || playerTwo;
      this.turnCount = 0;
      this.possibleMoveValues = [1,2,3,4,5,6,7,8,9]
      playerOne.moves = [];
      playerTwo.moves = [];
      this.win = false;
      this.draw = false;
    }
  };
}


//Mock Game Information --
var playerOne = new Player(1);
var playerTwo = new Player(2);

var newGame = new Game(playerOne, playerTwo);
