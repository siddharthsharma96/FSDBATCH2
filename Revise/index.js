console.log(a);

var a = "wer";
console.log(a);

// console.log(b);

let b = 20;
b = 50;
console.log(b);

const c = 30;
// c = 78;
console.log(c);

aa();
function aa() {
  console.log("Inside function");

  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
}
aa();
// ab();
var ab = function () {
  console.log("Inside AB at var");

  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
};

ab();

let ac = () => {
  console.log("arrow function");
};

ac();

let sum = (a, b) => {
  console.log("a+b =", a + b);
};

sum(1, 2);

sum(3, 4);

sum(4, 8);
