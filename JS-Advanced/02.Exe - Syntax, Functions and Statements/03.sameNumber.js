/* 3.	Same Numbers
Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are same and false if not. On the next line print the sum of all digits.
The input comes as an integer number.
 */

function isSameNumbers(a) {
  let txt = a.toString();
  let total = Number(txt[0]);
  let check = true;

  for(let i = 0; i < txt.length - 1; i++){
    let curr = Number(txt[i]);
    let next = Number(txt[i + 1]);
    total += next;
    if(curr !== next){
        check = false;
    } 
  }

  return `${check}\n${total}`;
}
console.log(isSameNumbers(2222222));
console.log(isSameNumbers(1234));
