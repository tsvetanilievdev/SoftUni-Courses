import { showHome } from "./homePage.js";

let main;
let section;
let setActiveNav;

export function setupAddMovie(mainTarget, sectionTarget, setActiveNavCb) {
  main = mainTarget;
  section = sectionTarget;
}

export function showAddMovie() {
  main.innerHTML = '';
  main.appendChild(section);

  section.querySelector('form').addEventListener('submit', onSubmit);
}
async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const title = formData.get('title');
  const description = formData.get('description');
  const img = formData.get('imageUrl');

  if (title.trim() == '' || description.trim() == '' || img.trim() == '') {
    return alert('All field must be completed!');
  }

  const body = JSON.stringify({
    title,
    description,
    img,
  });

  const token = sessionStorage.getItem('authToken');
  if (token == null) {
    return alert('You\re not logged id!');
  }

  try {
    const response = await fetch('http://localhost:3030/data/movies', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': token,
      },
      body,
    });

    if (response.status == 200) {
      const recipe = await response.json();
      showHome()
    } else {
      throw new Error(await response.json());
    }
  } catch (err) {
    console.error(err.message);
  }
}
