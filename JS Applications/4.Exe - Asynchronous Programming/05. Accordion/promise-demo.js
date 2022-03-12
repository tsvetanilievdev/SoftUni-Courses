// console.log('Before promise');

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject('is rejected');
//   }, 5000);
// }).then(function (res) {
//   console.log('Then returned: ' + res);
// }).catch(rej => console.log('Then returned: ' + rej));
// console.log('After promise');


console.log('Before promise');
new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('resolved?'); // resolve or reject 
  }, 2200); // rejected after 500s
})
  .then(function (result) { // if is resolved
    console.log(result + ' yes');
  })
  .catch(function (error) { // if is rejected
    console.log(error + ' no');
  });
console.log('After promise');