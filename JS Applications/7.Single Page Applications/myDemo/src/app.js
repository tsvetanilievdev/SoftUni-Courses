import sayHomeTeam from './utils.js'; // ES6 module
// const sayHomeTeam = require('./utils.js') // common JS
import { STADIUM_NAME, REFEREE_NAME as refereeName } from './constants.js';

import * as constants from './constants.js';

let homeTeam = 'Liverpool';
let awayTeam = 'Manchester United';

document.getElementById('match').textContent = `${homeTeam} VS ${awayTeam}`;

document.getElementById('home').textContent += homeTeam;
document.getElementById('away').textContent += awayTeam;

console.log(`Welcome to ${STADIUM_NAME} stadiuuuum`);
console.log(`The referee today is ${refereeName}`);

sayHomeTeam();

console.log('The referee was ' + constants.REFEREE_NAME);

document.getElementById('main').addEventListener('click', (event) => {
  let heading = document.getElementById('heading');
  let p = document.getElementById('info');

  switch (event.target.id) {
    case 'home':
      heading.textContent = 'Home page';
      p.textContent = 'Who we are? What we do?';
      break;
    case 'away':
      heading.textContent = 'Away page';
      p.textContent = 'What we are looking for?';
      break;
    case 'referee':
      heading.textContent = 'Referee page';
      p.textContent = 'Lorem koressmsmdmas mdas ';
      break;
  }
});
