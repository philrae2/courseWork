/*Calculate Cat Age
Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.
For example:*/

function catAge (years) {
  if (years === 0) {
    console.log(0);
  } else if (years === 1) {
    console.log(15);
  } else if (years === 2) {
    console.log(24);
  } else {
    console.log(24 + 4*(years-2));
  }
}



catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32