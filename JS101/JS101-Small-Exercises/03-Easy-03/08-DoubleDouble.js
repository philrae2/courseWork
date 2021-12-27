
function twice (number) {
  let strlen = String(number).length;
  let half = strlen / 2;
  if (strlen % 2 !== 0) {
    return number * 2;
  } else {
    let secondHalf = number % (10**half);
    let firstHalf = (number - secondHalf) / (10**half);
    if (firstHalf === secondHalf) {
      return number;
    } else {
      return number * 2;
    }
  }
}








console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
