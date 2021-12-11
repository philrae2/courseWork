let rlSync = require("readline-sync");
let response = "yes";

function prompt () {
  return rlSync.question ("Do you want to continue? Enter yes or no\n");
}


do {
  response = prompt();
} while (response === "yes");