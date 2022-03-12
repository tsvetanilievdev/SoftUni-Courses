// add data to html in order to be able to select
// add data to html links that keeps information for changing view
// addEventListener to links

import auth from './helpers/auth.js';
import homePage from './pages/homePage.js';
import loginPage from './pages/LoginPage.js';
import movieDetailsPage from './pages/movieDetails.js';
import registerPage from './pages/registerPage.js';

let views = {
  home: async () => await homePage.getView(),
  login: async () => await loginPage.getView(),
  register: async () => await registerPage.getView(),
  'movie-details': async (id) => await movieDetailsPage.getView(id),
  logout: async () => await auth.logout()
};

function initialize(allLinksElements) {
  allLinksElements.forEach((el) =>
    el.addEventListener('click', changeViewHandler)
  );
}

export async function changeViewHandler(e) {
  let element =   e.target.matches('.link') ? e.target : e.target.closest('.link');
  let route = element.dataset.route;
  let id = element.dataset.id;
  navitageTo(route, id);
}

export async function navitageTo(route, id) {
  console.log(route);
  if (views.hasOwnProperty(route)) {
    let view = await views[route](id);
    let app = document.getElementById('main');
    app.querySelectorAll('.view').forEach((v) => v.remove());
    app.appendChild(view);
  }
}


let viewChanger = {
  initialize,
  navitageTo,
  changeViewHandler,
};

export default viewChanger;
