
for (let row=1; row <=5; row++) {
  let string = "";
  
  for ( let counter = 1; counter <= 6 - row ; counter++) {
    string += "#";
  }
  console.log(string);
}