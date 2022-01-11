function wordSizes (str) {
  let strArray = str.split(" ");
  let strCounter = {};

  strArray.forEach ((word) => {
    if (strCounter[word.length] === undefined) strCounter[word.length] = 0;
    strCounter[word.length] += 1;
  });

  console.log(strCounter);

}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}