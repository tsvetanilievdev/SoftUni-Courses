/* 4.	Rotate Array
Write a JS function that rotates an array. 
The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
The input comes as two parameters – an array of strings and a number. 
The second parameter is the amount of rotation you need to perform.
The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.
 */
function rotateArr(arr, rotations) {
    // is pointless to iterate 15(rotation), so take the modal rotations - the second example!
    let modalRotation = rotations % arr.length;

    for (let i = 0; i < modalRotation; i++) {
        let el = arr.pop();
        arr.unshift(el);
    }
    return arr.join(' ');
}
console.log(rotateArr(['1',
        '2',
        '3',
        '4'
    ],
    2
));
console.log(rotateArr(['Banana', // second example;
        'Orange',
        'Coconut',
        'Apple'
    ],
    15
));