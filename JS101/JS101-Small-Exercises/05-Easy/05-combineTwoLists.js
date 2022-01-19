/*Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

INPUTS/OUTPUTS
1. Inputs are two arrays that contains the same amount of alpha-numeric characters 
2. Output is a single array combining the two elements that interleaves each element
2a. The first element is the first element from the first array, the second element is the second element from the second array


TEST CASES
1. Alpha-numeric
2. Non-emmpty arrays
3. The same characters

LOGIC
1. Receive two arrays
2. Create an array
3. Place the first element is the first element from the first array, the second element is the second element from the second array
4. Repeat step 3 until all ements are interleaved

*/

function interleave (arr1, arr2) {
  let interleaveArray = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    interleaveArray.push (arr1[idx], arr2[idx]);
  }
  return interleaveArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]