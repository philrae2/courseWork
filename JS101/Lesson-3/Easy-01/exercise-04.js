let munstersDescription = "the Munsters are CREEPY and Spooky.";

//my solution
let newString = munstersDescription.slice(0,1).toUpperCase() +
  munstersDescription.slice(1).toLocaleLowerCase();

console.log(newString);

//LS solution
let newString1 = munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(newString1);

// => The munsters are creepy and spooky.