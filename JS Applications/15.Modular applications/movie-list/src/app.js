import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import homePage from './views/homeView.js';
import myMoviesPage from './views/myMoviesViews.js';
import allMoviesPage from './views/allMoviesViews.js';
import loginPage from './views/loginView.js';
import registerPage from './views/registerView.js';
import { logout } from './services/authService.js';
import createMoviePage from './views/createMovieView.js';
import detailsMoviePage from './views/detailsMovieView.js';
import editMoviePage from './views/editMovieView.js';

const main = document.getElementById('main');

page(decorateContext);
page('/', homePage);
page('/home', homePage);
page('/my-movies', myMoviesPage);
page('/all-movies', allMoviesPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createMoviePage)
page('/details/:id', detailsMoviePage)
page('/edit/:id',editMoviePage)
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  const message = html`<p>Loading...</p>`;
  ctx.loading = () => render(message, main);
  ctx.setUserNav = setUserNav;
  next();
}

function setUserNav() {
  const token = sessionStorage.getItem('authToken');
  if (token) {
    [...document.querySelectorAll('.guest')].forEach(
      (x) => (x.style.display = 'none')
    );
    [...document.querySelectorAll('.user')].forEach(
      (x) => (x.style.display = 'block')
    );
    document.getElementById('hello-msg').textContent = `Hello ${sessionStorage.getItem('email')}!`;
  } else {
    [...document.querySelectorAll('.guest')].forEach(
      (x) => (x.style.display = 'block')
    );
    [...document.querySelectorAll('.user')].forEach(
      (x) => (x.style.display = 'none')
    );
    document.getElementById('hello-msg').textContent = `Hello guest!`;

  }
}

document.getElementById('logoutLink').addEventListener('click', onLogout)

function onLogout(event){
    logout().then( res => {
      setUserNav();
    page.redirect('/login');
    })
}