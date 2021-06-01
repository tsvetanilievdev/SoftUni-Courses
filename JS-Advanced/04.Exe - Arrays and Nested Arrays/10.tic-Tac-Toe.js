/* 10.	*Tic-Tac-Toe - Make a tic-tac-toe console application.
You will receive an array of arrays. 
As you know there are two players in this game, so the first element of the input will be first player's chosen coordinates, 
the second element will be the second player's turn coordinates and so on.

The initial state of the dashboard is
    [[false, false, false],
    [false, false, false],
    [false, false, false]]

The first player's mark is X and the second player's mark is O.

        Input
One parameter:
•	An array - the moves in row that players make

        Output
•	There are two players - X and O
•	If  a player tries to make his turn on already taken place, he should make his turn again and you should print the following message:
"This place is already taken. Please choose another!"
•	If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:
"The game ended! Nobody wins :("
•	If someone wins you should print the following message and  the current state of the dashboard:
"Player {x} wins"
Note: When printing the state of the dashboard the elements of each row the dashboard should be separated by "\t" and each row should be on new line.

    Constraints
The elements in the input array will always be enough to end the game. 
 */
function ticTac(input) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let isWon = false;
    let winner = '';
    let player = 'X'; // start player X
    let movesCount = 0;

    for (let i = 0; i < input.length; i++) {
        let [rowMove, colMove] = input[i].split(' ');
        rowMove = Number(rowMove);
        colMove = Number(colMove);
        let move = dashboard[rowMove][colMove];

        // check is legal move
        if (move !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        //player make a legal move
        dashboard[rowMove][colMove] = player;
        movesCount++;
        if (player === 'X') {
            player = 'O';
        } else {
            player = 'X';
        }

        // check is there a winner
        for (let row = 0; row < dashboard.length; row++) {
            let currRow = [];
            for (let col = 0; col < dashboard[row].length; col++) {
                let currMove = dashboard[row][col];
                currRow.push(currMove)
            }
            let check = currRow.every(x => {
                return x == currRow[0] && x !== false;
            });
            if (check) {
                winner = currRow[0];
                isWon = true;
                break;
            }
        }

        for (let col = 0; col < dashboard[0].length; col++) {
            let currCol = [];
            for (let row = 0; row < dashboard.length; row++) {
                let currMove = dashboard[row][col];
                currCol.push(currMove)
            }
            let check = currCol.every(x => {
                return x == currCol[0] && x !== false;
            });
            if (check) {
                winner = currCol[0];
                isWon = true;
                break;
            }
        }

        let length = dashboard[0].length;
        let firstDiagonal = [];
        let secondDiagonal = [];
        for (let i = 0, g = length - 1; i < length; i++, g--) {
            firstDiagonal.push(dashboard[i][i]);
            secondDiagonal.push(dashboard[i][g]);
        }
        let firstCheck = firstDiagonal.every(x => {
            return x == firstDiagonal[0] && x !== false;
        });
        let secondCheck = secondDiagonal.every(x => {
            return x == secondDiagonal[0] && x !== false;
        });

        if (firstCheck) {
            winner = firstDiagonal[0];
            isWon = true;
        } else if (secondCheck) {
            winner = secondDiagonal[0];
            isWon = true;
        }



        if (movesCount >= 9) {
            console.log('The game ended! Nobody wins :(');
            dashboard.forEach(x => console.log(x.join('\t')));
            break;
        }
        if (isWon) {
            console.log(`Player ${winner} wins!`)
            dashboard.forEach(x => console.log(x.join('\t')));
            break;
        }
    }
}
/* ticTac(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]); */
/* ticTac(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
]); */
ticTac(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);