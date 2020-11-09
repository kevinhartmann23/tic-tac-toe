# Tic-Tac-Toe

## A Trip Down Memory Lane...
  As a child, tic-tac-toe was a game that you could play anywhere or on anything! During long road trips in the car, on a fast food napkin... Or on the chalkboard at school, when the teacher leaves the room. Tic-tac-toe is a classic game for all ages and can become a go to game during spells of boredom.

  What a simple game! To the naked eye (or non-software developer), tic-tac-toe seems simple and easy. Just draw a grid, and fill them with "X's" or "O's".

  During the build out of this project, I found that tic-tac-toe has never been so complicated! Through some hard work, research, and logic tic-tac-toe is now available to you anywhere at anytime. No need for writing utensils anymore!

  I chose to do a Caribbean beach theme as I was inspired by my desire for warmer weather as winter nears, and my brother and I used to play tic-tac-toe in the sand growing up!

### Contributors
  - Kevin Hartmann

  _Mentor Review:_ Jeff Duke
  _Project Manager:_ Scott Ertmer


### Project Goals
- Solidify and demonstrate the understanding of:
  - DRY Javascript
  - localStorage to persist data
  - event delegation to handle similar event listeners
- Understand the difference between the data model and how data is applied to the DOM
- Iterate through/filter through DOM elements using loops
- Using problem solving skills to break down large problems
  - Using logic to independently solve tic-tac-toe game logic

### Project Expectations
_This project is an important step in demonstrating you are ready to start Module 2. To ensure we can accurately assess that, it’s important you meet the expectations:_

- You are the only one who should type code - no copy-pasting code!
- For any code that you didn’t write entirely by yourself (mentor or rock supported), you should be able delete it and re-write it yourself
- The only resources you use are MDN, CSS Tricks, and lesson plans - no youtube videos or tutorials of programming Tic Tac Toe. If you have an opportunity and are tempted, do the right thing for YOUR learning and don’t do it!
- Any peer-to-peer collaboration should be discussions about IDEAS, not coding together or sharing code.

### Technologies Used
- `Javascript` _for DOM manipulation, and game functionality_
- `HTML` _basic structure of app_
- `CSS` _styling_
- `JSON` _accessing localStorage_
- `Local Storage` _storing user data_
- `git/Github & Github Projects` _workflow and project management_
- `Atom` _text editor_

### Code Architecture
#### HTML
I built a basic HTML structure for this project, my goal was to make everything simple and clean... Just like the game of tic-tac-toe. I made sure to use minimal amounts of divs, keep my classes organized, and only use id's when necessary for Javascript.
#### CSS
In my CSS you will see that I organized all stylings by section. I applied some general stylings to `HTML` & `Body`, from there I broke each section out by area: `Player-Sidebars` & `Game-Area` (each area is labeled appropriately for better readability). Attempting to keep my CSS "DRY"... I styled elements by classes or tags only, and reduced repetitive styling.
#### Javascript
Breaking out my Javascript code into three files, helped with keeping the game functionality and DOM manipulation entirely separate.

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

### Challenges: Oh boy, where to start....
