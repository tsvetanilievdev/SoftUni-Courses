import { showDetails } from "./details.js";

let main;
let section;
export async function setupCreate(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;

  let form = section.querySelector('form');
  form.addEventListener('submit', addMovie);
}
export async function showCreate() {
  main.innerHTML = '';
  main.appendChild(section);
}

async function addMovie(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let title = formData.get('title');
  let img = formData.get('imageUrl');
  let description = formData.get('description');

  if(title == '' || img == '' || description == ''){
      throw new Error('All field must be filled!')
  }

  let response = await fetch('http://localhost:3030/data/movies', {
    method: 'post',
    headers: { 
        'Content-Type': 'application/json',
        'X-Authorization': sessionStorage.getItem('auth-token') },
    body: JSON.stringify({
      title,
      img,
      description,
    }),
  });
  if (response.ok) {
    let data = await response.json();
    showDetails(data._id);
  }
}
