let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit (array) {
  
  let entries = Object.entries(array);
  let selection = Object.fromEntries(entries.filter (([_, value]) => value === "Fruit"));
  console.log(selection);
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }