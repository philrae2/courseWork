/* Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

INPUT/OUTPUT
1. Input are two arrays with the same number of number elements
2. Output is an array with the total of each multiplication from each array element

LOGIC
1. Receive two arrays
2. Create a product array
3. Iterate through the arrays and multiply
4. Place the product in the product array after each iteration

*/

function multiplyList (arr1, arr2) {
  let productArray = [];
  for (let idx = 0; idx < arr1.length; idx ++) {
    productArray.push (arr1[idx] * arr2[idx]);
  }
  return productArray;
}


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]