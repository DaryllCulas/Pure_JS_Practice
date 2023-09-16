const recursiveFactorial = (n) => {
  if(n === 0) {
    return 1;
  } else {
    return n * recursiveFactorial(n-1);
  }
}

// console.log(recursiveFactorial(0));
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(3));


//Big-O => O(n);