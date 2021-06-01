/* You are given two integers n and k. Write a JS function that generates and return the following sequence:
•	The first element is 1
•	Every following element equals the sum of the previous k elements
•	The length of the sequence is n elements
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
 */

function lastKNumbers(n, k) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let sum = 0;

    for (let g = i - k, c = 0; c < k; g++, c++) {
      if (g < 0) continue;
      sum += arr[g];
    }
    arr.push(sum);
  }
  return arr;
}
console.log(lastKNumbers(6, 3));
console.log(lastKNumbers(8, 2));
