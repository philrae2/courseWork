/*Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.*/

function removeLastChar (string) {
 console.log(string.substring(0, string.length - 1));
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'