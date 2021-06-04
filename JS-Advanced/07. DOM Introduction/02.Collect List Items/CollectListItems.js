/* 2.	Collect List Items
Write a JS function that scans a given HTML list and appends all collected list items’ text to a text area on the same page when the user clicks on a button.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function extractText() {
    let listElements = document.getElementsByTagName('li');
    
    let extractedText = '';
    for (const li of listElements) {
        
        extractedText += li.textContent + '\n';
    }
    let textAreaElement = document.getElementById('result');
    textAreaElement.value = extractedText;
}

//second solution: if test - change the name to extractText
function extractText2() {
    let itemNodes = 
      document.querySelectorAll("ul#items li");
    let textarea = 
      document.querySelector("#result");
    for (let node of itemNodes) {
      textarea.value += node.textContent + "\n";
    }
  }
  