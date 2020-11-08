//Tic Tac Toe Board Query Selectors and Global Variables
var playerOneWins = document.querySelector("#player-one-wins");
var playerTwoWins = document.querySelector("#player-two-wins");

var playerOne = new Player(1);
var playerTwo = new Player(2);
var game = new Game(playerOne, playerTwo);
playerOne.wins = 2;
playerTwo.wins = 4;
//Tic Tac Toe Event Listeners



//Global
//Tic Tac Toe Functions & Event Handlers 👇

function displayWins(){
  playerOneWins.innerText = `${playerOne.retrieveWins()} wins`;
  playerTwoWins.innerText = `${playerTwo.retrieveWins()} wins`;
};
