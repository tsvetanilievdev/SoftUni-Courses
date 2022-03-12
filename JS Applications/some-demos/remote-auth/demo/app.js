document
  .getElementById('form-register')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    //create form Data
    let formData = new FormData(e.target);

    //get input values using name="...."
    let email = formData.get('email');
    let pass = formData.get('password');
    let repeat = formData.get('repeat');

    //validation
    if (email.trim() == '' || pass.trim() == '' || repeat.trim() == '') {
      alert('All forms must be completed!');
    }
    if (pass !== repeat) {
      alert('The password must be the same');
    }

    register(email, pass);
  });
document.getElementById('form-login').addEventListener('submit', async (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);

  let email = formData.get('email');
  let pass = formData.get('password');

  if (email.trim() == '' || pass.trim() == '') {
    alert('All forms must be completed!');
  }

  login(email, pass);
});

document.getElementById('form-create').addEventListener('submit', async (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);

  let name = formData.get('name');
  let value = formData.get('value');

  if (name.trim() == '' || value.trim() == '') {
    alert('All forms must be completed!');
  }

  let result = await postData({ name, value });
  console.log(result);
});

async function register(email, password) {
  let response = await fetch('http://localhost:3030/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  //if response register is successfully, save token
  if (response.ok) {
    const data = await response.json();
    saveToken(data);
  } else {
    const error = await response.json();
    alert('Error: ' + error.message);
  }
}

async function login(email, password) {
  let response = await fetch('http://localhost:3030/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  //if response there is such user, save token
  if (response.ok) {
    const data = await response.json();
    saveToken(data);
  } else {
    const error = await response.json();
    alert('Error: ' + error.message);
  }
}

async function getData() {
  const token = sessionStorage.getItem('authToken');
  //check if is there saved token;
  if (token == null) {
    alert('You must login first!');
    return;
  }

  const response = await fetch('http://localhost:3030/data/records', {
    method: 'GET',
    headers: {
      'X-Authorization': token,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
}

function saveToken(data) {
  sessionStorage.setItem('authToken', data.accessToken);
}

async function postData(dataObj) {
  const options = {
    method: 'POST',
    headers: {},
    body: JSON.stringify(dataObj),
  };
  const token = sessionStorage.getItem('authToken');

  if (token !== null) {
    options.headers['X-Authorization'] = token;
    const response = await fetch('http://localhost:3030/data/records', options);
    return await response.json();
  } else {
    alert('You must login first!');
    return;
  }
}
