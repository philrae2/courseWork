
function convertNum (num) {
  switch (num) {
    case 0:
      return "0";
    case 1:
      return "1";
    case 2:
      return "2";
    case 3:
      return "3";
    case 4:
      return "4";
    case 5:
      return "5";
    case 6:
      return "6";
    case 7:
      return "7";
    case 8:
      return "8";
    case 9:
      return "9";
    default:
      break;
  }
}

function integerToString (number) {
  let string ="";
  do {
    let num = number % 10;
    let char = convertNum(num);
    number = (number - num) / 10;
    string = char + string;
  } while (number > 0); 
  
  return string;  
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"