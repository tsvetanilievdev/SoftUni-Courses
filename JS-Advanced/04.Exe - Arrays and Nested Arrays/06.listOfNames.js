/* 6.	List of Names
You will receive an array of names. 
Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.
 */
function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    for (const name of arr) {
        console.log(`${counter}.${name}`);
        counter++;
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);

//second solution:
function list(arr) {
    let result = arr.sort((a, b) => a.localeCompare(b)).map((x, i) => `${i + 1}.${x}`);
    return result.join('\n');
}
console.log(list(["John", "Bob", "Christina", "Ema"]))