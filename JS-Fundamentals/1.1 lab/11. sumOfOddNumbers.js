/* Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
        Input
You will receive a number – n. This number shows how many odd numbers you should print.
        Output
Print the next n odd numbers, starting from 1, separated by new lines. On the last line, print the sum of these numbers.
        Constraints
•	n will be in the interval [1…100]
 */

//First solution:
function sumOfOdds(numValue) {
    let numsToPrint = numValue;
    let total = 0;
    let counter = 0;


    for (let n = 1; n <= 100; n++) {
        if (n % 2 !== 0) {
            console.log(n)
            total += n;
            counter++;
        }
        if (counter >= numsToPrint) {
            break;
        }
    }
    console.log(`Sum: ${total}`);
};

sumOfOdds(5);
sumOfOdds(3);