//Tic Tac Toe Board Query Selectors and Global Variables
var playerOneWins = document.querySelector("#player-one-wins");
var playerTwoWins = document.querySelector("#player-two-wins");
var gameTitle = document.querySelector("#turn-title");
var gameGrid = document.querySelectorAll(".game-grid");
var resetWinsPlayerOne = document.querySelector(".reset-player-one");
var resetWinsPlayerTwo= document.querySelector(".reset-player-two");


var playerOne = new Player(1);
var playerTwo = new Player(2);
var game = new Game(playerOne, playerTwo);

//Tic Tac Toe Event Listeners
window.addEventListener("load", connectBoardToGame);
resetWinsPlayerOne.addEventListener("click", resetWinCount);
resetWinsPlayerTwo.addEventListener("click", resetWinCount);

//Tic Tac Toe Functions & Event Handlers 👇

function connectBoardToGame() {
    displayWins();
    for(var i = 0; i < gameGrid.length; i++){
      gameGrid[i].addEventListener("click", clickGrid);
      gameGrid[i].innerText = "";
    }
    game.resetBoard();
    game.selectPlayersTurn();
    gameTitle.innerText = `It's ${game.turn.token}'s turn`;
};

function resetWinCount(event){
  if(event.target === resetWinsPlayerOne){
    playerOne.resetWins();
    displayWins();
  }
  if(event.target === resetWinsPlayerTwo){
      playerTwo.resetWins();
      displayWins();
  }
};

function clickGrid(event){
  if(event.target.closest(".game-board")){
    for(var i = 0; i < gameGrid.length; i++){
      var matchIdToMove = i + 1;
      if(parseInt(event.target.closest("div").id) == matchIdToMove){
        gameGrid[i].innerText = `${game.turn.token}`;
        gameGrid[i].removeEventListener("click", clickGrid);
        game.recordPlayersTurn(matchIdToMove);
      }
    }
  };
  gameTitle.innerText = `It's ${game.turn.token}'s turn`;
  checkGameForResults();
};

function disableGrid(){
  for(var i = 0; i < gameGrid.length; i++){
    gameGrid[i].removeEventListener("click", clickGrid);
  }
};

function identifyGameResults(){
  if(game.win === true){
    gameTitle.innerText = `${game.winner.token} wins!`;
  };
  if(game.draw === true){
    gameTitle.innerText = `It's a draw!`;
  }
};

function checkGameForResults(){
  if((game.win === true) || (game.draw === true)){
    var displayResults = setTimeout(connectBoardToGame, 2500);
    disableGrid();
    displayWins();
    identifyGameResults();
  }
};

function displayWins(){
  playerOneWins.innerText = `${playerOne.retrieveWins()} wins`;
  playerTwoWins.innerText = `${playerTwo.retrieveWins()} wins`;
};
