//Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

let string = "Captain Ruby";

let array = string.split(" ");
array[1] = "Javascript";
string = array.join (" ");
console.log(string);

//solution 2

let str ="Captain Ruby";
let newString = str.replace("Ruby", "Javascript");
console.log(newString);