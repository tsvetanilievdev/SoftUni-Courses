function search() {
    // select elements
    let ulistElements = document.querySelectorAll('#towns')[0].children;
    let searchInputElement = document.querySelector('#searchText').value;
    let resultDivElement = document.querySelector('#result');

    // main logic and display the result in DOM
    let counter = 0;
    for (let i = 0; i < ulistElements.length; i++) {
        let currContent = ulistElements[i].textContent;
        if (currContent.includes(searchInputElement)) {
            counter++;
            ulistElements[i].style.fontWeight = 'bold';
            ulistElements[i].style.textDecoration = 'underline';
        }
    }
    resultDivElement.textContent = `${counter} matches found`;
}