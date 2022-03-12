// What is AJAX? - Asynchronous JavaScript and XML
// методика за взимаме на данни от сървър, вече данните сме вземат в JSON формат, а не в XML

// Asynchronous JavaScript And XML
//      - Background loading of dynamic content/data
//      - Load data from the Web server and render it
// Two types of AJAX
//  - Partial page rendering
//      - Load HTML fragment + show it in a <div>
//  - JSON service
//      - Loads JSON object and displays it

// Synchronous vs Asynchronous

// Asynchronous Programming in JS
//      - NOT the same thing as concurrent or multi-threaded
//      - There can be asynchronous code, but it is generally single-threaded(в една нишка)!!!!
//      - Structured using callback functions
//      - In current versions of JS there are:
//          - Callbacks
//          - Promises
//          - Async Functions

console.log('Hello'); // 1. изпълнява се този код, защото винаги JS се изпълнява синхронно

setTimeout(() => {
  // 2. взиза в setTimeout и казва изпълни тази функция след 1 сек, но в това време JS продължава да работи, а не чака да мине една секунда и запазва фунцията която трябва да се изпълни;
  console.log('Middle but logged after 1 second');
}, 1000);

console.log('Eeeeeeeend'); // 3. Изпълнява този ред
// минава 1 секунда и изпълнява функцията във setTimeout-а...

// on console:
//Hello
//Eeeeeeeend
// Middle but logged after 1 second

// Callback:
//  - Function passed into another function as an argument
//  - Then invoked inside the outer function to complete some kind of routine or action

function running() {
  return 'Running';
}
// 'run' is CALLBACK functions
function category(run, type) {
  console.log(run() + ' ' + type);
}
category(running, 'sprint'); //Running sprint
