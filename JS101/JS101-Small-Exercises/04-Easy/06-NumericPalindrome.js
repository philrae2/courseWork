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


function isRealPalindrome (str) {
  str = cleanUpWord(str);
  let reverseWord = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reverseWord += str[index];
  }

  return reverseWord === str;

}

function isPalindromicNumber (number) {
  return isRealPalindrome(String(number));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true