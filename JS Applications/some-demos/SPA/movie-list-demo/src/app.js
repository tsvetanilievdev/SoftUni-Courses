import registerPage from './registerPage.js';
import loginPage from './loginPage.js';
import playersPage from './playersPage.js';
import listPage from './allPlayersPage.js';
import { isAuthicated, showNav } from './auth.js';

const links = {
  register: registerPage,
  login: loginPage,
  players: playersPage,
  list: listPage,
};

if (isAuthicated()) {
  console.log(isAuthicated());
  playersPage.showPage();
}
showNav();

let headerElement = document.querySelector('.header .nav');
headerElement.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName == 'A') {
    // console.log(event.target.getAttribute('data-link')); // Вземане данните съхранени в html в атрибута 'data-'link ---> връща 'list' ако е цъкнато на 'List' <a> тага!!
    let dataLink = event.target.getAttribute('data-link');
    console.log(dataLink);
    if (dataLink == 'logout') {
      logout();
      showNav();
      return;
    }
    const currView = links[dataLink];
    if (currView) {
        hidePages();
        showNav();
        currView.showPage();
    }
    /*   
        // ВМЕСТО използването на 'data-...', може да се вземе HREF атрибута
        console.log('Using HREF...............');
        console.log(event.target.href) // http://127.0.0.1:5500/my-movies или различен друг href ако е цъкнато на друг link; (може със стрингова манипулация да се вземе края на линка)
     */
  }
});

function hidePages() {
  Object.values(links).forEach((x) => x.hidePage());
}

function logout() {
  const token = sessionStorage.getItem('authToken');
  if (!token) {
    console.log('Must be logged');
    return;
  }
  console.log(token);

  fetch('http://localhost:3030/users/logout', {
    method: 'GET',
    headers: {
      'X-Authorization': token,
    },
  })
    .then((res) => {
      hidePages();
      sessionStorage.removeItem('authToken');
      listPage.showPage();
      showNav()
    })
    .catch((err) => {
      throw new Error(err.statusCode + ' ' + err.message);
    });
}
