/* 5.	Colorize Table
Write a JS function that changes the color of all even rows when the user clicks a button. Apply the color "Teal" to the target rows.
I       nput/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function colorize() {
  // TODO
  let rowElements = document.querySelectorAll("tr");
  let arrElements = Array.from(rowElements);
  for (let i = 0; i < arrElements.length; i++) {
    if (i % 2 !== 0) {
      arrElements[i].style.backgroundColor = "teal";
    }
  }
}
