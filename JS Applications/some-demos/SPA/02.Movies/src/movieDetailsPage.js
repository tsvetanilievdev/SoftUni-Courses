import { e } from './dom.js';
import { showHome } from './homePage.js';

let main;
let section;

async function getMovie(id) {
  const response = await fetch('http://localhost:3030/data/movies/' + id);
  const movie = await response.json();
  return movie;
}
export function setupMovieDetail(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;
}

export async function showMovieDetail(id) {

  // правим 3 заявки, не зависими една от друга, за да ги пуснем да вървят ПАРАЛЕЛНО, а НЕ една след друга
  const [movie, likes, ownLike] = await Promise.all([
    getMovie(id),
    getLikesByMovieId(id),
    getOwnLikeByMovieId(id),
  ]); 
  const element = createMovieCard(movie, likes, ownLike);
  main.innerHTML = '';
  main.appendChild(element);
}

function createMovieCard(movie,likes, ownLike) {
  let controls = e(
    'div',
    { className: 'col-md-4 text-center' },
    e('h3', { className: 'my-3' }, 'Movie Description'),
    e('p', {}, movie.description)
  );

  const userId = sessionStorage.getItem('userId');
  if (userId != null) {
    if (userId == movie._ownerId) {
      console.log('owner');
      controls.appendChild(
        e('a', { className: 'btn btn-danger', href: '#', onClick: (e) => onDelete(e,movie._id) }, 'Delete')
      );
      controls.appendChild(
        e('a', { className: 'btn btn-warning', href: '#' }, 'Edit')
      );
    } else if(ownLike.length == 0){ // проверяваме дали има собствен like, ownLike връща с масив с 0 или 1 елемент
      controls.appendChild(
        e(
          'a',
          { className: 'btn btn-primary', href: '#', onClick: likeMovie },
          'Like'
        )
      );
    }
  }
  //изнасяме го в променлива, за да може по-късно при лайк да му променим textContent
  const likeSpan = e('span', { className: 'enrolled-span' }, likes + ' like' + (likes == 1 ? '' : 's')); // условна конструкция, зависимост от броя на 'likes'
  controls.appendChild(likeSpan); 

  const el = document.createElement('div');
  el.className = 'container';
  el.appendChild(
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
  );

  return el;

  async function likeMovie(event) {
    // вградена функция за да вижда closure и да вземем лесно ID
    event.preventDefault();
    const response = await fetch(`http://localhost:3030/data/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': sessionStorage.getItem('authToken'),
      },
      body: JSON.stringify({ movieId: movie._id }),
    });

    if (response.ok) {
      event.target.remove();
      likes++;
      //increment 'likes' counter
      likeSpan.textContent = likes + ' like' + (likes == 1 ? '' : 's');
    }
  }
}

async function getLikesByMovieId(id) {
  const response = await fetch(
    `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
  );
  const data = await response.json();
  return data;
}

async function getOwnLikeByMovieId(id) {
  const userId = sessionStorage.getItem('userId');
  const response = await fetch(
    `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`
  );
  const data = await response.json();
  return data;
}

async function onDelete(event, id){
  event.preventDefault()
  const confirmed = confirm('Are you sure you want to delete the movie?');
  if(confirmed){

    const response = await fetch(`http://localhost:3030/data/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'X-Authorization': sessionStorage.getItem('authToken')
      }
    })
    if(response.ok){
      alert('Movie deleted');
      showHome()
    }
  }
}
