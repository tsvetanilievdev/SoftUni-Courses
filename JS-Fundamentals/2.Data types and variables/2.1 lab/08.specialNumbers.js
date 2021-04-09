/* Write a program to receive a number n and for all numbers in the range 1…n print the number and if it is special or not (True / False).
A number is special when its sum of digits is 5, 7 or 11.
 */
function specialNum(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let numToStr = i.toString();
        let isSpecial = false;
        for (let g = 0; g < numToStr.length; g++) {
            sum += Number(numToStr[g]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;
        }
        console.log(isSpecial
            ? `${i} -> True`
            : `${i} -> False`);
    }
}
specialNum(15);