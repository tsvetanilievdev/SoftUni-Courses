/* Write a program to receive a number n and print all triples of the first n small Latin letters, ordered alphabetically: */

//Nested loops
function latin(num) {

    for (let i = 0; i < num; i++) {
        let letterOne = String.fromCharCode(97 + i);
        for (let j = 0; j < num; j++) {
            let letterTwo = String.fromCharCode(97 + j);
            for (let g = 0; g < num; g++) {
                let letterThree = String.fromCharCode(97 + g);
                console.log(`${letterOne}${letterTwo}${letterThree}`);
            }
        }
    }
}
latin(3)