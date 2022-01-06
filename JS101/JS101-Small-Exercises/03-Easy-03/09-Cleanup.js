function cleanUp (string) {
  let cleanedString = "";

  for (let index = 0; index < string.length; index++) {
    if (checkIfAlphabet(string[index])) {
      cleanedString += string[index];
    } else if (checkIfAlphabet(string[index]) === false &&
              checkIfAlphabet(string[index - 1]) === true && index !== 0) {
      cleanedString += " ";
    } else if (checkIfAlphabet(string[index]) === false && index === 0) {
      cleanedString += " ";
    }
  }

  return cleanedString;
}

function checkIfAlphabet (char) {
  let alphabet = "abcdefghijklmnopqrstxwuyvz";

  return alphabet.includes(char);
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "