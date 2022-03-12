import { getUserData, removeUserData, setUserData } from '../utils.js';
const host = 'http://localhost:3030';

async function request(url, options) {
  try {
    const response = await fetch(host + url, options);

    if(response.ok == false){
        const error = await response.json();
        throw new Error(error.message);
    }
    
    try { // await задължително, за да хванем грешката тук
        return await response.json()
    } catch (err) {
        return response;
    }
    
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

function getOptions(method = 'GET', data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();
  if (userData) {
    options.headers['X-Authorization'] = userData.token;
  }

  return options;
}

export async function get(url) {
  return request(url, getOptions());
}

export async function post(url, data) {
  return request(url, getOptions('POST', data));
}

export async function update(url, data) {
  return request(url, getOptions('UPDATE', data));
}

export async function del(url) {
  return request(url, getOptions('DELETE'));
}

export async function login(email, password) {
  const response = await post('/users/login', { email, password });
  const userData = {
    email: response.email,
    token: response.accessToken,
    id: response._id,
    username: response.username,
  };
  setUserData(userData);
}

export async function register(username, email, password, gender) {
  const response = await post('/users/register', {
    username,
    email,
    password,
    gender,
  });
  const userData = {
    email: response.email,
    token: response.accessToken,
    id: response._id,
    username: response.username,
  };
  setUserData(userData);
}

export async function logout() {
  await get('/users/logout');
  removeUserData();
}
