function stringy (len) {
  let char = "1";
  let string = "";
  for (let counter =1; counter <= len; counter++) {
    string += char;
   char = (char === "1") ? "0":"1";
  }
  console.log(string);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"