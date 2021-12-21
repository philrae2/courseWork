/*Even Numbers
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.*/

for (let counter = 1; counter <= 99; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}