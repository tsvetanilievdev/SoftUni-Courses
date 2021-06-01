/* 9.	Biggest Element
Write a function that finds the biggest element inside a matrix.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is the return value of your function. Find the biggest element and return it.
 */

function matrixBiggestElement(matrix) {

    let biggestNum = Number.MIN_SAFE_INTEGER;

    matrix.forEach(row => {
        row.forEach(num => {

            if (num > biggestNum) {
                biggestNum = num;
            }
        })
    })

    return biggestNum;
}

console.log(matrixBiggestElement([
    [20, 50, 10],
    [8, 33, 145]
]));
console.log(matrixBiggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));