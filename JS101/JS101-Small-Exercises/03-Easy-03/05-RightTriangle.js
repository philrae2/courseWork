function triangle (rows) {
  let counter = 1;
  while (counter <= rows) {
    console.log(`${" ".repeat(rows - counter)}${"x".repeat(counter)}`);
    counter++;
  } 
}

triangle(5);
triangle(9);