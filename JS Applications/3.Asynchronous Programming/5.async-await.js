// Async Functions:
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

// Returns a promise, that can await other promises in a way that looks synchronous
// Operate asynchronously via the event loop
// Contains an await expression that:
//  - Is only valid inside async functions // await може да се използва САМО в ASYNC function
//  - Pauses the execution of that function // спира изпълнението на тази функцията, докато не получи отговор;
//  - Waits for the Promise's resolution
// Позволяват да работим с Promises, по 'синхронен' начин;
// Използваме async await, когато ни трябва резултата от response;
// Error Handling: В повечето случаи се използва try-catch, ако не, се използва async function name().catch(err)

// async function винаги връща Promise:
async function someAsyncFunc() {
  return 'Ceco';
}
console.log(someAsyncFunc()); // Promise {<fulfilled>: 'Ceco'}
console.log(someAsyncFunc().then((res) => console.log(res))); // 'Ceco';

//async function ви позволява вътре в нея да използвате await:
async function otherAsyncFunc() {
  try {
    let result = await resolveAfter2Seconds(); // изпълни resolveAfter2Seconds(), НО изчакай да resolve, едва след това продължи
    console.log(result);
  } catch (err) {
    console.error(err);
  }
  return 'Gratiesla';
}
otherAsyncFunc().then((res) => console.log(res)); // изчаква 2 секунди, тогава 'resolved', и веднага след това 'Gratsiela';

// Do not confuse await with Promise.then()
// await is always used for a single promise
// To await two or more promises in parallel, use Promise.all()
// If a promise resolves normally, then await promise returns the result
// In case of a rejection, it throws an error

//Лекции на Виктор Константинов
//async ни позволява да върнем контрола на основния thread без функцията да е приключила