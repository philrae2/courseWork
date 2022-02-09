/*

INPUT
- A string

OUTPUT
- An object with the letters as keys and the values as the occurrences

LOGIC:
- Intake the string
- Split the string with the space, and then split
- Filter the array for strings only
- Iterate through the string and add the keys and occurrences

*/

let statement = "The Flintstones Rock";

let stringArray = statement.split(" ").join("").split("");
let occurrences = stringArray.reduce ((object, character) => {

  let appearance = stringArray.filter((char) => char === character );

  object[character] = appearance.length;

  return object;


}, {});

console.log(occurrences);
