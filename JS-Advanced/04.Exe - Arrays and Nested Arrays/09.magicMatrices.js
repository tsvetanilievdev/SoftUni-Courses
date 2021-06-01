/* Write a function that checks if a given matrix of numbers is magical. 
A matrix is magical if the sums of the cells of every row and every column are equal. 
The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
The output is a Boolean result indicating whether the matrix is magical or not.
 */
function magicalMatrix(matrix) {
    let isMagical = true;
    let magicSum = Number.MIN_SAFE_INTEGER;
    for (let r = 0; r < matrix.length; r++) {
        let sumRow = 0;
        let sumCol = 0;
        for (let c = 0; c < matrix.length; c++) {

            sumRow += matrix[r][c];
            sumCol += matrix[c][r];
        }
        if (magicSum === Number.MIN_SAFE_INTEGER) {
            magicSum = sumRow;
        }

        if (magicSum !== sumRow || magicSum !== sumCol) {
            isMagical = false;
        }
    }
    return isMagical;
}
console.log(magicalMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicalMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(magicalMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));

//other solution:
function magical(matrix) {
    let magicSum = Number.MIN_SAFE_INTEGER;
    let isMagical = true;
    //iterate over columns in one row;
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0;
        for (let col = 0; col < matrix.length; col++) {
            let currCol = matrix[row][col];
            rowSum += currCol;
        }

        if (magicSum === Number.MIN_SAFE_INTEGER) {
            magicSum = rowSum;
        }

        if (rowSum !== magicSum) {
            isMagical = false;
            break;
        }
    }
    //iterate over one column in all rows:
    for (let column = 0; column < matrix[0].length; column++) { // matrix[0].length works because is MATRIX
        let colSum = 0; // sum of all columns in the currcolumn;
        for (let row = 0; row < matrix.length; row++) {
            let currRow = matrix[row][column];
            colSum += currRow;
        }

        if (colSum !== magicSum) {
            isMagical = false;
            break;
        }
    }
    return isMagical;
}
console.log(magical([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magical([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(magical([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));