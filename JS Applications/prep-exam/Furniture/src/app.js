import { logout } from "./api/data.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

const root = document.querySelector('.container')
document.getElementById('logoutBtn').addEventListener('click', logoutHandler);

page(decorateContext) // initialize middleware 
page('/',catalogPage)
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/my-furniture', catalogPage);

updateUserNav()
page.start();

function decorateContext(context, next){
    context.render = (content) => render(content, root);
    context.updateUserNav = updateUserNav;
    next();
}

async function logoutHandler(event){
    event.preventDefault(); // is not neccessery because logoutBtn href is javascript:void(0)
    await logout();
    updateUserNav();
    page.redirect('/login')
}

function updateUserNav(){ // изпълнява се в началото при инициализация на приложението, закача се за контектста  и се изпълнява в login, register, logout
    const userData = getUserData();
    if(userData){
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    }else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}