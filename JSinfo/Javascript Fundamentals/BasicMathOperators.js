

// Task 1 - Prefix and Postfix increment/decrement

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

console.log(c);
console.log(d);

// Task 2 - What are the values of a and x after the code below?

let f = 2;

let x = 1 + (f *= 2);

console.log(x);

// Task 3 - Type conversions
console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log("  -9  " + 5) // -9 5
console.log("  -9  " - 5) // -14
console.log(null + 1) // 1
console.log(undefined + 1) // NaN
console.log(" \t \n" - 2) // -2


// Task 4 - Fix the addition (This section tests only for browser console to see the result)
let z = prompt("First number?", 1);
let y = prompt("Second number?", 2);

alert(z + y); // 12

// Solution 
/*

let z = +prompt("First number?", 1);
let y = +prompt("Second number?", 2);

alert(z + y); // 3


*/