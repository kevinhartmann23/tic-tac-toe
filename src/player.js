class Player {
  constructor(playerId){
    this.id = playerId;
    this.tolken = "";
    this.wins = 0;
    this.turn = false;
    this.moves = [];

    if(playerId === 1){
      this.tolken = "&#x1f379"
    } else {
      this.tolken = "&#129449;"
    }
  }
  saveWins(){
    localStorage.setItem(`Player${this.id} Win Count`, JSON.stringify(this.wins));
  }

  retrieveWins(){
    var parsedPlayer = JSON.parse(localStorage.getItem(`Player${this.id} Win Count`));
    for (var i = 0; i < parsedPlayer.length; i++){
      parsedPlayer[i].playerWins= this.wins;
    }
    return this.playerWins;
  }
}
