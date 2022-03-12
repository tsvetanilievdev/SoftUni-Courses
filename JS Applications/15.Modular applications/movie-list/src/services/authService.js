import * as request from './requester.js';
import * as endpoints from './api-endpoints.js';

function saveData({ _id, email, accessToken }) {
  sessionStorage.setItem('authToken', accessToken);
  sessionStorage.setItem('userId', _id);
  sessionStorage.setItem('email', email);
}

function removeData(){
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
}

export function login(email, password) {
  return request.post(endpoints.login, { email, password }).then((data) => {
    saveData(data);
  });
}

export function register(email, password) {
  return request.post(endpoints.register, { email, password }).then((data) => {
    saveData(data);
  });
}

export function logout() {
  const options = {
    method: 'GET',
    headers: {},
  };
  if (sessionStorage.getItem('authToken')) {
    options.headers['X-Authorization'] = sessionStorage.getItem('authToken');
  }
  return fetch(endpoints.logout, options).then((res) => {
    removeData()
  });
}

export function createMovie(data){
  return request.post(endpoints.collection,data).then(res => {
    console.log('completed');
  })
}

export function getMovieById(id){
  return request.get(endpoints.collection + `/${id}`);
}
export function deleteMovieById(id){
  const confirmed = confirm('Are you sure you want to delete this movie?');
  if(confirmed){
    return request.del(endpoints.collection + `/${id}`)
  }else {
    return;
  }
}

export function updateMovieById(id, data){
  return request.put(endpoints.collection + `/${id}`,data);
}