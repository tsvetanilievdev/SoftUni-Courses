import { showHome } from "./homePage.js";

let main;
let section;
let setActiveNav;

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  let email = formData.get('email');
  let password = formData.get('password');
  let rePass = formData.get('repeatPassword');

  if (password !== rePass) {
    alert('The passwords must be the same!');
  }

  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const response = await fetch('http://localhost:3030/users/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    const data = await response.json();
    if (response.status == 200) {
      sessionStorage.setItem('authToken', data.accessToken);
      sessionStorage.setItem('userId', data._id);
      sessionStorage.setItem('email', data.email);
      document
        .querySelectorAll('.user')
        .forEach((el) => (el.style.display = 'inline-block'));
      document
        .querySelectorAll('.guest')
        .forEach((el) => (el.style.display = 'none'));
      showHome()
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    console.error(err.message);
  }
}

export function setupRegister(mainTarget, sectionTarget,setActiveNavCb) {
  main = mainTarget;
  section = sectionTarget;
  setActiveNav = setActiveNavCb;

  section.querySelector('form').addEventListener('submit', onSubmit);
}

export function showRegister() {
  main.innerHTML = '';
  main.appendChild(section);
}
