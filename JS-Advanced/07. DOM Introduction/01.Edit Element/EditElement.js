/* 1.	Edit Element 
Create function edit() that takes three parameters.
    Input/Output
First parameter is a reference to an HTML element, other two parameters are string – match and replacer.
You have to replace all occurrences of match inside the text content of the given elements with replacer.
 */
function editElement(ref, match, replacer) {
  let content = ref.textContent;
  let matcher = new RegExp(match, "g");
  let edited = content.replace(matcher, replacer);
  ref.textContent = edited;
}
