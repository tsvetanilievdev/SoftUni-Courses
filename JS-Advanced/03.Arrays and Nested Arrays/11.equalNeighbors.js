/* Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).

The input comes as array of arrays, containing string elements (2D matrix of strings).
The output is return value of your function. Save the number of equal pairs you find and return it.
 */

function equalNeighbors(matrix) {
    let pairs = 0;

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        //console.log(row)

        for (let g = 0; g < row.length; g++) {
            let curr = matrix[i][g]
                //console.log(curr)

            if (g < row.length - 1) {
                let next = matrix[i][g + 1];
                //console.log(next);
                if (curr === next) {
                    pairs++;
                }
            }
            if (i < matrix.length - 1) {
                let after = matrix[i + 1][g];
                //console.log(after);
                if (curr === after) {
                    pairs++;
                }
            }
        }
    }

    return pairs;
}
console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));