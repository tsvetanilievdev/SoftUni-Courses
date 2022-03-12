import auth from '../helpers/auth.js';
import { jsonRequest } from '../helpers/httpService.js';

let section = undefined;
export function initialize(domElement) {
  section = domElement;
}

export async function getView(id) {
  let movieDetail = await jsonRequest(`http://localhost:3030/data/movies/${id}`);
  console.log(movieDetail);
  return section;
}

function createMovieDetails(movie) {
  let editButton = ` <a class="btn btn-warning link" data-route="edit" data-id="${movie._id}" href="#">Edit</a>`;
  let deleteButton = `<a class="btn btn-danger link" data-route="delete" data-id="${movie._id} href="#">Delete</a>`;
  let likeButton = `<a class="btn btn-primary link" data-route="like" data-id="${movie._id} href="#">Like</a>`;

  let buttons = [];
  if (auth.getUserId() === movie._ownerId) {
    buttons.push(deleteButton, editButton);
  } else {
    buttons.push(likeButton);
  }

  let buttonsSection = buttons.join('\n');
  let element = `<div class="row bg-light text-dark">
  <h1>Movie title: ${movie.title}</h1>

  <div class="col-md-8">
      <img class="img-thumbnail"
          src="${movie.img}" alt="Movie">
  </div>
  <div class="col-md-4 text-center">
      <h3 class="my-3 ">Movie Description</h3>
      <p>${movie.description}</p>
      ${buttonsSection}
      <span class="enrolled-span">Liked 1</span>
  </div>
</div>`;
return element;
}
let movieDetailsPage = {
  initialize,
  getView,
};
export default movieDetailsPage;
