/*Using the forEach method, write some code to output all vowels
from the strings in the arrays. Don't use a for or while loop. */

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = "aeiou";


let entries = Object.values(obj);
entries.forEach ((arr) => {
  arr.forEach((word) => {
    let vowelList = "";
    word.split("").forEach((char) => {
      if (vowels.includes(char)) {
        vowelList += char;
      }
    });
    console.log(`${word} contains the vowels ${vowelList}`);
  });
});