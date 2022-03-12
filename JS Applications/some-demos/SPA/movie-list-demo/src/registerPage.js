import { saveToken, showNav } from "./auth.js";
import playersPage from "./playersPage.js";

let registerSection = document.querySelector('section.register');
let registerForm = registerSection.querySelector('form');
registerForm.addEventListener('submit', register);

function showPage() {
  registerSection.classList.remove('hidden');
}

function hidePage(){
  registerSection.classList.add('hidden');

}

function register(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get('email'))
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if(email.trim() == '' || password.trim() == ''){
        alert('The fields must be the completed!!!');
        return
    }
    if(password != repeatPassword){
        alert('The passwords must be the same!!!');
        return
    }
    const user = {
        email,
        password
    }

    fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json()).then(data => {
        console.log(data);
        showNav()
        saveToken(data.accessToken)
        hidePage()
        playersPage.showPage()
    }).catch( err => {
        alert(err.message)
        throw new Error(err.message)
    })
}
export default {
    showPage,
    hidePage
}