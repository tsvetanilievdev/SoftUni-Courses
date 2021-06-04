/* 6.	Sum Table
Write a JS function that finds the first table in a document and sums the values in the last column. The result is then displayed in an element with ID "sum".
        Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function sumTable() {
  let rows = document.querySelectorAll("tr");
  let arr = Array.from(rows);
  console
  let sum = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let child = arr[i].lastChild;
    let num = Number(child.textContent);
    sum += num;
  }
  arr[arr.length - 1].lastChild.textContent = sum;
}
