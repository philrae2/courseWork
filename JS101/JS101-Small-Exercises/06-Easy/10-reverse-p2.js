/*
Write a function that takes a string argument containing one or
more words and returns a new string containing the words from the
string argument. All five-or-more letter words should have their
letters in reverse order. The string argument will consist of only
letters and spaces. Words will be separated by a single space.

INPUT:
- A string of word(s)

OUTPUT
- A string with the character of words greater than 5 lengths reversed

RULES
- Only reverse characters if the word is greater than 5 chars

LOGIC
- Split the word into arrays
- Iterate each word
  - Check if the word is greater than 5 in length
  - If > 5 reverse the word
  - If < 5 leave as is
  Return the result back into the array

*/

function reverseWord (word) {
  return word.split("").reverse().join("");
}

function reverseWords (string) {
  return string.split(" ")
    .map(word => {
      if (word.length > 5) {
        //console.log(`This is the word ${word}`);
        return reverseWord(word);
      }
      return word;
    })
    .join(" ");
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"