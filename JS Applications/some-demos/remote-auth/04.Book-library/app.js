//main function
function start() {
  document.getElementById('loadBooks').addEventListener('click', getAllBooks);
  document
    .getElementById('create-form')
    .addEventListener('submit', createNewBook);
  document.getElementById('edit-form').addEventListener('submit', updateBook);
  document.querySelector('table').addEventListener('click', handleTableClick);

  getAllBooks();
}
start();

//creating ABSTRACT function which we use it for all fetch requests
async function request(url, options) {
  const response = await fetch(url, options);
  if (response.ok != true) {
    const error = await response.json();
    alert(error.message); // понеже request() ще се вика от други места, ако return alert(...) няма да има ефект(няма да спре изпълнението на функцията от по-висок ред), затова
    throw new Error(error.message); // трябва да хвърлим грешката!!!!
  }
  const data = await response.json();
  return data;
}

//CRUD functions
async function getAllBooks() {
  const books = await request(
    'http://localhost:3030/jsonstore/collections/books'
  );
  let tbody = document.querySelector('table>tbody');
  renderAllBooks(tbody, books);
}

async function createNewBook(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const author = formData.get('author');

  if (title.trim() == '' || author.trim() == '') {
    alert('Please fill in all inputs!');
  }
  const book = {
    title,
    author,
  };

  await request('http://localhost:3030/jsonstore/collections/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

  //clear all field on form
  event.target.reset();
}

async function updateBook(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  let id = formData.get('id');
  let title = formData.get('title');
  let author = formData.get('author');
  const book = {
    title,
    author,
  };

  await request('http://localhost:3030/jsonstore/collections/books/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

  document.getElementById('edit-form').style.display = 'none';
  document.getElementById('create-form').style.display = 'block';
  getAllBooks();
  //clear all field on form
  event.target.reset();
}

async function deleteBook(id) {
  const confirmed = confirm('Are you sure want to delete this book?');
  if (confirmed) {
    const result = await request(
      'http://localhost:3030/jsonstore/collections/books/' + id,
      {
        method: 'DELETE',
      }
    );
    getAllBooks();
  }
}

//render functions
function renderBook(key, book) {
  let trElement = document.createElement('tr');

  let tdTitle = document.createElement('td');
  tdTitle.textContent = book.title;
  let tdAuthor = document.createElement('td');
  tdAuthor.textContent = book.author;
  let tdButtons = document.createElement('td');

  let editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.dataset.id = key;
  editButton.classList.add('editBtn');
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.dataset.id = key;
  deleteButton.classList.add('deleteBtn');

  tdButtons.append(editButton, deleteButton);
  trElement.append(tdTitle, tdAuthor, tdButtons);

  return trElement;
}

function renderAllBooks(mainElement, books) {
  mainElement.textContent = '';
  Object.entries(books).forEach((b) => {
    let key = b[0];
    let book = b[1];
    mainElement.appendChild(renderBook(key, book));
  });
}

//table click handler - event delegation!
function handleTableClick(event) {
  if (event.target.classList == 'editBtn') {
    document.getElementById('edit-form').style.display = 'block';
    document.getElementById('create-form').style.display = 'none';

    const bookId = event.target.dataset.id;
    loadBookForEditing(bookId);
  } else if (event.target.classList == 'deleteBtn') {
    const bookId = event.target.dataset.id;
    deleteBook(bookId);
  }
}

async function loadBookForEditing(id) {
  const book = await request(
    'http://localhost:3030/jsonstore/collections/books/' + id
  );

  document.querySelector('#edit-form [name="title"]').value = book.title;
  document.querySelector('#edit-form [name="author"]').value = book.author;
  document.querySelector('#edit-form [name="id"]').value = id;
}
