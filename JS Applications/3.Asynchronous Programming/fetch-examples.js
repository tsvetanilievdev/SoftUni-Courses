// using in index.html
function loadCharacter() {
  let baseUrl = 'https://swapi.dev/api/';

  fetch(`${baseUrl}people/1`)
    .then((response) => response.json())
    .then((character) => {
      console.log(character);
    })
    .catch((error) => console.log('rejected ' + error));
}
let btn = document.getElementById('load');
btn.addEventListener('click', loadCharacter);

function oldLoadCharacter() {
  let baseUrl = 'https://swapi.dev/api/';

  let prom = fetch(`${baseUrl}people/1`);
  console.log(prom);

  prom.then((response) => {
    if (response.ok) {
      let jsonRes = response.json();
      jsonRes.then((character) => {
        console.log(character);
      });
    }
  });
}

let moviesBtn = document.getElementById('load-movies');
moviesBtn.addEventListener('click', () => {
  let baseUrl = 'http://localhost:3030/data';

  fetch(`${baseUrl}/movies`)
    .then((response) => response.json())
    .then((movies) => {
      movies
        .map((x) => x.title)
        .forEach((title) => {
          let header = document.createElement('h3');
          header.textContent = title;
          setTimeout(() => {
            document.body.appendChild(header);
          }, 5000);
        });
    });
});
