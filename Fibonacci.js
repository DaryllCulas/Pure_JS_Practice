function fibonacciSequence(n) {
  const fib = [0,1];
    for(let i = 2; i < n; i++) {
      
      fib[i]= fib[i-1] + fib[i-2]; 
      debugger;
    }
    return fib;
}

console.log(fibonacciSequence(2));
console.log(fibonacciSequence(3));
console.log(fibonacciSequence(7));

//BIG-O => 0(n) = since the function has one loop occurs within