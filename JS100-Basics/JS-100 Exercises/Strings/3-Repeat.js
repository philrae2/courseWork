/*Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().*/

function repeat (times, string) {
  let originalString ="";
  for (let counter = 1; counter <=times; counter+=1) {
    originalString = originalString + string;
  }
  console.log(originalString);
}

repeat(3, 'ha'); // 'hahaha'