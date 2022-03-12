import auth from '../helpers/auth.js';
import { jsonRequest } from '../helpers/httpService.js';
import viewChanger from '../viewChanger.js';

let section = undefined;
export function initialize(domElement) {
  section = domElement;
  let form = section.querySelector('#register-form');
  form.addEventListener('submit', registerUser);
}

export async function getView() {
  return section;
}

async function registerUser(e) {
  e.preventDefault();
  let form = e.target;
  let formData = new FormData(form);

  let email = formData.get('email');
  let password = formData.get('password');
  let repeatPassword = formData.get('repeatPassword');

  if (
    email === '' ||
    password === '' ||
    password.length < 6 ||
    password !== repeatPassword
  ) {
    throw new Error(
      'Fields must NOT be emtry or password must at least 6 symbols or passwords must be the same'
    );
  }

  let user = {
    email,
    password,
  };

  let url = 'http://localhost:3030/users/register';
  let result = await jsonRequest(url, 'POST', user);

  auth.setAuthToken(result.accessToken);
  auth.setUserId(result._id);
  form.reset();
  viewChanger.navitageTo('home');
}

let registerPage = {
  initialize,
  getView,
};
export default registerPage;
