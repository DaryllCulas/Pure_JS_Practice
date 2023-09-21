/*
Summary

* Comparison operators return a boolean value.
* Strings are compared letter-by-letter in the “dictionary” order.
* When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
* The values null and undefined equal == each other and do not equal any other value.
* Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

*/

// Task 1 - Comparisons -> what would be the result of these expressions
console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false