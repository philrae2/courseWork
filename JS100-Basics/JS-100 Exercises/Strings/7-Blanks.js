//Write a function that checks whether a string is empty or not. 

function isBlank (string) {
  if (string) {
    console.log ("The string is not blank");
  } else {
    console.log("The string is blank.");
  }
}


isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true