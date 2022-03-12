const endpoint = 'http://localhost:3030/jsonstore/collections/books';

async function request(endpoint, options) {
  const response = await fetch(endpoint, options);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response.json();
}

async function getAllBooks() {
  const response = await request(endpoint);

  return Object.entries(await response);
}

async function getBook(id) {
  const response = await request(endpoint + `/${id}`);
  return await response;
}

async function createBook(body) {
  const response = await request(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return await response;
}

async function editBook(id, body) {
  const response = await request(endpoint + `/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return await response;
}

async function deleteBook(id) {
  const response = await request(endpoint + `/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  return await response;
}

export {
  getAllBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
};
