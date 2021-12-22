//Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

function shortLongShort (string1, string2) {
  let short;
  let long;

  if (string1.length > string2.length) {
    long = string1;
    short = string2;
  } else {
    long = string2;
    short = string1;
  }
  
  newString = short + long + short;
  return newString;
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('', 'xyz'));         // "xyz"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
