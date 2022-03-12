let baseUri = 'http://localhost:3030/jsonstore/collections/books';

let loadAllButtonElement = document.getElementById('loadBooks');
loadAllButtonElement.addEventListener('click', createABook);

let form = document.getElementById('form');
form.addEventListener('submit', (e) => e.preventDefault())


function createABook() {
    let tBody = document.querySelector('tbody');
    
    while(tBody.lastChild){
        tBody.lastChild.remove()
    } 

    fetch(baseUri)
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).forEach((key) => {
        let book = data[key];

        let tr = document.createElement('tr');

        let tdTitle = document.createElement('td');
        tdTitle.textContent = book.title;

        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = book.author;

        let tdButtons = document.createElement('td');
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editBook);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteBook)
        tdButtons.appendChild(editButton);
        tdButtons.appendChild(deleteButton);

        let hiddenTdID = document.createElement('td');
        hiddenTdID.textContent = key;
        hiddenTdID.style.display = 'none';
        hiddenTdID.classList.add('hidden-id');
        console.log(hiddenTdID)
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdButtons);
        tr.appendChild(hiddenTdID);
        tBody.appendChild(tr);
      });
    });
}

async function editBook(e){
    let res = await fetch(baseUri);
    let data = await res.json();
    console.log(data);

    let id = e.currentTarget.parentElement.parentElement.lastChild.textContent;
    let title = e.currentTarget.parentElement.parentElement.firstChild;
    let author = e.currentTarget.parentElement.parentElement.firstChild.nextElementSibling;
    console.log(title);
    console.log(author);

    let inputEditTitle = document.querySelector('input[name="title"]');
    inputEditTitle.value = title.textContent;
    let inputEditAuthor = document.querySelector('input[name="author"]');
    inputEditAuthor.value = author.textContent;
    
    // fetch(baseUri,{
    //     method: 'PUT',
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({


    //     })
    // })
    
}
function deleteBook(){
    let id = e.currentTarget.parentElement.parentElement.lastChild.textContent;
    
    fetch(baseUri)
    .then((res) => res.json())
    .then((data) => {
        let book = data[id];
        console.log(book)
    })
}