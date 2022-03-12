import {page, render} from './lib.js'

import {logout} from './api/data.js';
import { getUserData } from './utils.js';

import { loginPage } from './pages/loginPage.js';
import { registerPage } from './pages/registerPage.js';
import { homePage } from './pages/homePage.js';
import { createPage } from './pages/createPage.js';
import { detailsPage } from './pages/detailsPage.js';
import { editPage } from './pages/editPage.js';
import { profilePage } from './pages/profilePage.js';

const rootElement = document.querySelector('#content');
const logoutBtn = document.querySelector('#logoutBtn');

page(decorateContext)
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage); 
page('/edit/:id', editPage);
page('/profile', profilePage);

updateUserNav()
page.start()


function decorateContext(context, next){
    context.render = (content) => render(content, rootElement);
    context.updateUserNav = updateUserNav;

    next();
}

function updateUserNav() {
    const userData = getUserData(); 
    if (userData) {
      [...document.querySelectorAll('.user')].forEach(x => x.style.display = 'block');
      [...document.querySelectorAll('.guest')].forEach(x => x.style.display = 'none');

    } else {
      [...document.querySelectorAll('.user')].forEach(x => x.style.display = 'none');
      [...document.querySelectorAll('.guest')].forEach(x => x.style.display = 'block');

    }
  }

logoutBtn.addEventListener('click', logoutHandler);
async function logoutHandler(e){
    e.preventDefault();
    await logout();
    updateUserNav();
    page.redirect('/login')
}