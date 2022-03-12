let baseUrl = 'http://localhost:3030/data';

fetch(`${baseUrl}/movies`).then(response => response.json()).then((movies) => {
    console.log(movies);
})