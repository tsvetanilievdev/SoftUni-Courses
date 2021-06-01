/* 10.	Diagonal Sums
A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). 
Write a function that finds the sum at the main and at the secondary diagonals.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.
 */
function matrixDiagonalSum(matrix) {

    /* let newMatrix = matrix.map(text => text.split(' '));
    newMatrix = newMatrix.map(row => {

        row = row.map(x => Number(x));
        return row;
    });
    let newMatrix = []
    for (let row of matrix) {
        let newRow = row.split(' ').map(Number);
        newMatrix.push(newRow)
    }  */

    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let lastIndex = matrix[0].length - 1;

    matrix.forEach(row => {

        firstDiagonal += row[firstIndex++];
        secondDiagonal += row[lastIndex--]
    })

    return firstDiagonal + ' ' + secondDiagonal;
}
console.log(matrixDiagonalSum([
    [20, 40],
    [10, 60]
]));
console.log(matrixDiagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));

//other solution
function solve(arr) {
    function diagonalSums(input) {
        let firstDiagonal = 0;
        let secondDiagonal = 0;
        let firstIndex = 0;
        let secondIndex = input[0].length - 1;
        input.forEach(array => {
            firstDiagonal += array[firstIndex++];
            secondDiagonal += array[secondIndex--];
        });
        console.log(firstDiagonal + ' ' + secondDiagonal);
    }
    diagonalSums(arr)
}
solve([
    [20, 40],
    [10, 60]
])