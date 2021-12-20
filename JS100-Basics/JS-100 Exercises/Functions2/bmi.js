/*Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

Note that formula requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).

Return the result as a string rounded to two decimals. For example:

*/



function calculateBMI (height, weight) {
  height = height / 100;
  let bmi = weight / height**2;
  console.log(bmi.toFixed(2));
}




calculateBMI(180, 80); // "24.69"