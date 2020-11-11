class Game {
  constructor(playerOne, playerTwo){
    this.currentPlayer = playerOne || playerTwo;
    this.turnCount = 0;
    this.openSpaces = [1,2,3,4,5,6,7,8,9]
    playerOne.moves = [];
    playerTwo.moves = [];
    this.win = false;
    this.winner = this.winner;
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

setTurnCount(){
  if (this.turnCount <= 8){
    this.turnCount ++;
  } else {
    this.turnCount = 0;
  };
};

selectPlayersTurn(){
  if (this.turnCount %2 === 0){
    this.currentPlayer = playerOne;
  } else {
    this.currentPlayer = playerTwo;
  };
  this.setTurnCount();
};


recordPlayersTurn(selectedMove){
  var player = this.currentPlayer;
  for (var i = 0; i < this.openSpaces.length; i++){
    if (this.openSpaces.includes(selectedMove)){
      player.moves.push(selectedMove);
      this.openSpaces.splice(this.openSpaces.indexOf(selectedMove), 1);
      }
    };
  this.checkBoardForWinOrDraw(player);
  this.selectPlayersTurn();
};

evaluateWin(player){
  for (var i = 0; i < this.winCombinations.length; i++){
    if ((player.moves.includes(this.winCombinations[i][0]))
    && (player.moves.includes(this.winCombinations[i][1]))
    && (player.moves.includes(this.winCombinations[i][2]))){
      this.win = true;
      this.declareWin(player);
    }
  };
};

declareWin(player){
  if(this.win = true){
    this.winner = player;
    player.wins++;
    player.saveWins();
  }
}

evaluteDraw(){
  if ((this.openSpaces.length === 0) && (this.win === false)){
    this.draw = true;
  }
};

checkBoardForWinOrDraw(player){
  player = this.currentPlayer;
  if (this.turnCount >= 5){
    this.evaluateWin(player);
    this.evaluteDraw();
  }
};


resetBoard(){
  this.currentPlayer = playerOne || playerTwo;
  this.turnCount = 0;
  this.openSpaces = [1,2,3,4,5,6,7,8,9]
  playerOne.moves = [];
  playerTwo.moves = [];
  this.win = false;
  this.draw = false;
  this.selectPlayersTurn();
};

};
