import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const bookTemplate = (book) => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <a class="button" href=${`/details/${book._id}`}>Details</a>
  </li>
`;

const dashBoardTemplate = (books) => html`
  <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
      ${books.length > 0
        ? books.map((b) => bookTemplate(b))
        : html`<p class="no-books">No books in database!</p>`}
    </ul>
  </section>
`;
export async function dashboardPage(context) {
  const books = await getAll();

  context.render(dashBoardTemplate(books));
}
