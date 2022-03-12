let registerForm = document.getElementById('register');
registerForm.addEventListener('submit', register)



let loginForm = document.getElementById('login');
loginForm.addEventListener('submit', login)

function register(e){
    e.preventDefault()
    let formData = new FormData(e.currentTarget);
    console.log(formData)
    let email = formData.get('user');
    let password = formData.get('pass');
    let repeatPass = formData.get('repeat-pass');
    if(password !== repeatPass){
        e.target.reset()
        alert('The password MUUST be the same!');
        throw new Error('The password MUUST be the same!');
    }

    let url = 'http://localhost:3030/users/register';

    let data = {
        email,
        password
    }
    let headers = {
        'Content-Type': 'application/json'
    }

    fetch(url, {
        method: 'Post',
        headers,
        body: JSON.stringify(data)
    })
    .then(resolve => resolve.json())
    .then(data => {
        console.log(data)

        sessionStorage.setItem('auth-token', data.accessToken)
    })
    e.target.classList.add('hide');
    document.getElementById('reg-success').classList.remove('hide')

}


function login(e){
    e.preventDefault()
    let formData = new FormData(e.currentTarget);
    let email = formData.get('user');
    let password = formData.get('pass');
    let url = 'http://localhost:3030/users/login';

    let headers = {
        'Content-Type': 'application/json',
    }
    let data = {
        email,
        password
    }

    fetch(url, {
        method: 'Post',
        headers,
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log(response)
        if(response.status == 403){
            e.target.reset()
            throw new Error('wrong accredentials')
        }
        e.target.classList.add('hide');
        document.getElementById('log-success').classList.remove('hide')
        return response.json()})
        .then(data => {
            sessionStorage.setItem('auth-token', data.accessToken)
        })
    .catch(err => {
        alert(err)
        e.target.reset()
        return;
    })
    
}


let switchLogin = document.getElementById('switch-login');
switchLogin.addEventListener('click', switchToLogin)
function switchToLogin(e){

    document.getElementById('login-div').classList.remove('hide');
    document.getElementById('register-div').classList.add('hide');
}

let switchRegister = document.getElementById('switch-register');
switchRegister.addEventListener('click', switchToRegister)
function switchToRegister(e){

    document.getElementById('login-div').classList.add('hide');
    document.getElementById('register-div').classList.remove('hide');
}