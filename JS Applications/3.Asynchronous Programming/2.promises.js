// What is a Promise? -

// A promise is an asynchronous action that MAY complete at some point and produce a value
// Промисът е обещание, че нещо ще се сбучи в бъдещето; Основа върху която да изпълнявате действия знаейки, че нещо ще се случи в бъдещето;
// Промисът е ОБЕКТ в JS, върх, който ви изпълнявате действие, знаейки че това действие ще се случи;
// States:
//  - Pending - operation still running (unfinished)
//  - Fulfilled - operation finished (the result is available)
//  - Failed - operation failed (an error is present) - rejected

// Promises use the Promise object

// Promise may resolve   ---> 'then' (onFulfilled) - return data
//     or
// Promise may reject ---> 'catch' (onRejected) - throw error or do something else

// Обяснение: Ако правим заявка към "дебел" ресурс от сървър, промиса ни позволява да продължим да работим, докато ресурса дойде при нас, вместо да го чакаме и след това да продължим.

console.log('Before PROMISE');

let age = 41;
let myPromise = new Promise(function (resolve, reject) {
  if (age < 35) {
    resolve('You can play more years..');
  } else {
    reject('You are too old for First league!');
  }
});

myPromise
  .then(function (message) {
    console.log(`AGE: ${age}. ${message}`);
  })
  .catch(function (message) {
    console.log(`ERROR! AGE: ${age}. ${message}`);
  });

console.log('After PROMISE');
