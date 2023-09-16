const linearSearchAlgorithm = (arr, target) => {
  for(let i = 0; i < arr.length; i++) {
    if(target === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearchAlgorithm([-5,2,10,4,6], 10));
console.log(linearSearchAlgorithm([-5,2,10,4,6], 6));
console.log(linearSearchAlgorithm([-5,2,10,4,6], 20));

//Big-O => 0(n);