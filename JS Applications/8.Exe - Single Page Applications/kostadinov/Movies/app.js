// import modules
// grab sections
// setup modules
// setup navigation

import { setupHome, showHome } from './src/home.js';
import { setupDetails } from './src/details.js';
import { setupLogin, showLogin } from './src/login.js';
import { setupRegister, showRegister } from './src/register.js';
import { setupCreate, showCreate } from './src/create.js';
import { setupEdit } from './src/edit.js';

const main = document.querySelector('main');
const links = {
  homeLink: showHome,
  registerLink: showRegister,
  loginLink: showLogin,
  createLink: showCreate,
};

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);

setupNavigation();

//start application of home view
showHome();

function setupSection(sectionId, setup) {
  const section = document.getElementById(sectionId);
  setup(main, section);
}

function setupNavigation() {
  const token = sessionStorage.getItem('auth-token');
  if (token !== null) {
    document.getElementById('welcome-msg').textContent =
      'Welcome, ' + sessionStorage.getItem('email');
    document
      .querySelectorAll('nav .user')
      .forEach((x) => (x.style.display = 'block'));
    document
      .querySelectorAll('nav .guest')
      .forEach((x) => (x.style.display = 'none'));
  } else {
    document
      .querySelectorAll('nav .user')
      .forEach((x) => (x.style.display = 'none'));
    document
      .querySelectorAll('nav .guest')
      .forEach((x) => (x.style.display = 'block'));
  }

  document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName == 'A') {
      const view = links[event.target.id];
      if (typeof view == 'function') {
        event.preventDefault();
        view();
      }
    }
  });
  document.getElementById('createLink').addEventListener('click', (event) => {
    const view = links[event.target.id]; // or direct call showCreate()
    if (typeof view == 'function') {
      event.preventDefault();
      view();
    }
  });

  document.getElementById('logoutBtn').addEventListener('click', logout);
}

async function logout() {
  const token = sessionStorage.getItem('auth-token');
  const response = await fetch(
    'http://localhost:3030/users/logout',
    {
      method: 'post',
      headers: {'X-Authorization': token},
    },
  );

  if(response.ok){
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('email');

    document
      .querySelectorAll('nav .user')
      .forEach((x) => (x.style.display = 'none'));
    document
      .querySelectorAll('nav .guest')
      .forEach((x) => (x.style.display = 'block'));

      showLogin();
  }
}
