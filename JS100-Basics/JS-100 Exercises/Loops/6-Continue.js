/*Take a moment to read the MDN documentation on the continue statement.

Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.*/

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (counter = 0; counter < cities.length; counter +=1) {
  if (cities[counter] === null) {
    continue;
  }
  console.log(cities[counter]);
}