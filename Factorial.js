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

  return `${bracket} => ${product}`;
}

const getFactorial = (n) => {
  return factorial(n);
}

console.log(getFactorial(5));

