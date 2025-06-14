// exportmodule.js
var obj=require("./importmodule");
var d=obj.factorial(5);
console.log("factorial="+d);
var b=obj.sumfun(10,20);
console.log(b);
var s=obj.primes(27);
console.log(s);