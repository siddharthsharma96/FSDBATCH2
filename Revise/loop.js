// var a = false;

// if (a == true) {
//   console.log("Its true");
// }

// if (a === true) {
//   console.log("Its true");
// } else {
//   console.log("Its false");
// // }

// var b = "3";
// if (b === 3) {
//   console.log("Value is 3");
// } else if (b === 4) {
//   console.log("Value is 4");
// } else if (b === 5) {
//   console.log("Value is 5");
// } else {
//   console.log("No Match Valkue");
// }

var c = [1, 2, 3, 4, 5, 6];
console.log(c.length);

for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}

var b = c.map((arrayvalue, arrayIndex) => {
  console.log(arrayvalue, "is at index ", arrayIndex);
  return arrayvalue + arrayIndex;
});

console.log(b);

const f = c.filter((arrayvalue, arrayIndex) => {
  console.log(arrayvalue, "is at inside filter index ", arrayIndex);
  return arrayvalue > 3;
});

console.log(f);

const r = c.reduce((acc, arrayvalue, arrayIndex) => {
  console.log(arrayvalue, "is at inside reduce", acc, "index ", arrayIndex);
  return acc + arrayvalue;
}, 10);

console.log(r);
