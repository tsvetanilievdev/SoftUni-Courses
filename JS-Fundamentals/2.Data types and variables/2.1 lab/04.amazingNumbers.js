/* Write a function which as input will receive  a number.
 Check and print if it is amazing or not into the following format: 
	"{number} Amazing? {result}"
An amazing number is one that includes the digit 9 the sum of its digits. 
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
 */

function amazingNums(numToCheck) {
    let numStr = numToCheck.toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
    }

    let result = sum.toString().includes('9');
    console.log(result
        ? `${numToCheck} Amazing? True`
        : `${numToCheck} Amazing? False`);
}
amazingNums(1233);
amazingNums(999)