let munstersDescription = "The Munsters are creepy and spooky.";
let newString = "";

for (let counter = 0; counter < munstersDescription.length; counter++) {
  if (munstersDescription[counter] ===
    munstersDescription[counter].toUpperCase()) {
    newString += munstersDescription[counter].toLowerCase();
  } else {
    newString += munstersDescription[counter].toUpperCase();
  }
}

console.log(newString);