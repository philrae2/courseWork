let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function checkLastChar (str) {
  if (str[str.length - 1] === "!") {
    console.log("true");
  } else {
    console.log("false");
  }
}

checkLastChar(str1);
checkLastChar(str2);