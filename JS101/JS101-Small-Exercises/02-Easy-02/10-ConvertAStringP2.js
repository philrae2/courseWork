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


function stringToSignedInteger (string) {
  let sum = 0;
  let numbersArray = string.split("");
  console.log(numbersArray);
  let negativeOrPositive = "";
  
  if (numbersArray[0] === "-") {
    numbersArray.shift();
    negativeOrPositive = "negative";
  } else if (numbersArray[0] === "+") {
    numbersArray.shift();
    negativeOrPositive = "positive";
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    sum = convertChar(numbersArray[index]) + sum * 10;
    }

  console.log(negativeOrPositive);
  console.log(sum);
  if (negativeOrPositive === "negative") {
    sum *=-1;
    ;
  }
  return sum;
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true