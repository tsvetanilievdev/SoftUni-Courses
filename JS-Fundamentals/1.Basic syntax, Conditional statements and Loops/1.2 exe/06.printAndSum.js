/* Write a function to display numbers from given start to given end and their sum. The input comes as two number parameters. */

//First solution: using for-loop
function printAndSum(a, b) {
    let sum = 0;
    let text = '';
    for (let i = a; i <= b; i++) {
        sum += i;
        text += i + ' ';
    }
    console.log(text);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);

//Second solution: using while-loop
function printAndSumWhile(a, b) {
    let sum = 0;
    let text = '';
    while(a <= b){
        sum += a;
        text += a + ' ';
        a++;
    }
    console.log(text);
    console.log(`Sum: ${sum}`);
}
printAndSumWhile(5, 10);

