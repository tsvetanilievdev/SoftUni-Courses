let count = 199;

let prom = new Promise(function (resolve, reject) {
  if (count < 140) {
    resolve();
  } else {
    reject('Too big');
  }
});

prom
.then(function(){
    count -= 2;
    console.log(count);
    console.log('All guests are settled!')
})
.catch((rej) => console.log(rej));

console.log('New count: ', count)