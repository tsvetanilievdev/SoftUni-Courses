let baseUri = 'http://localhost:3030';
let registerForm = document.getElementById('register-form');
let loginForm = document.getElementById('login-form');

let signInButton = document.getElementById('show-login')
let divListArticles = document.getElementById('list-articles');

registerForm.addEventListener('submit', register);

function register(e){
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    //create fetch request
    fetch(`${baseUri}/users/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password')
        })
    })
    .then(res => res.json())
    .then(data => {
        saveToken(data.accessToken)
        console.log(data)
    
    })
    .catch(err => console.error(err))
    
    
    //hide register form throuh css
    registerForm.classList.add('hide');
    divListArticles.classList.remove('hide')
}

function saveToken(token){ // put into register and login functions
    sessionStorage.setItem('auth_toker', token)
}

loginForm.addEventListener('submit', login);

function login(e){
e.preventDefault();
let data = new FormData(e.currentTarget);

fetch(`${baseUri}/users/login`, {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password')
    })
}).then(res => res.json()).then( data => {
    saveToken(data.accessToken)
    console.log(data)})

registerForm.classList.add('hide');
loginForm.classList.add('hide')
divListArticles.classList.remove('hide');
}

signInButton.addEventListener('click', (e) => {
    loginForm.classList.remove('hide');
    registerForm.classList.add('hide');
})

//TO DO - get token from Session storage, create 'article'
//TO DO - show all articles