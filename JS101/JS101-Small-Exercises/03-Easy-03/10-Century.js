function century (year) {
  let lastNumber = {1: "st", 2: "nd", 3: "rd"};
  let century = String(Math.ceil(year / 100));
  let tensPlace = century[century.length - 2];
  let onesPlace = century[century.length - 1];

  if (tensPlace !== "1" && Object.keys(lastNumber).includes(onesPlace)) {
    return century + lastNumber[onesPlace];
  } else {
    return century + "th";
  }

}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

