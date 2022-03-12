import addMoviePage from './pages/addMovie.js';
import editMoviePage from './pages/editMovie.js';
import homePage from './pages/homePage.js';
import loginPage from './pages/LoginPage.js';
import movieDetailsPage from './pages/movieDetails.js';
import nav from './pages/nav.js';
import registerPage from './pages/registerPage.js';
import viewChanger from './viewChanger.js';

setup();

async function setup() {
  //setup html page login
  //setup html page register
  //setup html page logout?
  //setup html page homepage
  //setup html page add movie
  //setup html page movie details
  //setup html page edit movie
  //setup html page like? - maybe only logic
  //setup html page delete? - maybe only logic

  let app = document.getElementById('main');


  //initialize pages and store them
  loginPage.initialize(document.getElementById('form-login'));
  registerPage.initialize(document.getElementById('form-sign-up'));
  addMoviePage.initialize(document.getElementById('add-movie'));
  editMoviePage.initialize(document.getElementById('edit-movie'));
  homePage.initialize(document.getElementById('home-page'));
  movieDetailsPage.initialize(document.getElementById('movie-details'));

  viewChanger.initialize(document.querySelectorAll('.link'))
  viewChanger.navitageTo('home');

}