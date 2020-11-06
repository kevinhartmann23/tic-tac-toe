class Game {
  constructor(playerOne, playerTwo){
    this.players = [playerOne, playerTwo];
  }
}

var playerOne = new Player(1,"X",4);
var playerTwo = new Player(2,"O",12);

var newGame = new Game(playerOne, playerTwo);
