/* 2.	Greatest Common Divisor - GCD
Write a function that takes two positive numbers as input and compute the greatest common divisor.	
The input comes as two positive integer numbers.
The output should be printed on the console.
 */

function divisor(a,b) {
    let common = 0;
    let max = Math.max(a,b) // get greater
    let min = Math.min(a,b) // get smaller
   
    while(min > 0){
        let temp = min; // record min;
        min = max % min; // reassign the min
        max = temp; // reassing the max
        common = max;
    }
    return common;
}
console.log(divisor(15,5));
console.log(divisor(2154,458));

// cleaner solution;
function solve(a,b){
    while(b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(solve(15,5));
console.log(solve(2154,458));

/* In mathematics, the greatest common divisor (GCD) of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers. For two integers x, y, the greatest common divisor of x and y is denoted {\displaystyle \gcd(x,y)}{\displaystyle \gcd(x,y)}. For example, the GCD of 8 and 12 is 4, that is, {\displaystyle \gcd(8,12)=4}{\displaystyle \gcd(8,12)=4}.[1][2][3]

In the name "greatest common divisor", the adjective "greatest" may be replaced by "highest", and the word "divisor" may be replaced by "factor", so that other names include greatest common factor (gcf), etc.[4][5][6][7] Historically, other names for the same concept have included greatest common measure.[8] */