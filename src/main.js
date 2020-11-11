//Tic Tac Toe Board Query Selectors and Global Variables 👇

var playerOneWins = document.querySelector("#player-one-wins");
var playerTwoWins = document.querySelector("#player-two-wins");
var gameTitle = document.querySelector("#turn-title");
var gameGrid = document.querySelectorAll(".game-grid");
var resetWinsPlayerOneButton = document.querySelector(".reset-player-one");
var resetWinsPlayerTwoButton= document.querySelector(".reset-player-two");


var playerOne = new Player(1);
var playerTwo = new Player(2);
var game = new Game(new Player(1), new Player(2));

//Tic Tac Toe Event Listeners 👇

window.addEventListener("load", connectBoardToGame);
resetWinsPlayerOneButton.addEventListener("click", resetWinCount);
resetWinsPlayerTwoButton.addEventListener("click", resetWinCount);

//Tic Tac Toe Functions & Event Handlers 👇

function connectBoardToGame() {
  displayWins();
  for(var i = 0; i < gameGrid.length; i++){
    gameGrid[i].addEventListener("click", clickGrid);
    gameGrid[i].innerText = "";
  }
  game.resetBoard();
  toggleResetWinsButton();
  gameTitle.innerText = `It's ${game.currentPlayer.token}'s turn`;
};

function resetWinCount(event){
  if (event.target === resetWinsPlayerOneButton){
    playerOne.resetWins();
    displayWins();
  };
  if (event.target === resetWinsPlayerTwoButton){
    playerTwo.resetWins();
    displayWins();
  };
};

function toggleResetWinsButton(){
  var toggleState = (game.openSpaces.length !== 9)
    resetWinsPlayerOneButton.disabled = toggleState;
    resetWinsPlayerTwoButton.disabled = toggleState;
};

function clickGrid(event){
  if (event.target.closest(".game-board")){
    for (var i = 0; i < gameGrid.length; i++){
      var matchIdToMove = i + 1;
      if (parseInt(event.target.id) === matchIdToMove){
        gameGrid[i].innerText = `${game.currentPlayer.token}`;
        gameGrid[i].removeEventListener("click", clickGrid);
        game.recordPlayersTurn(matchIdToMove);
      };
    };
  };
  gameTitle.innerText = `It's ${game.currentPlayer.token}'s turn`;
  checkGameForResults();
};

function disableGrid(){
  for (var i = 0; i < gameGrid.length; i++){
    gameGrid[i].removeEventListener("click", clickGrid);
  };
};

function identifyGameResults(){
  if (game.win === true){
    gameTitle.innerText = `${game.winner.token} wins!`;
  };
  if (game.draw === true){
    gameTitle.innerText = `It's a draw!`;
  };
};

function checkGameForResults(){
  toggleResetWinsButton();
  if ((game.win === true) || (game.draw === true)){
    var displayResults = setTimeout(connectBoardToGame, 2500);
    disableGrid();
    displayWins();
    identifyGameResults();
  };
};

function displayWins(){
  playerOneWins.innerText = `${playerOne.retrieveWins()} wins`;
  playerTwoWins.innerText = `${playerTwo.retrieveWins()} wins`;
};
