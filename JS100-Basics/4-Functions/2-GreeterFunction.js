let rlSync = require("readline-sync");
function getName () {

let firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");
let fullName = firstName + " " + lastName
return fullName;
}

let fullName = getName();
console.log(`Hello ${fullName}`);