function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error('time must be a valid number'));
    }
    setTimeout(resolve, time);
  });
}

console.log('START');
console.log('---------');

let t = 1000;
delay(t)
  .then(() => console.log('DONE after:' + t))
  .catch((err) => console.log(err));

console.log('END');
console.log('---------');
