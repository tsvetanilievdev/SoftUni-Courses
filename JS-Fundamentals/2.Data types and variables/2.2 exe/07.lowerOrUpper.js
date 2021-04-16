//Write a function that prints whether a given character is upper-case or lower-case.

function lowerOrUpper(letter) {

    let upperLetter = letter.toUpperCase();
    if (letter === upperLetter) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    };
}
lowerOrUpper('L');
lowerOrUpper('f')