function wordSizes (str) {
  if (str.length === 0) return {};

  str = cleanUpWord (str);
  console.log(str);
  let strArray = str.split(" ");
  let strCounter = {};

  strArray.forEach ((word) => {
    if (strCounter[word.length] === undefined) strCounter[word.length] = 0;
    strCounter[word.length] += 1;
  });

  return strCounter;

}

function cleanUpWord (str) {
  let alphaNumberic = "abcdefghijklmnopqrstxyuwvz ";
  let cleanWord = "";
  str = str.toLowerCase();
  for (let index = 0; index < str.length; index++) {
    if (alphaNumberic.includes(str[index])) {
      cleanWord += str[index];
    }
  }
  return cleanWord;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}