/* You will receive 3 parameters (string, char, string).
First string will be a word with a missing char replaced with a underscore '_'
You have to replace the character with the missing part (underscore) from the first string and compare the result with the second string.
If they are equals you should print "Matched", otherwise print "Not Matched".
 */

function check(firstStr, charToReplace, strToCheck) {

    let newStr = '';
    for (let index = 0; index < firstStr.length; index++) {
        let currChar = firstStr[index]

        if (currChar === '_') {
            newStr += charToReplace;
        } else {
            newStr += currChar;
        }

    }
    if (newStr === strToCheck) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}
check('Str_ng', 'I', 'Strong');
check('Str_ng', 'i', 'String')