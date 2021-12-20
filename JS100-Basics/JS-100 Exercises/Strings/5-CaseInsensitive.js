/*Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?


let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';*/

function checkEquality (string1, string2) {
  if (string1.toLowerCase() === string2.toLowerCase()) {
    console.log(`${string1} is the same as ${string2} if we don't check case.`);
  } else {
    console.log(`${string1} is not the same as ${string2} if we don't check case.`);
  }
}

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

checkEquality (string1, string2);
checkEquality (string1, string3);
