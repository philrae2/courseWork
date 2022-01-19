//Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

function union (arr1, arr2) {
  const unionArray = [];
  arr1.forEach ((number) => {
    if (!unionArray.includes(number)) {
      unionArray.push (number);
    }
  });
  arr2.forEach ((number) => {
    if (!unionArray.includes(number)) {
      unionArray.push (number);
    }
  });
  return unionArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/* Concise solutions from LS

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}*/