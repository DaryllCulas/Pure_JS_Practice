/* This algorithm works for sorted array only */


const binarySearchAlgorithm = (arr, target) => {
let leftIndex = 0; // this variable contains first element of an array
let rightIndex = arr.length-1; // this variable contains last element of an array

while(leftIndex <= rightIndex) {

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2); // To get the middle element of an array (int only)
     if(target === arr[middleIndex]) {
        return middleIndex; // get middle element 
     }
     if(target < arr[middleIndex]) {
      rightIndex = middleIndex - 1; 
     } else {
      leftIndex = middleIndex + 1;
     }  

}

  return -1; // if the element is not present in an array
}


console.log(binarySearchAlgorithm([-5, 2, 4, 6, 10], 10));
console.log(binarySearchAlgorithm([-5, 2, 4, 6, 10], 6));
console.log(binarySearchAlgorithm([-5, 2, 4, 6, 10], 20));