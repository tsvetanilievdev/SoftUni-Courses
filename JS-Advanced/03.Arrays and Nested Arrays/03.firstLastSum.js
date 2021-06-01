/* 3.	Sum First Last
Write a function that calculates and return the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function and should be a number.
 */
function firstLastSum(arr) {
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());

    return firstEl + lastEl;
}
console.log(firstLastSum(['20', '30', '40']));
console.log(firstLastSum(['5', '10']));