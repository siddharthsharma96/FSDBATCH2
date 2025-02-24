// 1. If
// if(Conditioon){
//     The code that we want to execute
// }

if (1 < 2) {
  console.log("My code is working");
}

//2. If Else
// if(Conditioon){
//     if condition is true The code will execute
// }else{
// if condition is not true then this code will work
// }

if (1 > 2) {
  console.log("2 is grater then 1");
} else {
  console.log("1 is not  grater then 2");
}

// 3. Else IF
// if(condition 1){
//      condition 1 is true then this code will work
// }else if(condition 2){
//      condition 2 is true then this code will work
// }else if(condition 3){
//     condition 2 is true then this code will work
// }else{
//     if none of the above is condition is true then this code will work
// }

if (1 > 2) {
  console.log("1 is greater");
} else if (1 === 2) {
  console.log("1 is equal to 2");
} else if (1 < 0) {
  console.log("2 is greater");
} else {
  console.log("None oif the conditions are true");
}

let a = [1, 2, 3, 4, 5, 6];
console.log(a.length);

// for(intialization;condition;increment/decrement){
//     code that we want to execute
// }

for (let i = 0; i < a.length; i++) {
  //   console.log("value of ", i);
  //   console.log(a[i] * 3);
}

// array.map((callback function we will provide arguments)=>{the code that we want to execute})
const b = a.map((arrayValue, arrayIndex) => {
  console.log(arrayValue, arrayIndex);
  return arrayValue * 2;
});

console.log(b);

// filter it will give truthy value
let e = a.filter((arrayValue, index) => {
  console.log(arrayValue, index);
  return arrayValue > 3;
});
console.log(e);

// reduce it will give a single value

let f = a.reduce((acc, arrayvalue, index) => {
  console.log(acc, index, arrayvalue);
  return acc + arrayvalue;
}, 0);

console.log(f);

console.log([1, 2] == [1, 2]); //false because we are checking their address
let c = [1];
let d = [1];
console.log(c[0] == d[0]);

// (codition)
// [array,arrayvalues]
// {code written}
