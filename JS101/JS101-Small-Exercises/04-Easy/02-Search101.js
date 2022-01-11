let rlSync = require("readline-sync");

let numArray = [];


for (let idx = 0; idx < 6; idx++) {
  numArray[idx] = Number(rlSync.question("Please enter a number: "));
}

let results = numArray.filter ((number) => number === numArray[5]);

if (results.length > 1) {
  console.log(`The number ${numArray[5]} appears in ${Object.values(numArray).slice(0,5)}`);
} else {
  console.log(`The number ${numArray[5]} was not found in ${Object.values(numArray).slice(0,5)}`);

}

