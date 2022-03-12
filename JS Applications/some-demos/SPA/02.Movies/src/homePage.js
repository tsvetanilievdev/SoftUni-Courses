import { showMovieDetail } from "./movieDetailsPage.js";

async function getMovies() {
  const response = await fetch('http://localhost:3030/data/movies');
  const recipes = await response.json();

  return recipes;
}

function createMovieCard(movie) {
  const result = `<div class="card mb-4">
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="javascript:void(0)">
            <button data-id="${movie._id}" data-ownerId="${movie._ownerId}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>

</div>`;
  return result;
}

let main;
let section;
let setActiveNav;

export function setupHome(mainTarget, sectionTarget,setActiveNavCb) {
  main = mainTarget;
  section = sectionTarget;
  setActiveNav = setActiveNavCb;
}

export async function showHome() {

  const movies = await getMovies();
  let result =  await movies.map(movie => createMovieCard(movie)).join('');
  section.querySelector('#container-cards').innerHTML = result;

  section.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON'){
        const id = event.target.dataset.id;
        const ownerId = event.target.dataset.ownerid;
        showMovieDetail(id,ownerId)
        return;
    }
})

  main.innerHTML = '';
  main.appendChild(section);
  setActiveNav()
}
