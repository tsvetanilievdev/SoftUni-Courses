/* 8.	Sort an Array by 2 Criteria
Write a function that orders a given array of strings, by length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as an array of strings.
The output is the elements of the ordered array of strings, printed each on a new line.
 */
function sortBy2Criteria(arr) {
    arr.sort((a, b) => {

        if (a.length === b.length) { //if first criteria is equal
            return a.localeCompare(b); // sort it by second criteria
        }
        return a.length - b.length; // sort by first criteria
    })
    return arr.join('\n');
}
console.log(sortBy2Criteria(['alpha',
    'beta',
    'gamma'
]));
console.log(sortBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]));
console.log(sortBy2Criteria(['test',
    'Deny',
    'omen',
    'Default'
]));