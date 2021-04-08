/* Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples. */
function trinagleOfNums(num){

    for(let i = 1; i <= num; i++){
        let text = '';
        for(let g = 1; g <= i; g++){
            text += `${i} `; 
        }
        console.log(text);
    }
}
trinagleOfNums(3);
trinagleOfNums(5);
trinagleOfNums(6);
