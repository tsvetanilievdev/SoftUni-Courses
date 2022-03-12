let baseUri = 'http://localhost:3030/jsonstore/collections/books';

let loadAllButtonElement = document.getElementById('loadBooks');
loadAllButtonElement.addEventListener('click', getAllBooks);

let bookForm = document.getElementById('books-form');
bookForm.addEventListener('submit', createBook);

let tBody = document.querySelector('#books-table tbody');
tBody.querySelectorAll('tr').forEach((tr) => tr.remove());

async function getAllBooks() {
  let getBooksResponse = await fetch(baseUri);
  let books = await getBooksResponse.json();

  tBody.querySelectorAll('tr').forEach((tr) => tr.remove());

  Object.keys(books).forEach((key) => {
    let htmlBook = createHtmlBook(books[key], key);
    tBody.appendChild(htmlBook);
  });
}

async function editBook(e) {
  handleEdit()
}
function deleteBook() {
  let id = e.currentTarget.parentElement.parentElement.lastChild.textContent;

  fetch(baseUri)
    .then((res) => res.json())
    .then((data) => {
      let book = data[id];
      console.log(book);
    });
}

function createElement(tag, attributes, ...params) {
  let element = document.createElement(tag);
  let firstValue = params[0];

  if (params.length === 1 && typeof firstValue !== 'object') {
    if (['input', 'textarea'].includes(tag)) {
      element.value = firstValue;
    } else {
      element.textContent = firstValue;
    }
  } else {
    element.append(...params);
  }

  if (attributes !== undefined) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }

  return element;
}

function createHtmlBook(book, id) {
  let titleTd = createElement('td', { class: 'title' }, book.title);
  let authorTd = createElement('td', { class: 'author' }, book.author);
  let editBtn = createElement('button', undefined, 'Edit');
  editBtn.addEventListener('click', editBook);
  let deleteBtn = createElement('button', undefined, 'Delete');
  deleteBtn.addEventListener('click', deleteBook);
  let buttonsTd = createElement('td', undefined, editBtn, deleteBtn);
  let tr = createElement('tr', undefined, titleTd, authorTd, buttonsTd);
  tr.dataset.id = id; // set data-id
  return tr;
}

async function createBook(e) {
    e.preventDefault();

    let formData = new FormData(bookForm);

    let newBook = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    let createResponse = await fetch(baseUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })

    let createResult = await createResponse.json();
    let createdHtmlBook = createHtmlBook(createResult,createResult._id);
    tBody.appendChild(createdHtmlBook);
}

function handleEdit(){
    
    let h3 = document.querySelector('#books-form h3');
    h3.textContent = 'Edit FORM';
}