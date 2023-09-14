const factorial = (n) => {

  let bracket = [];
  let product = 1;

  for(let i = n; i <= n; i--) {
    if( i === 0) {
      break;
    }
    bracket.push(i);
    product *= i;
  }

  return `[${bracket}] => ${product}`;
}

console.log(factorial(5));


//BIG-O => 0(n) - since the function itself has one loop occurs within.
