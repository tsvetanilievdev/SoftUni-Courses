/* Write a program that receives 6 parameters which are a number and a list of five operations. 
Perform the operations sequentially by starting with the input number and using the result of every operation as starting point for the next one.
 
Print the result of every operation in order. The operations can be one of the following:
•	chop - divide the number by two
•	dice - square root of number
•	spice - add 1 to number
•	bake - multiply number by 3
•	fillet - subtract 20% from number
The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
The output should be printed on the console.
 */
function cooking(n, ...commands) {
  n = Number(n);

  let result = [];

  for (const comm of commands) {
    if (comm == "chop") {
      n /= 2;
      result.push(n);
    } else if (comm == "dice") {
      n = Math.sqrt(n);
      result.push(n);
    } else if (comm == "spice") {
      n += 1;
      result.push(n);
    } else if (comm == "bake") {
      n *= 3;
      result.push(n);
    } else if (comm == "fillet") {
      n *= 0.8;
      result.push(n.toFixed(1));
    }
    /* // using switch inside for-of loop
    switch (comm) {
      case "chop":
        n /= 2;
        result.push(n);
        break;
      case "dice":
        n = Math.sqrt(n);
        result.push(n);
        break;
      case "spice":
        n += 1;
        result.push(n);
        break;
      case "bake":
        n *= 3;
        result.push(n);
        break;
      case "fillet":
        n *= 0.8;
        result.push(n.toFixed(1));
        break;
    } */
  }

  return result.join("\n");
}

console.log(cooking("32", "chop", "chop", "chop", "chop", "chop"));
console.log(cooking("9", "dice", "spice", "chop", "bake", "fillet"));
