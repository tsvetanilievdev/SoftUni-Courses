import page from '../node_modules/page/page.mjs';
import { logoutAction } from './logout/logout.js';
import renderMiddleware from './middleware/renderingMiddleware.js';
import { setUserNav } from './navigation/navigation.js';
import { createPage } from './pages/create/create.js';
import { dashboardPage } from './pages/dashboardPage/dashboard.js';
import { detailsPage } from './pages/details/details.js';
import { editPage } from './pages/edit/edit.js';
import { loginPage } from './pages/login/login.js';
import { myFurniturePage } from './pages/myFurniture/myFurniture.js';
import { registerPage } from './pages/register/register.js';

const mainElement = document.querySelector('.container');
const navElement = document.getElementById('navigation');

renderMiddleware.initiliaze(mainElement, navElement);

page(renderMiddleware.decorateContext);

page('/', '/dashboard');
page('/index.html', '/dashboard');
page('/dashboard', setUserNav, dashboardPage);
page('/login', setUserNav, loginPage);
page('/register', setUserNav, registerPage);
page('/details/:id', setUserNav, detailsPage);
page('/create', setUserNav, createPage);
page('/edit/:id', setUserNav, editPage);
page('/my-furniture', setUserNav, myFurniturePage);
page('/logout', setUserNav, logoutAction)

page.start()