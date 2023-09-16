const recursiveFibonacci = (n) => {
  const bracket = [];
  if(n < 2) {
    return n;
  } else { 
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2); 
  }


}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));

// Big - O => O(n^2) -> recursive
// Big - O => if