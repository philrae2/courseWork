let number = 4936;

//use remainder function of 10 to get the ones place
let ones = number % 10;
console.log(`The ones place is: ${ones}.`);

number = (number - ones ) /10;
let tens = number % 10;
console.log(number)

console.log(`The tens place is: ${tens}.`);

number = (number - tens) / 10;
let hundreds = number % 10;
console.log(`The hundres place is ${hundreds}`);

number = (number - hundreds) / 10;
console.log(number)
let thousands = number;
console.log(`The thousands place is ${thousands}`);




