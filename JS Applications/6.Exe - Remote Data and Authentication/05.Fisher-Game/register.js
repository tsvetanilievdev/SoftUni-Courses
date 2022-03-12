let registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', register);

let url = 'http://localhost:3030';

async function register(e) {
  e.preventDefault();

  let form = e.currentTarget;
  let formData = new FormData(form);

  if (formData.get('password') !== formData.get('rePass')) {
    console.error('The passwords are NOT the same!');
    return;
  }

  let newUser = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  let regResponse = await fetch(`${url}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  let regResult = await regResponse.json();
  localStorage.setItem('token', regResult.accessToken);
  localStorage.setItem('owner_id', regResult._id);

  //redirect
  location.assign('./index.html');
}

export default register;
