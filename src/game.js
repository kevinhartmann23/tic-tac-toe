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
  };

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
  };

  recordPlayersTurn(selectedMove){
    var player = this.turn;
    for(var i = 0; i < this.possibleMoveValues.length; i++){
      if(this.possibleMoveValues.includes(selectedMove)){
        player.moves.push(selectedMove);
        this.possibleMoveValues.splice(this.possibleMoveValues.indexOf(selectedMove), 1);
        this.checkBoardForWinOrDraw(player, player);
      }
      }
      this.selectPlayersTurn();
    };

  evaluateWin(player){
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


  evaluteDraw(){
    if(this.possibleMoveValues.length === 0){
      this.draw = true;
      this.resetBoard();
    }
  };

  checkBoardForWinOrDraw(playerOne, playerTwo){
    if(this.turnCount >= 4){
      this.evaluateWin(playerOne);
      this.evaluateWin(playerTwo);
    } else if (this.turnCount === 9){
      this.evaluteDraw();
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

};
