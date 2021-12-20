//Write a function that checks whether a string is empty or not and for white spaces. 

function isBlank (string) {
  string = string.trim();
  if (string) {
    console.log ("The string is not blank");
  } else {
    console.log("The string is blank or whitespace.");
  }
}


isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true