// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N

//First solution:
function loop(numOne, numTwo) {
    for (let i = numOne; i >= numTwo; i--) {
        console.log(i)
    }
}
loop(10, 3);

//Second solution:
function whileLoop(numOne, numTwo){

    while(numOne >= numTwo){
        console.log(numOne);
        numOne--;
    }
}
whileLoop(10,3)