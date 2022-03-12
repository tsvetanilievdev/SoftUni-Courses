import * as api from './api/data.js';
import {page, render} from './lib.js'
import { allGamesPage } from './pages/allGamesPage.js';
import { createPage } from './pages/createPage.js';
import { detailsPage } from './pages/detailsPage.js';
import { editPage } from './pages/editPage.js';
import { homePage } from './pages/homePage.js';
import { loginPage } from './pages/loginPage.js';
import { registerPage } from './pages/registerPage.js';
import { isLogged } from './utils.js';

window.api = api;
const rootElement = document.querySelector('#main-content');
const logoutBtn = document.querySelector('#logoutBtn');


page(decorateContext);
page('/', homePage);
page('/all-games', allGamesPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage); 
page('/edit/:id', editPage);
updateUserNav();
page.start();

function decorateContext(context, next){
    context.render = (content) => render(content, rootElement);
    context.updateUserNav = updateUserNav;
    next();
}

function updateUserNav() {
    const hasUser = isLogged()
    if (hasUser) {
      document.querySelector('#user').style.display = 'block';
      document.querySelector('#guest').style.display = 'none';
    } else {
      document.querySelector('#user').style.display = 'none';
      document.querySelector('#guest').style.display = 'block';
    }
  }


//to do logout - add event to logout button
logoutBtn.addEventListener('click', logoutHandler);
async function logoutHandler(e){
    e.preventDefault();

    await api.logout();
    updateUserNav();
    page.redirect('/login')
}