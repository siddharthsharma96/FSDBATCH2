// console.log("Learning JS");
// console.log(a);

// var a = 10;
// console.log(a);
// var b = 20;
// var c = "Siddharth";
// console.log(b);
// console.log(c);

// // console.log(aa);

let aa = 100;
console.log(aa);

// let bb = 200;
// console.log(bb);
// {
//   let bb = 500;
//   console.log(bb);
// }
// a = "New value of a";
// console.log(a);

// console.log(bb);
// bb = "sid";
// console.log(bb);

// // console.log(d);
// const d = "A constant Value";
// console.log(d);

// d = "sd";

// Functions
// Function declare
PrintName();

function PrintName() {
  let names = "Codehub Nexus";
  console.log(names);
}
console.log(PrintName);

// Function call
PrintName();
// a();
let a = function () {
  console.log("Call by refernece");
};

a();

// Arrow FUNCTION
let b = () => {
  console.log("Arrow function");
};

b();

// let addTwoValues = () => {
//   let a = 1 + 2;
//   let b = a + 1;
//   console.log(a);
//   console.log(b);
// };

// addTwoValues();
// Parameter when we declare a function ex parameter1, parameter2
let addTwoValues = (paramater1, paramater2) => {
  let a = paramater1 + paramater2;
  let b = a + paramater2;
  console.log(a);
  console.log(b);
};

// When we call a function put those values are arguments ex 2,4
addTwoValues(2, 4);

addTwoValues(3, 5);

addTwoValues(4, 8);

addTwoValues(9, 10);
