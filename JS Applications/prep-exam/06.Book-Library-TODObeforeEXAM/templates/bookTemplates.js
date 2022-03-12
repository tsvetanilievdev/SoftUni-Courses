import { html } from './../../node_modules/lit-html/lit-html.js';
import { ifDefined } from './../../node_modules/lit-html/directives/if-defined.js';

export const formTemplate = (form) => html` <form
  class=${ifDefined(form.class)}
  id=${form.id}
>
  ${form.type == 'edit' ? html`<input type="hidden" name="id" />` : ''}
  <h3>${form.title}</h3>
  <label>TITLE</label>
  <input type="text" name="title" placeholder="Title..." />
  <label>AUTHOR</label>
  <input type="text" name="author" placeholder="Author..." />
  <input type="submit" value=${form.submitText} />
</form>`;

export const allFormsTemplate = (forms) => html`${forms.map(formTemplate)}`;

export const bookTemplate = (id,book) => html`
  <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td data-$1=${id}>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </td>
  </tr>
`;
export const tableTemplate = (books) => html`<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    ${books.map(b  => bookTemplate(b[0], b[1]))}
  </tbody>
</table>`;

export const bookLibraryTemplate = (books,forms) => html`
<button id="loadBooks">LOAD ALL BOOKS</button>
${tableTemplate(books)}
${allFormsTemplate(forms)}`