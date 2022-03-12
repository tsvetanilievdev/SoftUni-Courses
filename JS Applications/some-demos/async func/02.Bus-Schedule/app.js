let divInfo = document.getElementById('info');
let span = divInfo.querySelector('.info');

let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
let nextStop = 'depot';

let departButton = document.getElementById('depart');
let arriveButton = document.getElementById('arrive');

departButton.addEventListener('click', (e) => {
  departButton.disabled = true;
  arriveButton.disabled = false;

  fetch(`${baseUrl}${nextStop}`)
    .then((res) => res.json())
    .then((data) => {

        span.textContent = `Arriving at ${data.name}`
        console.log(data)
    });
});

arriveButton.addEventListener('click', (e) => {
  arriveButton.disabled = true;
  departButton.disabled = false;

  fetch(`${baseUrl}${nextStop}`)
    .then((res) => res.json())
    .then((data) => {

        span.textContent = `Arrived at ${data.name}`
        nextStop = data.next;
    });
});

// function solve() {

//     function depart() {
//         console.log('Depart TODO...');
//     }

//     function arrive() {
//         console.log('Arrive TODO...');
//     }

//     return {
//         depart,
//         arrive
//     };
// }

// let result = solve();
