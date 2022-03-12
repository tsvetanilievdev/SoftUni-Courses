import { showHome } from "./home.js";

let main;
let section;

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const email = formData.get('email');
  const password = formData.get('password');
  console.log(email + '---' + password);

  const response = await fetch('http://localhost:3030/users/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    sessionStorage.setItem('auth-token', data.accessToken);
    sessionStorage.setItem('id', data._id);
    sessionStorage.setItem('email', data.email);

    document.getElementById('welcome-msg').textContent = 'Welcome, ' + data.email;
    document.querySelectorAll('nav .user').forEach(x => x.style.display = 'block');
    document.querySelectorAll('nav .guest').forEach(x => x.style.display = 'none');
    showHome()
  }
}

export async function setupLogin(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;

  const form = section.querySelector('form');
  form.addEventListener('submit', onSubmit);
}
export async function showLogin() {
  main.innerHTML = '';
  main.appendChild(section);
}
