

function isPalindrome (str) {
  let reverseWord = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reverseWord += str[index];
  }

  return reverseWord === str;

}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true