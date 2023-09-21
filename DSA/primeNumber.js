const primeNumber = (n) => {
  if(n < 2) {
    return false;
  }
  for(let i = 2; i <= Math.sqrt(n); i++) {


    if(n % i === 0) {
      return `${n} => false`;
    }
  }
  return `${n} => true`;
}

// console.log(primeNumber(5));
console.log(primeNumber(4));


//BIG-O => 0(n) / 0(sqrt(n)) -> if n has bigger value;