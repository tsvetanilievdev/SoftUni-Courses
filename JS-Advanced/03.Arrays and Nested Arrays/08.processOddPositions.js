/* 8.	
    Process Odd Positions
You are given an array of numbers. 
Write a JS function that return the elements at odd positions from the array, doubled and in reverse order.
The input comes as array of number elements.
The output is return on the console on a single line, separated by space.
 */
function oddPosition(arr) {

    arr = arr
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse();

    return arr;
}
console.log(oddPosition([10, 15, 20, 25]));
console.log(oddPosition([3, 0, 10, 4, 7, 3]));