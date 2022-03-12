import { render } from './../node_modules/lit-html/lit-html.js';
import * as service from './services.js';
import { bookLibraryTemplate } from './templates/bookTemplates.js';

let addForm = {
  id: 'add-form',
  title: 'Add book',
  type: 'add',
  submitText: 'Submit',
};

let editForm = {
  class: 'hidden',
  id: 'edit-form',
  title: 'Edit book',
  type: 'edit',
  submitText: 'Save',
};
const books = await service.getAllBooks();
console.log(books);

let forms = [addForm, editForm];
const body = document.body;
render(
  bookLibraryTemplate(
    [
      [
        'd953e5fb-a585-4d6b-92d3-ee90697398a0',
        {
          author: 'J.K.Rowling',
          title: "Harry Potter and the Philosopher's Stone",
        },
      ],
    ],
    forms
  ),
  body
);
