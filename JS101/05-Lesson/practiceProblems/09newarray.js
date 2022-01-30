/* Given the following data structure, return a new array with the
same structure, but with the values in each subarray ordered
 -- alphabetically or numerically as appropriate -- in ascending order. */

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let transform = arr.map((subArray) => {
  if (typeof subArray[0] === "number") {
    return subArray.slice().sort((a,b) => a - b);
  } else {
    return subArray.slice().sort();
  }
});

console.log(transform);

