import { logout } from './src/api/data.js';
import {render, page} from './src/lib.js'
import { getUserData } from './src/util.js';
import { CreatePage } from './src/views/create.js';
import { homePage } from './src/views/home.js';
import { LoginPage } from './src/views/login.js';
import { RegisterPage } from './src/views/register.js';
import { topicsPage } from './src/views/topics.js';

const rootElement = document.querySelector('main');
document.getElementById('logout-btn').addEventListener('click', logoutHandler)

page(decorateContext);
page('/', homePage);
page('/topics', topicsPage);
page('/login', LoginPage);
page('/register', RegisterPage);
page('/create', CreatePage);
page('/logout', () => console.log('logout'));

page.start();
updateUserNav();

function decorateContext(context, next){
    context.render = (content) => render(content, rootElement);
    context.updateUserNav = updateUserNav;
    next()
}

function updateUserNav(){
    const userData = getUserData();
    if(userData){
        document.querySelector('.user').style.display = 'inline';
        document.querySelector('.guest').style.display = 'none';
    }else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline';
    }
}

function logoutHandler(){
    logout();
    updateUserNav();
    page.redirect('/login')
}