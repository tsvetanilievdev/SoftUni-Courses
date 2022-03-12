const host = 'http://localhost:3030'

// api.js си комуникира и знае как работи конкретния RESTful сървис
// важно е да изолираме api.js модула от всички останали модули

// идеята на този файл е че той ще се грижи за извършването на заявките, абстрактни методи, които да поемат грижата за това нещо.
async function request(url, options) { // функция на ниско ниво
  try {
    // първия try-catch е за да хващаме newwork грешки
    const response = await fetch(host + url, options);

    if (response.ok != true) {
      // 403 - Unauthorized
      if (response.status == 403) {
        sessionStorage.removeItem('userData');
      }
      const error = await response.json();
      throw new Error(error.message);
    }

    /* try {
      return response.json();
    } catch (err) {
      // logout заявката няма response и не може да се парсне към json и само тогава връщаме мълчаливо response
      return response;
    } */

    if (response.status == 204) {
      // 204 = response е ок, но няма отговор в бодито и то не може да се парсне към json()
      return response;
    } else {
      return response.json();
    }
  } catch (err) {
    // хващаме грешката и хвърляме на наново, за да може този който е извикал request, също да разбере, че има грешка. Защото, ако я оставим така гълтаме грешката  мълчеливо и другите функции продължават да работят.
    alert(err.message);
    throw err;
  }
}

function createOptions(method = 'GET', data) { // функция на ниско ниво
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const userData = JSON.parse(sessionStorage.getItem('userData'));
  if(userData != null){
    options.headers['X-Authorization'] = userData.token;
  }

  return options;
}


// get,post, update, del са функции от високо ниво
export async function get(url) {
  return request(url, createOptions());
}
export async function post(url, data) {
  return request(url, createOptions('POST', data));
}
export async function update(url, data) {
  return request(url, createOptions('PUT', data));
}
export async function del(url) {
  return request(url, createOptions('DELETE'))
}

// тъй като login, register и logout са характерни за сървиса, който използваме ги правим в api.js

export async function login(email, password){
  const response = await request('/users/login', createOptions( 'post', {email, password}));
  const userData = {
    email: response.email,
    id: response._id,
    token: response.accessToken
  }
  sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function register(email, password){
  const response = await request('/users/register', createOptions( 'post', {email, password}));
  const userData = {
    email: response.email,
    id: response._id,
    token: response.accessToken
  }
  sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function logout(){
  await request('/users/logout', createOptions());
  sessionStorage.removeItem('userData');
}