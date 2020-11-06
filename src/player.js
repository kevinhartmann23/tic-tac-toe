class Player {
  constructor(playerId, playerTolken, playerWins){
    this.playerId = playerId;
    this.playerTolken = playerTolken;
    this.playerWins = playerWins;
  }
  saveWins(player){
    localStorage.setItem("players", JSON.stringify(player));
  }

  retrieveWins(){
    var parsePlayer = JSON.parse(localStorage.getItem("players"));
    for (var i = 0; i < parsePlayer.length; i++){
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

//currently only saving on player to storage, check back after building games.js
//game.js needs a player array?
