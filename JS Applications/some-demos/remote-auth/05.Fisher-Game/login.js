let registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', register);
let loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', login);

async function register(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let email = formData.get('email');
  let password = formData.get('password');
  let rePass = formData.get('rePass');

  if (email.trim() == '' || password.trim() == '') {
    throw new Error('The fields can NOT be empty!');
  }
  if (password !== rePass) {
    throw new Error('The password MUST be the same!');
  }

  let user = {
    email,
    password,
  };

  const response = await fetch('http://localhost:3030/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (response.ok == false) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const resData = await response.json();
  sessionStorage.setItem('auth_token', resData.accessToken);
  sessionStorage.setItem('_id', resData._id);
  console.log(resData);
  location.assign('./index.html');
}

async function login(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');
  
    if (email.trim() == '' || password.trim() == '') {
      throw new Error('The fields can NOT be empty!');
    }

    let user = {
      email,
      password,
    };
    
    const response = await fetch('http://localhost:3030/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  
    if (response.ok == false) {
      const error = await response.json();
      throw new Error(error.message);
    }
  
    const resData = await response.json();
    sessionStorage.setItem('auth_token', resData.accessToken);
    sessionStorage.setItem('_id', resData._id);

    location.assign('./index.html');
  }