showNavigation();

let registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', register);

async function register(event) {
  event.preventDefault();

  let formData = new FormData(event.target);

  let url = 'http://localhost:3030/users/register';
  let email = formData.get('email');
  let password = formData.get('password');
  let rePassword = formData.get('rePass');

  if (password !== rePassword) {
    throw new Error('Password must be the same!');
  }

  let response = await fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    let err = await response.json();
    throw new Error(err.message);
  }

  let data = await response.json();
  console.log(' hereeeeeee')
  console.log(data)
  sessionStorage.setItem('auth-token', data.accessToken);
  sessionStorage.setItem('id', data._id);
  sessionStorage.setItem('email', data.email);

  window.location.pathname = '/src/index.html';
}

function showNavigation() {
    let token = sessionStorage.getItem('auth-token');
    let email = sessionStorage.getItem('email');
  
    if (token) {
      document.getElementById('guest').style.display = 'none';
      document.getElementById('display-name').textContent = email;
  
    } else {
      document.getElementById('guest').style.display = '';
      document.getElementById('user').style.display = 'none';
      document.getElementById('display-name').textContent = 'guest'
    }
  }
