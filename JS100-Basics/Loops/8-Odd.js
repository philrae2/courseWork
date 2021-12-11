//Write a while loop that logs all odd natural numbers between 1 and 40

for (let counter = 1; counter < 40; counter+=1) {
  if (counter % 2 != 0) {
    console.log(counter);
  }
}