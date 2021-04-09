/* You will receive 3 numbers. Your task is to find their sum and print it to the console with the addition 
" - {type of the number (Integer or Float)}":
 */
function sumOFNums(numOne, numTwo, numThree) {
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    numThree = Number(numThree);

    let sum = numOne + numTwo + numThree;

    if (sum % 1 === 0) { // for every interger % 1 will be 0;
        console.log(`${sum} - Integer`);
    } else { // 110.1 % 1 = 0.1 -> so will be float;
        console.log(`${sum} - Float`);
    }
}
sumOFNums(9, 100, 1.1);
sumOFNums(100, 200, 303)