import page from './node_modules/page/page.mjs';
import * as api from './src/api/data.js';
import { html, render } from './node_modules/lit-html/lit-html.js';
import { createPage } from './src/views/createView.js';
import { dashboardPage } from './src/views/dashboardView.js';
import { detailsPage } from './src/views/detailsView.js';
import { editPage } from './src/views/editView.js';
import { loginPage } from './src/views/loginView.js';
import { myFurniturePage } from './src/views/myFurnitureView.js';
import { registerPage } from './src/views/registerView.js';

window.api = api;
const main = document.querySelector('.container');

page('/', decorateContext, dashboardPage);
page('/dashboard', decorateContext, dashboardPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/my-furniture', decorateContext, myFurniturePage);

setUserNav()

//start Application
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.setUserNav = setUserNav;
  next();
}

function setUserNav() {
  const userId = sessionStorage.getItem('userId');
  if (userId != null) {
    document.getElementById('user').style.display = 'inline-block';
    document.getElementById('guest').style.display = 'none';
  }else {
    document.getElementById('user').style.display = 'none';
    document.getElementById('guest').style.display = 'inline-block';
  }
}

//implement logout
document.getElementById('logoutBtn').addEventListener('click', logout)
async function logout(){
        await api.logout();
        page.redirect('/')
}