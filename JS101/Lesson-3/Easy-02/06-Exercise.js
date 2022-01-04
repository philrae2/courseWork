let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

let newArray = [];

for (let value of flintstones) {
  if (Array.isArray(value)) {
    for (let newValues of value) {
      newArray.push(newValues);
    }
  } else {
    newArray.push(value);
  }
}

console.log(newArray);