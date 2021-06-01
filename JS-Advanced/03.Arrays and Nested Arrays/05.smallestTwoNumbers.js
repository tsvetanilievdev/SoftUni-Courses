/* 5.	Smallest Two Numbers
Write a function that prints the two smallest elements from an array of numbers.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
 */

function smallestTwoNums(arr) {
    let newArr = arr.sort((a, b) => a - b);
    arr.length = 2;
    return arr.join(' ');
}
console.log(smallestTwoNums([30, 15, 50, 5]));
console.log(smallestTwoNums([3, 0, 10, 4, 7, 3]));

function smallestImplicit(arr) {
    let newArr = [arr[0]]; //create new array with first element of original array;
    for (let i = 1; i < arr.length; i++) { // iterate over original array;
        let curr = arr[i];
        let next;
        let isBig = true;
        for (let g = 0; g < newArr.length; g++) { // check every element is it smaller with every element of the new array;
            next = newArr[g];
            if (curr < next) {
                newArr.splice(g, 0, curr); // if current is smaller than next, insert it before it;
                isBig = false;
                break;
            }
        }
        if (isBig) { // if is bigger than all, push it to the end;
            newArr.push(curr);
        }
    }
    let result = '';
    for (let i = 0; i < 2; i++) {
        result += newArr[i] + ' ';
    }
    return result;
}
console.log(smallestImplicit([30, 15, 50, 5]));
console.log(smallestImplicit([3, 0, 10, 4, 7, 3]));