import {page, render} from './lib.js'

import { homePage } from './views/homePage.js';
import { allMemesPage } from './views/allMemesPage.js';
import { getUserData } from './utils.js';
import { loginPage } from './views/loginPage.js';
import { registerPage } from './views/registerPage.js';
import { detailsPage } from './views/detailsPage.js';
import { createPage } from './views/createPage.js';
import { editPage } from './views/editPage.js';
import { myProfilePage } from './views/myProfilePage.js';
import { logout } from './api/data.js';

//TO DO NOTIFICATION!!!

const root = document.querySelector('main');
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', logoutHandler);

page(decorateContext)
page('/', homePage);
page('/all-memes', allMemesPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/my-profile', myProfilePage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
updateUserNav()
page.start()

function decorateContext(context, next){
    context.render = (content) => render(content, root);
    context.updateUserNav = updateUserNav;
    next();
}

function updateUserNav(){
    const user = getUserData();
    if(user){
        document.querySelector('#welcome-email').textContent = `Welcome, ${user.email}`
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
    }else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}


async function logoutHandler(e){
    e.preventDefault();
    await logout();
    updateUserNav()
    page.redirect('/login');
}
