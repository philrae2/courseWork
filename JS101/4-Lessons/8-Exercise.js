/* Write a program that uses this array to create an object where the names are 
the keys and the values are the positions in the array

INPUT: An array of strings of names
OUTPUT: An object with a number key and string name taken from the array

LOGIC:
- Create an object to hold the keys and string names
- Iterate through the array
- At each iteration put into the object

*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let objectHolder = {};

flintstones.forEach ((element, idx) => {
  objectHolder[element] = idx;
});

console.log(objectHolder);


