/*As seen in the previous exercise, the time of day can be represented
as the number of minutes before or after midnight.
If the number of minutes is positive, the time is after midnight.
If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return
the number of minutes before and after midnight, respectively.
Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

INPUTS: A string with 24hour format
OUTPUT: A number

RULES:
- Time is 24 hour format.
- Return minutes before and after midnight

TEST CASES: Only format is 24 hour format

LOGIC:
1. Create a function for after midnight
1a Convert the 24 hour format into number of minutes
1b Return the the the total minutes

2. Create a function before midnight
2a Convert the 24 hour format into number of minutes
2b Subtract the minutes from 1440


*/

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

function calcTotalMinutes (time) {
  let hours = Number(time.substring(0,2));
  let minutes = Number(time.substring(3));

  return (hours * MINUTES_PER_HOUR) + minutes;
}

function afterMidnight (time) {

  const totalMinutes = calcTotalMinutes(time);

  if (totalMinutes === MINUTES_PER_DAY) {
    return 0;
  }

  return totalMinutes;
}

function beforeMidnight (time) {

  const totalMinutes = calcTotalMinutes(time);


  if (totalMinutes === MINUTES_PER_DAY || totalMinutes === 0) {
    return 0;
  }

  return MINUTES_PER_DAY - totalMinutes;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);