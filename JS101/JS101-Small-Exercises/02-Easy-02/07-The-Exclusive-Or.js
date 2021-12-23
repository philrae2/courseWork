/*Exclusive Or
The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.*/


function xor (ele1, ele2) {
  let counter = 0;
  if (ele1) {
    counter += 1;
  } else if (ele2) {
    counter += 1;
  }
  if (counter === 1) {
    return true;
  } else {
    return false;
  }
}

/*preferred solution
function xor (element1, element2) {
  if ((element1 && !element2) || (element2 && !element1)) {
    return true;
  } else {
    return false;
  }
}*/

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);