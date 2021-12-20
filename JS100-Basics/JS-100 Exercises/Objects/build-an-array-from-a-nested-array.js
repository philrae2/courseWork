/*Write code that does the reverse, starting from a nested array of pairs and building an object.*/


let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

//solution 1
console.log(Object.fromEntries(nestedArray));

//solution 2
let object = {}
nestedArray.forEach ((array) => {
 object[array[0]] = array[1];
})
console.log(object);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }