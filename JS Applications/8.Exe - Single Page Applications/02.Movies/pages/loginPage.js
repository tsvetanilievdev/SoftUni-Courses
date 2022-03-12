import auth from '../helpers/auth.js';
import { jsonRequest } from '../helpers/httpService.js';
import viewChanger from '../viewChanger.js';


let section = undefined;
export function initialize(domElement) {
  section = domElement;
  let form = section.querySelector('#login-form');
  form.addEventListener('submit', loginUser);
}

export async function getView() {
  return section;
}

async function loginUser(e) {
  e.preventDefault();
  let form = e.target;
  let formData = new FormData(form);

  let user = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  let url = 'http://localhost:3030/users/login';
  let result = await jsonRequest(url, 'POST', user);

  auth.setAuthToken(result.accessToken);
  auth.setUserId(result._id)
  form.reset()
  viewChanger.navitageTo('home');
}



let loginPage = {
  initialize,
  getView,
};
export default loginPage;
