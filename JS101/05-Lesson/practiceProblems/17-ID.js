/*Each UUID consists of 32 hexadecimal characters
 (the digits 0-9 and the letters a-f) represented as a string.
 The value is typically broken into 5 sections in
  an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
  */

function randomize () {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  return characters[Math.floor(Math.random() * characters.length)];
}

let strings = [8, 4, 4, 4, 12];
let UUID = "";

strings.forEach (repetition => {
  for (let count = 0; count < repetition; count++ ) {
    UUID += randomize();
  }
  UUID += "-";
});

console.log(UUID.slice(0, -2));
