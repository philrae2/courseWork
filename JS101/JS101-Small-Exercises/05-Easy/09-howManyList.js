/* Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV"). 

INPUTS
- An array of strings car

OUTPUT
- A string output the car type with the amount of occurrence

RULES
- Input type is case sensitive

LOGIC
- Create an an array that will hold the car type as keys and their occurrences as the number of occurrences
- Create an inner array holder
- Iterate through the input array
  - Check if the element is already in the outer array
    - if already exists add one to the occurrence in the existing inner array
    - if doesn't exist reassign the values of the inner array and add 1 to the  occurrence 
      - push the inner array to the outer array
- Log to the console the results through iterating through the array

*/

function countOccurrences (cars) {
  let vehicleArray = [];
  let individualArray = [];
  cars.forEach ((car) => {
    if  (!vehicleArray.some(([key,_]) => key === car)) {
      individualArray = [car, 1];
      vehicleArray.push(individualArray);
    } else {
      let index = vehicleArray.findIndex(([key, _])=> key === car);
      vehicleArray[index][1] += 1; 
      }
  })
  vehicleArray.forEach (([car, value]) => {
    console.log(`${car} => ${value}`);
  })
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2 */