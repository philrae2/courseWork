function cleanUpWord (str) {
  let alphaNumberic = "abcdefghijklmnopqrstxywvz1234567890";
  let cleanWord = "";
  str = str.toLowerCase();
  for (let index = 0; index < str.length; index++) {
    if (alphaNumberic.includes(str[index])) {
      cleanWord += str[index];
    }
  }
  return cleanWord;
}


function isPalindrome (str) {
  let str = cleanUpWord(str);
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