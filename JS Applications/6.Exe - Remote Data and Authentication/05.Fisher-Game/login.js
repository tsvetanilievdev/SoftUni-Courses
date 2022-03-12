let url = 'http://localhost:3030';

async function login(e) {
  e.preventDefault();

  let form = e.currentTarget;
  let formData = new FormData(form);

  let loginUser = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  let logResponse = await fetch(`${url}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginUser),
  });

  let logResult = await logResponse.json();
  localStorage.setItem('token', logResult.accessToken);
  localStorage.setItem('owner_id', regResult._id);

  //redirect
  location.assign('./index.html');
}

export default login;
