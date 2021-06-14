function addItem() {
    //select parent ul element and select input element's value
    let ulList = document.querySelector('#items');
    let newTextInputElement = document.querySelector('#newItemText').value;

    //create new list item
    let newLiElement = document.createElement('li');
    //create a link element
    let link = document.createElement('a');
    //modify the link element
    link.href = '#'; // adding href
    link.textContent = '[Delete]'; // adding content
    link.addEventListener('click', removeItem) // adding event listener and handler

    // add text to the new list item
    newLiElement.textContent = newTextInputElement;
    newLiElement.appendChild(link);

    //attach the list item to DOM
    ulList.appendChild(newLiElement);

    function removeItem(e) {
        console.log(e)
        let parent = e.target.parentNode;
        parent.remove()
    }
}