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

let totalAges = agesArray.reduce((total, age) => total + age);

console.log(totalAges);