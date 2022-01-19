/* The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.

INPUTS: Time based on minute based format
OUTPUT: Time based on 24 hour format

RULES
- If the number of minutes is negative subtract from 24:00
- If the number is positive add to 00:00
- Do not use the date functions
- The function should work with any integer input

LOGIC
- Create an hour variable
- Create a minutes variable
- create a helper function to convert minutes to 24 hour time
- Check if input is negative, if it is convert to positive
- If posivitive use the help function to conver to 24 hour time
 
 HELPER FUNCTION
 - Divide minutes by 60 to get the hours
 - Multiply the fractional part to get the minutes

*/

function timeOfDay (minutes) {
  let minute = minutes;
  if (minute < 0) {
    minute = 1440 + minute;
  } 

  let hours = minute / 60;
  
 minute = (hours - Math.floor(hours)) * 60;
  console.log(`${hours.toFloo}:${minutes}`);
}



console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
/*console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");*/