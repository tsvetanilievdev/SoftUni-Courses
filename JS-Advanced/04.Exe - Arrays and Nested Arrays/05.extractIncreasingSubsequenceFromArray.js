/* 5.	Extract Increasing Subsequence from Array
Write a function that extracts only those numbers that form a non-decreasing subsequence. 
In other words, you start from the first element and continue to the end of the given array of numbers. 
Any number which is LESS THAN the current biggest one is ignored, 
alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 

The input comes as an array of numbers.
The output is the processed array after the filtration, which should be a non-decreasing subsequence. Return the array of numbers.
 */

function increasingSubsequence(arr) {

    let result = arr.reduce((acc, x) => {
        if (acc.length === 0 || x >= acc[acc.length - 1]) {
            acc.push(x);
        }
        return acc;
    }, [])

    return result;

}
console.log(increasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(increasingSubsequence([1, 2, 3, 4]));
console.log(increasingSubsequence([20, 3, 2, 15, 6, 1]));

function extractSequence(numArr) {
    let resultArr = aggregate(numArr, reducer, []);

    function reducer(acc, el) {
        if (acc.length === 0 || el >= acc[acc.length - 1]) {
            acc.push(el);
        }
        return acc;
    }

    function aggregate(arr, reducerFunc, initialValue) {
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            initialValue = reducerFunc(initialValue, el);
        }
        return initialValue;
    }
    return resultArr;
}
console.log(extractSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));