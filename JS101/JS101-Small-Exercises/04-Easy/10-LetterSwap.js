function swap (input) {
  let inputArray = input.split(" ");
  let newString = "";


  /*inputArray.forEach ((word) => {
    let wordCopy = word.split("");
    let wordSplit = wordCopy.slice();
    wordSplit[0] = wordCopy[wordCopy.length - 1];
    wordSplit[wordCopy.length - 1] = wordCopy[0];
    newString += wordSplit.join("") + " ";
  });*/

  inputArray.forEach ((word) => {
    let  wordcopy = "";
    if (word.length > 1) {
      wordcopy = word.slice(-1) + word.slice(1, -1) + word.slice(0,1);
    } else {
      wordcopy = word;
    }
    newString += wordcopy + " ";
  });

  return newString.substring(0, newString.length - 1);


}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"