rlSync = require("readline-sync");

let noun = rlSync.question("Please enter a noun: \n");
let verb = rlSync.question("Please enter a verb: \n");
let adjective = rlSync.question("Please enter a adjective: \n");
let adverb = rlSync.question("Please enter a adverb: \n");

console.log(`Do you walk your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`)

