Tic-Tac-Toe is one of the best beginner LLD problems. It mainly tests:

OOP design

Clean class separation

Game logic

You usually don’t need many design patterns, but a few patterns can be used.

1️⃣ Main Classes (Basic LLD)

Entities:

Player
Board
Cell
Game


Structure:

Game
 ├── Board
 ├── Player
 └── playMove()

2️⃣ Simple Class Diagram
+--------+
| Player |
+--------+
| name   |
| symbol |
+--------+

     |
     v

+--------+
| Board  |
+--------+
| grid   |
| size   |
+--------+
| print()|
| move() |
+--------+

     |
     v

+--------+
| Game   |
+--------+
| players|
| board  |
+--------+
| start()|
| checkWinner()|
+--------+

3️⃣ Patterns You Can Use
1️⃣ Strategy Pattern

Used for player move strategy.

Example:

HumanPlayer
AIPlayer


Both implement:

makeMove()

2️⃣ Factory Pattern

To create players:

PlayerFactory.create("human")
PlayerFactory.create("ai")

3️⃣ State Pattern (Optional)

Game states:

GameStart
PlayerTurn
GameOver

4️⃣ Simple Implementation (JavaScript)
Player
class Player {
    constructor(name, symbol){
        this.name = name
        this.symbol = symbol
    }
}

Board
class Board {

    constructor(size){
        this.size = size
        this.grid = Array(size).fill().map(()=>Array(size).fill(null))
    }

    place(row, col, symbol){
        if(!this.grid[row][col]){
            this.grid[row][col] = symbol
            return true
        }
        return false
    }

    print(){
        console.log(this.grid)
    }

}

Game
class Game {

    constructor(player1, player2){
        this.board = new Board(3)
        this.players = [player1, player2]
        this.turn = 0
    }

    play(row, col){

        let player = this.players[this.turn]

        if(this.board.place(row,col,player.symbol)){
            this.board.print()
            this.turn = 1 - this.turn
        }

    }

}

Run Game
let p1 = new Player("A","X")
let p2 = new Player("B","O")

let game = new Game(p1,p2)

game.play(0,0)
game.play(1,1)

5️⃣ Interview Explanation (Very Important)

When asked TicTacToe LLD, explain like this:

Step 1

Identify entities:

Player
Board
Game
Move

Step 2

Responsibilities:

Board → manage grid
Player → symbol and move
Game → game flow

Step 3

Patterns:

Strategy → player move strategy
Factory → player creation
State → game state

6️⃣ Difficulty Level
Difficulty: Easy
Time to implement: 30–45 minutes

⭐ Pro Interview Tip

Most candidates only write:

Board
Player
Game


But if you mention Strategy Pattern for AI players, interviewers see you as strong in LLD.

If you want, I can also show a “perfect FAANG-level Tic-Tac-Toe LLD design” with:

AI player

Undo move

Board validation

Clean architecture

This is the version used in real interviews.  