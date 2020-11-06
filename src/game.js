class Game {
  constructor(playerOne, playerTwo){
    this.players = [playerOne, playerTwo];
    this.turnCount = 0;
    this.winningPlay = [];
    this.winConditions =
      [{
        horizontal: [
            {option: [1,2,3]},
            {option: [4,5,6]},
            {option: [7,8,9]}
            ],
        vertical: [
            {option: [1,4,7]},
            {option: [2,5,8]},
            {option: [3,6,9]}
            ],
        diagnol: [
          {option: [1,5,9]},
          {option: [3,5,7]},
          ],
      }];

  }
}



var playerOne = new Player(1);
var playerTwo = new Player(2);

var newGame = new Game(playerOne, playerTwo);
