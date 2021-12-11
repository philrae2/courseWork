//Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let counter = 0; counter < fish.length; counter+=1) {
  if (fish[counter] === "Nemo") {
    console.log(fish[counter]);
    break;
  } else {
    console.log(fish[counter]);
  }
}