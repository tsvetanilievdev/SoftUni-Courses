// console.log("Before promise");
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("huichio");
//   }, 5000);
// }).then(function (res) {
//   console.log("Then returned: " + res);
// });
// console.log("After promise");

let guestCount = 199;
console.log('Start')
let engagementPromise = new Promise(function (resolve, reject) {
  if (guestCount > 100) {
    setTimeout(function(){
      reject("Wedding to big!!");
    },400)
  } else {
    setTimeout(function(){
      resolve("We get married");
    },800)
  }
});
engagementPromise.then(function(messege){
  console.log(messege);
}).catch(function(messege) {
  console.log(messege)
})
console.log('End!')

// engagementPromise.then(function (messege) {
//   console.log("Fulfilled....");
//   console.log(messege);
// }).catch(function(reason){
// console.log('Promise rejected...');
// console.log(reason);
// })