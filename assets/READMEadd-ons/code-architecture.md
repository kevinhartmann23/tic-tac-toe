## Javascript Code Architecture
_in detail_

1) `player.js`: _contains code regarding to the player class:_
  - Created a `Player` class
      - `constructor` _containing one parameter of `playerId`_
          - Properties:
            - `id`: _assigns unique ID to each player_
            - `token`: _stores the value of players game piece_
            - `wins` : _number of wins of player_  
          - Methods:
            - `saveWins`: _saves `Player` wins to localStorage by ID_
            - `retrieveWins`: _updates `Player` wins from localStorage_
            - `resetWins`: _resets `Players` wins to `0` in local localStorage_
2) `game.js`: _contains code for game functionality and game logic_
  - Created a `Game` class
    - `constructor` _containing two parameter of `playerOne` & `playerTwo_
        - Properties:
          - `turn`: _default of playerOne_
          - `turnCount`: _default of `0`, keeping track of move counts_
          - `possibleMoveValues`: _set to available moves, default being all `9` potential move opportunities_
          - `playerOne` & `playerTwo`: _default as empty array, storing player move values_
          - `win` & `draw`: _defaulted to false, changes on game result_
          - `winner`: _identifies a winner_
          - `winCombinations`: _stores logic of every possible winning move combinations, set by each square in a tic-tac-toe board as a value of `1-9`_
        - Methods:
          - `selectPlayersTurn`:_determines which player turn it is, based of the `turnCount`_
          - `recordPlayersTurn`: _takes a players move and stores into specific player's move array, and removes that move from  `possibleMoveValues`_
          - `evaluateWin`: _iterates through win combinations by comparing the players moves array by index of win combinations. As there are 3 indexes in a win combination, each condition statement is set to an index of 0-2. If a value is returned great than or equal to 0, the players moves match with an index from the win combinations. If all 3 match, it is a win!_
          - `evaluteDraw`: _a little more simple, if all possible moves have been played, and there is no win. It is a draw!_
          - `checkBoardForWinOrDraw`: _identifying that a win cannot happen before `5` moves, there is no need to check for a win before then. At `5` moves, this method checks for wins and draws simultaneously_
          - `resetBoard`: _simply resets default values_
3) `main.js`: _DOM manipulation_
  - Global Variables:
    - `querySelectors`
    - instance of `Game` class
    - 2 instances of `Player` class
  - Event Listeners
  - Functions and Event Handlers
    - `connectBoardToGame`: _this sets up the user's board to main functionality from `game.js` and is called on page `load`_
    - `resetWinCount` & `toggleResetWinsButton`: _provides user's with an extra feature. The user can now reset their wins, this allows for new users to play on the same app!_
    - `clickGrid`: _makes grid clickable, and records users move by connecting the `id` of each child element to the possible moves_
    - `disableGrid`: _disables clickable feature when a win or draw is detected_
    - `identifyGameResults`: _checks for wins/draws and displays results to users_
    - `checkGameForResults`: _identifies if there was a win or draw, and displays message to user based on outcome, after that there is a timeOut that resets the board_
    - `displayWins`: _updates users view of wins, based on the record kept in local localStorage_
    
[return to main page](https://github.com/kevinhartmann23/tic-tac-toe)
