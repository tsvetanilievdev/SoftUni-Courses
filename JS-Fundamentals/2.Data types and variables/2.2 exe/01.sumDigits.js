//Write a function which will be given a single number. Your task is to find the sum of its digits.
function sumOfDigits(number) {

    let textNum = number.toString();
    let result = 0;

    for (const num of textNum) {
        result += Number(num);
    }
    console.log(result)
}
sumOfDigits(245678)
sumOfDigits(97561)
sumOfDigits(543)
