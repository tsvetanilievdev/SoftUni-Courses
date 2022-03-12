import { setupAddMovie, showAddMovie } from './addMoviePage.js';
import { setupHome, showHome } from './homePage.js';
import { setupLogin, showLogin } from './loginPage.js';
import { setupMovieDetail, showMovieDetail } from './movieDetailsPage.js';
import { setupRegister, showRegister } from './registerPage.js';

function setup() {
  const nav = document.querySelector('nav');
  const main = document.getElementById('main');
  const homeSection = document.getElementById('home-page');
  const loginSection = document.getElementById('login');
  const registerSection = document.getElementById('register');
  const addMovieSection = document.getElementById('add-movie');
  const movieDetailsSection = document.getElementById('movie-detail');

  // TO DOOO... editMOVIEEEEEEEEEEEEEEEEE!!!

  const links = {
    navLogin: showLogin,
    navRegister: showRegister,
    navHome: showHome,
    navLogout: logout,
  };

  setActiveNav();
  setupNavigation(nav, links);
  setupHome(main, homeSection, setActiveNav);
  setupLogin(main, loginSection, setActiveNav);
  setupRegister(main, registerSection, setActiveNav);
  setupAddMovie(main, addMovieSection);
  document
    .getElementById('add-movie-button')
    .addEventListener('click', showAddMovie);
  setupMovieDetail(main, movieDetailsSection);
  showHome();
}
setup();

function setupNavigation(nav, links) {
  nav.addEventListener('click', (event) => {
    if (event.target.tagName == 'A') {
      const view = links[event.target.id];

      if (typeof view == 'function') {
        // визуализираме VIEW-то
        event.preventDefault();
        view();
      }
    }
  });
}
function setActiveNav() {
  const token = sessionStorage.getItem('authToken');
  const addMovieBtn = document.getElementById('add-movie-button');
  if (token !== null) {
    if (addMovieBtn) {
      addMovieBtn.style.display = 'inline-block';
    }
    [...document.querySelectorAll('.user')].forEach(
      (el) => (el.style.display = 'inline-block')
    );
    [...document.querySelectorAll('.guest')].forEach(
      (el) => (el.style.display = 'none')
    );
  } else {
    if (addMovieBtn) {
      addMovieBtn.style.display = 'none';
    }

    [...document.querySelectorAll('.user')].forEach(
      (el) => (el.style.display = 'none')
    );
    [...document.querySelectorAll('.guest')].forEach(
      (el) => (el.style.display = 'inline-block')
    );
  }
}
async function logout() {
  console.log(sessionStorage.getItem('authToken'));
  const response = await fetch('http://localhost:3030/users/logout', {
    method: 'get',
    headers: {
      'X-Authorization': sessionStorage.getItem('authToken'),
    },
  });
  if (response.status == 200) {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
    setActiveNav();
    showHome();
  } else {
    console.error(await response.json());
  }
}
