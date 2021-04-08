/* Write a JS function that rounds numbers to specific precision.
The input comes as two numbers. The first value is the number to be rounded and the second is the precision
(significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15.
Remove trailing zeroes, if any (you can use parseFloat())
The output should be printed to the console. Do not print insignificant decimals. */
function rounding(num, round) {
    if(round > 15){
        round = 15;
    }
    num = num.toFixed(round)
    console.log(parseFloat(num));
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5,3);