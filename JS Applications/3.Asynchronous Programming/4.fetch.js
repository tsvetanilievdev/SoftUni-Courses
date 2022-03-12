// What is Fetch?
// The fetch() method allows making network requests
// It is similar to XMLHttpRequest (XHR). The main  difference is that the Fetch API:
//  - Uses Promises
//  - Enables a simpler and cleaner API
//  - Makes code more readable and maintainable

//Basic Fetch Request
//  - The response of a fetch() request is a Stream object
//  - The reading of the stream happens asynchronously
//  - When the json() method is called, a Promise is returned
//      - The response status is checked (should be 200) before   parsing the response as JSON
/* if (response.status !== 200) {
  // handle error
}
response.json().then(function (data) {
  console.log(data);
}); */

//GET Request
// Fetch API uses the GET method so that a direct call would be like this
fetch('https://api.github.com/users/testnakov/repos')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

//POST Request
// To make a POST request, we can set the method and  body parameters in the fetch() options
fetch('/url', {
  method: 'post',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(data),
});

//PUT Request - променя и трябва да се изпрати целият ресурс

//PATCH Request - променя и може да се изпрати само частта от ресурса, която искаме да променим

//DELETE Request - изтриваме ресурс