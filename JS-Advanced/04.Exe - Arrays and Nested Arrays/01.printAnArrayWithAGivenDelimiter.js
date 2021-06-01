/* 1.	Print an Array with a Given Delimiter
The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.
The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.
 */

function delimiter(arr, delimiter) {

    return arr.join(delimiter)
}
console.log(delimiter(['One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-'
));