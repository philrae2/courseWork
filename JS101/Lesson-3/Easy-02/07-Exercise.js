let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let entries = Object.entries(flintstones);
console.log(entries);

let barney = entries[entries.findIndex(([names, _]) => names === "Barney")];

console.log(barney);