import * as api from './api/data.js';
import { logout } from './api/data.js';

import { page, render } from './lib.js';
import { addPage } from './pages/addPage.js';
import { dashboardPage } from './pages/dashboardPage.js';
import { detailsPage } from './pages/detailsPage.js';
import { editPage } from './pages/editPage.js';
import { loginPage } from './pages/loginPage.js';
import { myBooksPage } from './pages/myBooksPage.js';
import { registerPage } from './pages/registerPage.js';
import { getUserData } from './utils.js';

//to clear
window.api = api;

const rootElement = document.querySelector('#site-content');
const logoutBtn = document.querySelector('#logoutBtn');

page(decorateContext);
page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/add', addPage);
page('/details/:id', detailsPage); // add delet functionally
page('/edit/:id', editPage);
page('/my-books', myBooksPage);
updateUserNav();
page.start();

//to do decorateContext
function decorateContext(context, next) {
  context.render = (content) => render(content, rootElement);
  context.updateUserNav = updateUserNav;
  next();
}

//to do updateUserNav
function updateUserNav() {
  const userData = getUserData();
  if (userData) {
    document.querySelector(
      '#welcome-email'
    ).textContent = `Welcome, ${userData.email}`;
    document.querySelector('#user').style.display = 'block';
    document.querySelector('#guest').style.display = 'none';
  } else {
    document.querySelector('#user').style.display = 'none';
    document.querySelector('#guest').style.display = 'block';
  }
}

//to do logout - add event to logout button
logoutBtn.addEventListener('click', logoutHandler);

async function logoutHandler(e) {
  e.preventDefault();
  await logout();
  updateUserNav()
  page.redirect('/login');
}
