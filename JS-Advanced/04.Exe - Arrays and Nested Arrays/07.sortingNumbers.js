/* 7.	Sorting Numbers
Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one and so on. 
Return the resulting array.
 */
function sortedNums(arr) {
    arr.sort((a, b) => a - b);
    let rotations = arr.length / 2;
    for (let i = 1, counter = 0; counter < rotations; i += 2, counter++) {
        let lastEl = arr.pop();
        arr.splice(i, 0, lastEl);

    }
    return arr;
}
console.log(sortedNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));