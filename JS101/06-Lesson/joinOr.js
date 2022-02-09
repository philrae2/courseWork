/*

INPUTS
3 arguments composed of an array, a delimiter, and 
the word to join the last item

OUTPUTS
A string composed of the arguments

RULES
- The delimiter and join word arguments are optional
- The join word defaults to "or" if not given
- The delimiter defaults to a comman
- Array argument can be empty
- Return an empty string
- The array can contain only one number

TEST CASES
- already given

QUESTIONS
- Are we only using numbers?
- Can there be nested arrays?

DATA STRUCTURE
- A string

LOGIC
- Take in a possible three arguments
- Default the limiter to a comma and the join word to "or"
- Declare a variable and initialize to an empty string
- If the array length is greater than 1, insert the join word as the second
  to the laste element of the array
- Use a for loop to iterate through the array and add the delimiter
- Return the resulting string
*/

function joinOr (array, delimiter = ", ", joinWord = "or") {
  let resultString = "";

  for (let index = 0; index < array.length - 1; index++) {
    resultString += array[index] + delimiter;
  }

  if (array.length > 2) {
    return resultString.substring(0, resultString.length - 1) + " " + joinWord + " " + array[array.length - 1];
  } else if (array.length === 1) {
    return array.join("");
  } else if (array.length === 2) {
    return resultString.substring(0, resultString.length - 2) + " " + joinWord + " " + array[array.length - 1];
  } else {
    return array.join('');
  }


}


console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]))                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"

/* 

LS Solution

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

*/