/* Write a JS function that processes the elements in an array one by one and produces a new array. 
Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line.
 */
function negativeToPositive(arr) {
    let newArr = [];

    for (const number of arr) {
        number >= 0 ?
            newArr.push(number) :
            newArr.unshift(number);
    }

    return newArr;
}
console.log(negativeToPositive([7, -2, 8, 9]));
console.log(negativeToPositive([3, -2, 0, -1]));