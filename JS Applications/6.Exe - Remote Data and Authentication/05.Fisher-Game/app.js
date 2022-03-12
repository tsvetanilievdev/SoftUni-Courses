import addCatch from "./add.js";
import load from "./load.js";
import login from './login.js';
import register from './register.js';

//clear old catches
let catchesElements = document.querySelectorAll('.catch');
catchesElements.forEach((x) => x.remove());

/* register functionality */
let registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', register);

/* login functionality */
let loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', login);

/* load functionality */
let loadButtonElement = document.querySelector('aside .load');
loadButtonElement.addEventListener('click', load);


/* add catch functionality */
let addForm = document.getElementById('addForm');
addForm.addEventListener('submit', addCatch)

