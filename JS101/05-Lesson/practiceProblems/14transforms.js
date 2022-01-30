/*
Given the following data structure write some code to return an
array containing the colors of the fruits and the sizes of the
vegetables. The sizes should be uppercase, and the colors should be capitalized.

[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

function capitalize (word) {
  return word[0].toUpperCase() + word.slice(1);
}
let transform = Object.values(obj)
  .map((array) => {
    if (array.type === "fruit") {
      return array.colors.map(entry => capitalize(entry));
    } else {
      return array.size.toUpperCase();
    }
  });

console.log(transform);