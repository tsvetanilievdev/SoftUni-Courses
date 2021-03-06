import { jsonRequest } from '../helpers/httpService.js';
import viewChanger from '../viewChanger.js';

let section = undefined;
export function initialize(domElement) {
  section = domElement;
}

export async function getView() {
  let url = 'http://localhost:3030/data/movies';
  let movies = await jsonRequest(url);
  console.log(movies);

  let moviesHtml = movies.map((m) => createHtmlMovie(m)).join('\n');
  let movieContainer = document.getElementById('movie-container');
  console.log('here')
  console.log(movieContainer)
  movieContainer.querySelectorAll('.movie').forEach((x) => x.remove());
  movieContainer.innerHTML = moviesHtml;
  movieContainer
    .querySelectorAll('.link')
    .forEach((el) =>
      el.addEventListener('click', viewChanger.changeViewHandler)
    );
  return section;
}
let homePage = {
  initialize,
  getView,
};

function createHtmlMovie(movie) {
  let element = `<div class="card mb-4 movie">
  <img class="card-img-top" src="${movie.img}"
      alt="Card image cap" width="400">
  <div class="card-body">
      <h4 class="card-title">${movie.title}</h4>
  </div>
  <div class="card-footer">
      <a class="link" data-route="movie-details" data-id="${movie._id}" href="#/details/6lOxMFSMkML09wux6sAF">
          <button type="button" class="btn btn-info">Details</button>
      </a>
  </div>
</div>`;

  return element;
}
export default homePage;
