/* Add the ages in the object */

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArray = Object.values(ages);

let minAge = agesArray.reduce((youngest, age) => {
  if (age < youngest) {
    youngest = age;
  }
  return youngest;
});

console.log(minAge);