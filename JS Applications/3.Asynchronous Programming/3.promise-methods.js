//Promise.then - if is resolve
console.log('Before promise');

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('huichio');
  }, 5000);
}).then(function (res) {
  console.log('Then returned: ' + res);
});
console.log('After promise');

//promise.catch - if is rejected
console.log('Before promise');
new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('fail');
  }, 500); // rejected after 500s
})
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
console.log('After promise');

// Promise.reject(reason)
//  - Returns an object that is rejected with the given reason
let alwaysRejected = Promise.reject('Some reason always reject');

// Promise.resolve(value)
//  - Returns an object that is resolved with the given value
let alwaysResolve = Promise.resolve('Always agree..');

// Promise.all(iterable) - Стартиране на няколко Promise едновременно, и всичките трябва да са resolve
//  - Returns a promise
//      - Fulfills when all of the promises have fulfilled
//      - Rejects as soon as one of them rejects
//receive arrays of promises, which all promises must be resolved!!!!
// Promise.all([alwaysResolve, ....... ])

// Promise.allSettled(iterable) - Всички promises да приключат, няма значение resolve или reject    
//  - Wait until all promises have settled

// Promise.race(iterable) - Пускаме няколко promises, и ни интересува първият който ще успее(resolve);
//  - Returns a promise that fulfills or rejects as soon as one of the promises in an iterable is settled

// Promise.prototype.finally() - Изпълнява се независимо дали е resolve(then) или reject(catch) е резултата от Promise; използва се за зачистване на данни или loader
//  - The handler is called when the promise is settled
