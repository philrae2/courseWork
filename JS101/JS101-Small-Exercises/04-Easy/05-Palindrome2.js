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

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // falseconsole.log(