import { getAllMyItems } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const bookTemplate = (book) => html`
<li class="otherBooks">
          <h3>${book.title}</h3>
          <p>Type: ${book.type}</p>
          <p class="img"><img src=${book.imageUrl} /></p>
          <a class="button" href=${`/details/${book._id}`}>Details</a>
        </li>
` 

const myBooksTemplate = (books) => html` 
<!-- My Books Page ( Only for logged-in users ) -->
    <section id="my-books-page" class="my-books">
      <h1>My Books</h1>
      ${books.length > 0
        ? html`
            <ul class="my-books-list">
            ${books.map(bookTemplate)}
            </ul>`
        : html`<p class="no-books">No books in database!</p>`}
    </section>`;

export async function myBooksPage(context) {
    const userData = getUserData();
    const myBooks = await getAllMyItems(userData.id);

    context.render(myBooksTemplate(myBooks))
}
