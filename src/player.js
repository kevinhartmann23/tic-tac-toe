class Player {
  constructor(playerId){
    this.playerId = playerId;
    this.playerTolken = "";
    this.playerWins = 0;

    if(playerId === 1){
      this.playerTolken = "&#x1f379"
    } else {
      this.playerTolken = "&#129449;"
    }
  }
  saveWins(playerWins){
    localStorage.setItem(`Player${this.playerId} Win Count`, JSON.stringify(this.playerWins));
  }

  retrieveWins(){
    var parsedPlayer = JSON.parse(localStorage.getItem(`Player${this.playerId} Win Count`));
    for (var i = 0; i < parsedPlayer.length; i++){
      parsedPlayer[i].wins = this.playerWins;
    }
    return this.playerWins;
  }
}
