import { e } from './dom.js';

let main;
let section;

export function setupMovieDetail(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;
}

export async function showMovieDetail(id) {
  const response = await fetch('http://localhost:3030/data/movies/' + id);
  const movie = await response.json();

  const card = createMovieCard(movie);

  section.innerHTML = '';
  section.appendChild(card);
  main.innerHTML = '';
  main.appendChild(section);
}

function createMovieCard(movie) {
  console.log('up');
  // POST FEEDBACK - ЗА ДА СЕ СЛОЖИ EVENT LISTENER НА БУТОНИТЕ, ЩЕ ТРЯБВА ДА СЕ СЪЗДАДЕ DIV ЕЛЕМЕНТА В КОЙТО СЕ СЪХРАНЯВАТ ---> ВИЖ АЛТЕРНАТИВЕН ВАРИАТ 1.
  /* const userId = sessionStorage.getItem('userId');
  const controls = []; // създаване на празен масив

  // ВАЖНОООООО!!!
  // ДОБАВЯНЕ НА HTML в интерполиран СТРИНГ, зависимост от условия, използвайки масив от стрингове(html)
  // проверяваме дали userId и ownerId са еднакви и зависимост от това добавяме стрингове в масив, който накрая join('')!
  if(userId != null){
    if(userId == movie._ownerId){
      controls.push(`<a class="btn btn-danger" href="#">Delete</a>`)
      controls.push(`<a class="btn btn-warning" href="#">Edit</a>`)
    }else {
      controls.push(`<a class="btn btn-primary" href="#">Like</a>`)
    }
  }
  controls.push(`<span class="enrolled-span">Liked 1</span>`) */

  // АЛТЕРНАТИВЕН ВАРИАТ 1: използване на функция за създаване на елементи ---> import { e } from "./dom.js";
  const controls = e(
    'div',
    { className: 'col-md-4 text-center' }, // създаваме последният див където са бутоните зависимост от условия,добавямего накрая!!! --- ВИЖ ДОЛУ!!!
      e('h3', { className: 'my=3' }, 'Movie Description'),
      e('p'),{},movie.description
  );

  const userId = sessionStorage.getItem('userId');
  if (userId != null) {
    if (userId == movie._ownerId) {
      controls.appendChild(
        e('a', { className: 'btn btn-danger', href: '#' }, 'Delete')
      );
      controls.appendChild(
        e('a', { className: 'btn btn-warning', href: '#' }, 'Edit')
      );
    } else {
      controls.appendChild(
        e('a', { className: 'btn btn-primary', href: '#' }, 'Like')
      );
    }
  }
  controls.appendChild(e('span', { className: 'enrolled-span' }, `Like 1`));

  console.log(controls);
  const element = document.createElement('div');
  element.className = 'container';
  element.appendChild(
    e(
      'div',
      { className: 'row bg-light text-dark' },
      e('h1', {}, `Movie title: ${movie.title}`),
      e(
        'div',
        { className: 'col-md-8"' },
        e('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })
      ),
      controls
    )
  ); // <-- ВИЖ ТУК добавяне на горе създаненият div - controls

  return element;
}
