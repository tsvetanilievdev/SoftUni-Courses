/*  */
function printN(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr[i])
    }
    return result;
}
console.log(printN(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
));
console.log(printN(['dsa',
        'asd',
        'test',
        'tset'
    ],
    2
))