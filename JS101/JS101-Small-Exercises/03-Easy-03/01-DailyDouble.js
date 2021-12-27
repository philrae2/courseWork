function crunch (string) {
  let stringArray = string.split("");
  let reduction = stringArray.reduce((accumulator, char) => {
    if (char !== accumulator[accumulator.length -1]) {
      accumulator.push (char);
    }
  return accumulator;
  
  }, [])
  return reduction.join("");
}




crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""