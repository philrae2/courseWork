/* eslint-disable max-lines-per-function */

// eslint-disable-next-line max-lines-per-function
function convertChar (character) {
  switch (character) {
    case "0":
      return 0;
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
    default:
      break;
  }
}

function stringToInteger (string) {
  let sum = 0;
  let numbersArray = string.split("");

  for (let index = 0; index < numbersArray.length; index += 1) {
    num = convertChar(numbersArray[index]) + sum * 10;
  }
  console.log(sum);
  return sum;
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true