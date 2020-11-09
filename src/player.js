class Player {
  constructor(playerId){
    this.id = playerId;
    this.token = "";
    this.wins = 0;

    if(playerId === 1){
      this.token = '🍹'
    } else {
      this.token = '🦩'
    }
  }

  saveWins(){
    localStorage.setItem(`Player${this.id} Win Count`, JSON.stringify(this.wins));
  }

  retrieveWins(){
    var parsedPlayer = JSON.parse(localStorage.getItem(`Player${this.id} Win Count`));
    for (var i = 0; i < parsedPlayer.length; i++){
      this.wins = parsedPlayer[i].wins;
    }
    return this.wins;
  };
  
}
