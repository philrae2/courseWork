//Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

function halvsies (array) {
  const halvsieArray = [];
  let firstInnerArray = [];
  let secondInnerArray = [];
  let arrayLength = array.length;
  let midIndex = Math.ceil(arrayLength / 2);

  firstInnerArray = array.slice(0, midIndex);

  if (arrayLength > 1) {
    secondInnerArray = array.slice(midIndex);
  }

  halvsieArray.push (firstInnerArray, secondInnerArray);
  return halvsieArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/*
RULES -
1. Take in an array
2. Return an array with two elements containing the values from the original array
3. The returned array must be split, if the length of the array is odd, then the first array contains then place the middle element in the first array

TEST CASES:
1. We can send in an empty array but return an array with two blank arrays as elements
2. The values are numbers
3. We can send in an item with only one value, but the returned array has two elements with a blank array for the second array

LOGIC
1. Receive a single array
2. Create an array to serve as a place holder for two arrays
3. Create the first inner array
4. Create the second inner array
5. Find the lenght of the array.
5a. If the length is even then place the first half of the elements in the first array and second half in the second array
5b. If the length is odd then place the middle element in the first array and the rest in the second array
5c. If the length is one then put the value in the first array and none in the second array

*/