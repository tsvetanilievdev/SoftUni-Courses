import { saveToken, showNav } from "./auth.js";
import playersPage from "./playersPage.js";

let loginSection = document.querySelector('section.login');
function showPage() {
  loginSection.classList.remove('hidden');
}
function hidePage() {
  loginSection.classList.add('hidden');
}

let loginForm = loginSection.querySelector('form');
loginForm.addEventListener('submit', login);

function login(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData.get('email'))
  const email = formData.get('email');
  const password = formData.get('password');

  if(email.trim() == '' || password.trim() == ''){
      alert('The fields must be the completed!!!');
      return
  }
  const user = {
      email,
      password
  }

  fetch('http://localhost:3030/users/login', {
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