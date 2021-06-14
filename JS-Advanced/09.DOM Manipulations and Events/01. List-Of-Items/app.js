function addItem() {
    //select parent ul element and select input element's value
    let ulElement = document.querySelector('#items');
    let newTextInputElement = document.querySelector('#newItemText').value;

    //create new list item
    let newLiElement = document.createElement('li');

    // add text to the list item
    newLiElement.textContent = newTextInputElement;

    //attach the new li to DOM
    ulElement.appendChild(newLiElement);
}