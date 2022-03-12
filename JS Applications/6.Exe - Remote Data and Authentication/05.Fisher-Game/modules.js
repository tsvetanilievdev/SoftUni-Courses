// JavaScript Modules:

// A set of related functionality
//  - Resolve naming collisions
//  - Expose only public behavior
//  - Not populate the global scope
// Loaded by setting the type attribute of a script:
//    <script src="app.js" type="module"></script> // така може да се сложи script-а в <head> тага, така скрипта чака съдържанието да се зареди и след това го прилага. Същото се постига и използване на difer вместо type=module <script src="app.js" defer></script>) 
// Note: Browsers will not load modules from the file system – you must use a local server
//  - lite-server or similar

//ES6 Export Syntax:

// - export  expose public API:
/* export function updateScoreboard(newResult) { … }
export const homeTeam = 'Tigers'; */

// - You can export multiple members:
/* export { addResult, homeTeam as host }; */ // смяна името homeTeam на home

// Default exports can be imported without a name:
/* export default function addResult(newResult) { … } */

// ES6 modules VS commons JS modules - виж папка ----> myDemo <---- 
// ES6:
//      - първо поставяне на script в таг !!! <head> !!!, в HTML документа 
//      - добавяне на type="module" ->>> <script src="/src/app.js" type="module"></script>
//      - вече app.js е module, в който може да се използва ES6 syntax:
//      - utils.js е файл който експортваме желанато:
//          ---> export default sayHomeTeam; // ES6 modules - само едно експортване за целия модул utils.js!!!!
//      - и вече app.js модулът импортваме от utils.js:
//          ---> import sayHomeTeam from './utils.js' // ES6 module
//      - constants.js: // множество name експортване(може да има множество name експорти в модула constants.js)
//          ---> export const STADIUM_NAME = 'Wembley';
//          ---> export const REFEREE_NAME = 'Drago Draganov';
//      - в app.js: импортмане на променливи с техните имена
//          ---> import {STADIUM_NAME, REFEREE_NAME as refereeName} from './constants.js' // името REFEREE_NAME от constants.js в app.js ще бъде refereeName
//      - ИЛИ в app.js: импортване и обединяване на всичко, което е експортнато в constants.js в един обект(constants) '* as constants' : // 
//          ---> import * as constants from './constants.js'; // използване на звездичка '*' след импорт, ознавача всичко as 'constants'

// common JS modules:
// export : module.exports = sayHomeTeam; 
// import : const sayHomeTeam = require('./utils.js');

// Module Best Practices:
//  - SPLIT code in modules by related functionality:
//      - Aim for high cohesion
//  - Only export what is NECESARRY for consumers
//  - Prefer NAMED exports over defaults
//  - Do NOT perform operations on export
