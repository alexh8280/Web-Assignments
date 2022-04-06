console.log("Hello world");
//
/*
This program shows the basic concepts of JavaScript
*/

let a = 2 + 5 * (9 + 5.5) / 4;
console.log(a); //logging a on the console

const training = "DCI Training";

a = "Hello World"; //weakly typed

//Async JavaScript
function greet(name){
  console.log("Hello " + name);
}

function test() {
  console.log("Testing when this will be printed");
}

setTimeout(test, 5000);
greet("Alex");

console.log("Comes here");

const helloBtn = document.querySelector("#sayHello");

helloBtn.addEventListener("click", function() {
  alert("Hello!!");
});

helloBtn.addEventListener("mouseover", function() {
  console.log("Mouse hover");
});
