/* function funA (a, b) {
    let c = 3;
    
    let d = 2;
    
    d = function() {
      return a - b;
    }
  }
  
  
  funA(3, 2); */

a = 1;

var b = 2;

cFunc = function (e) {
  var c = 10;
  var d = 15;

  console.log(c);
  console.log(a);

  function dFunc() {
    var f = 5;
    console.log(f);
    console.log(c);
    console.log(a);
  }

  dFunc();
};

cFunc(10);
