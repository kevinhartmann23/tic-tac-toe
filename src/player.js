class Player {
  constructor(playerId, playerTolken, playerWins){
    this.playerId = playerId;
    this.playerTolken = playerTolken;
    this.playerWins = playerWins;
  }
  saveWins(playerWins){
    localStorage.setItem(`"${this.playerId}"`, JSON.stringify(playerWins));
  }

  retrieveWins(){
    var parsedPlayer = JSON.parse(localStorage.getItem(`"${this.playerId}"`));
    for (var i = 0; i < parsedPlayer.length; i++){
      parsedPlayer[i].wins = this.playerWins;
    }
    return this.playerWins;
  }

}

// var playerOne = new Player(1,"X",4);
// var playerTwo = new Player(2,"X",12);
//
// playerOne.saveWins(playerOne);
// playerTwo.saveWins(playerTwo);
//
// playerOne.retrieveWins();
// playerTwo.retrieveWins();
