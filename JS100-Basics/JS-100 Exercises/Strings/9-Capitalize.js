//Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

function capitalize (string) {
  let array = string.split(" ");
  let capitalize = array.map ((string) => string[0].toUpperCase()+string.slice(1));
  console.log(capitalize.join(" "));
}

capitalize("launch school tech & talk");