//Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let values = Object.values(munsters);
let maleAges = values.reduce ((sum, element) => {
  if (element.gender === "male") {
    sum += element.age;
  }
  return sum;
}, 0);

console.log(maleAges);