import { getUserData, removeUserData, setUserData } from '../utils.js';
const host = 'http://localhost:3030';

async function request(url, options) {
  try {
    const response = await fetch(host + url, options);

    if (response.ok != true) {
      if (response.status == 403) {
        removeUserData();
      }
      const error = await response.json();
      throw error;
    }

    if (response.status == 204) {
      return response;
    } else {
      return await response.json();
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
  return request(url, getOptions('PUT', data));
}

export async function del(url) {
  return request(url, getOptions('DELETE'));
}

//TO DO.. add project properties if any for login and register

export async function login(email, password) {
  const response = await post('/users/login', { email, password });
  const userData = {
    email: response.email,
    token: response.accessToken,
    id: response._id,
  };
  setUserData(userData);
}

export async function register(email, password) {
  const response = await post('/users/register', { email, password });
  const userData = {
    email: response.email,
    token: response.accessToken,
    id: response._id,
  };
  setUserData(userData);
}

export async function logout() {
  await get('/users/logout');
  removeUserData();
}
