/* 3.	Add and Remove Elements  
Write a JS function that adds and removes numbers to / from an array. You will receive a command which can either be "add" or "remove". 
The initial number is 1. Each input command should increase that number, regardless of what it is.
Upon receiving an "add" command you should add the current number to your array. 
Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
The input comes as an array of strings. Each element holds a command. 
The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".
 */

function addRemoveElements(arr) {
    let number = 1;
    let newArr = [];

    /* for (const command of arr) {
        if (command === 'add') {
            newArr.push(number);
            number++;
        } else if (command === 'remove') {
            newArr.pop();
            number++;
        }
    }
 */
    //could use forEach()
    arr.forEach(command => {
        if (command === 'add') {
            newArr.push(number);
            number++;
        } else if (command === 'remove') {
            newArr.pop();
            number++;
        }
    });

    // return with turnary operator
    return newArr.length > 0 ?
        newArr.join('\n') :
        'Empty';
}
console.log(addRemoveElements(['add',
    'add',
    'add',
    'add'
]));
console.log(addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'
]));
console.log(addRemoveElements(['remove',
    'remove',
    'remove'
]));