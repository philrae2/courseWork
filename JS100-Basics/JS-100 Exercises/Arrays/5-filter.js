/*Filter
Count the number of elements in scores that are 100 or above.*/

let scores = [96, 47, 113, 89, 100, 102];

let count = scores.filter ((number) => number >= 100);
console.log(count.length);