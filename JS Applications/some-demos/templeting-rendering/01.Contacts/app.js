import { cardTemplete } from './card.js';
import { contacts } from './contacts.js';
import { render } from './node_modules/lit-html/lit-html.js';


contacts.forEach(c => c.isVisible = false)
const mainDivContacts = document.getElementById('contacts');
mainDivContacts.addEventListener('click', onClick);
const result = contacts.map(cardTemplete);
render(result, mainDivContacts);

function onClick(event) {
  if (event.target.classList.contains('detailsBtn')) {
    const id = event.target.parentElement.querySelector('.details').id;
    const element = contacts.find(c => c.id == id);
    element.isVisible = !element.isVisible;
    const result = contacts.map(cardTemplete);
    render(result, mainDivContacts)
  }
}

//mainDivContacts.innerHTML = result;
