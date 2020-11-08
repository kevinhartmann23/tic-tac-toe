//Tic Tac Toe Board Query Selectors and Global Variables
var playerOneWins = document.querySelector("#player-one-wins");
var playerTwoWins = document.querySelector("#player-two-wins");
var gameTitle = document.querySelector("#turn-title");
var gameGrid = document.querySelectorAll(".game-grid");


var playerOne = new Player(1);
var playerTwo = new Player(2);
var game = new Game(playerOne, playerTwo);

//Tic Tac Toe Event Listeners
window.addEventListener("load", loadPage);

//Global
//Tic Tac Toe Functions & Event Handlers 👇

function connectBoardToGame() {
    for(var i = 0; i < gameGrid.length; i++){
      gameGrid[i].addEventListener("click", clickGrid);
    }
};

function clickGrid(event){
  event.preventDefault();
  gameGrid.innerText = "";
  if(event.target.closest(".game-board")){
    for(var i = 0; i < gameGrid.length; i++){
      if(parseInt(event.target.closest("div").id) == i + 1){
        gameGrid[i].innerText = `${game.turn.token}`;
        game.recordPlayersTurn(parseInt(event.target.closest("div").id));
      }
    }
  }
  gameTitle.innerText = `It's ${game.turn.token}'s turn`;
};

function displayWins(){
  playerOneWins.innerText = `${playerOne.retrieveWins()} wins`;
  playerTwoWins.innerText = `${playerTwo.retrieveWins()} wins`;
};

function loadPage(){
  game.resetBoard();
  connectBoardToGame();
  game.selectPlayersTurn();
};
