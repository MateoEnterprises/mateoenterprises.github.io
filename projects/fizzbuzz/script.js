var fizzbuzz = [];
var fizFun = function () {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 ) {
      if (i % 5 === 0) {
        fizzbuzz.push("fizzbuzz");
      } 
      else { fizzbuzz.push("fizz"); }
    } 
    else if(i % 5 === 0) {
      fizzbuzz.push("buzz");
    } 
    else { fizzbuzz.push(i);}
  }
  alert(fizzbuzz);
}
      