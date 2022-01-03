let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

//solution 1
let entries = Object.entries(ages);

console.log(entries.includes("Spot"));

//solution 2
console.log(ages.hasOwnProperty("Spot"));

