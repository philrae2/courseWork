const READLINE = require("readline-sync");

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidNumber (number) {
  return number.trimStart() === ""
  || Number.isNaN(Number(number));
}

function getLoanAmount() {
  prompt("What is your loan amount. Please enter without the use of $ (e.g., if the amount is $30,000 enter 30000)");
  let loanAmount = READLINE.question();

  while (invalidNumber(loanAmount) || loanAmount < 0)  {
    prompt("Please enter a valid loan amount");
    loanAmount = READLINE.question();
  }

  return loanAmount;
}

function getloanDuration() {
  prompt("Please enter the loan duration in years? (e.g., if 2 years and 6 months, enter 2)");
  let loanDurationYears = READLINE.question();

  while (invalidNumber(loanDurationYears) || loanDurationYears < 1) {
    prompt("Please enter a valid amount of time for the loan duration.");
    loanDurationYears = READLINE.question();
  }

  prompt("Please enter reamainging loan duration in months? (e.g., if 2 years and 6 months, enter 6)");
  let loanDurationMonths = READLINE.question();

  while (invalidNumber(loanDurationMonths)
    || loanDurationMonths < 0
    || !Number.isInteger(+loanDurationMonths)) {

    prompt("Please enter a valid amount of time for the reamining months loan duration.");
    loanDurationMonths = READLINE.question();
  }

  let loanDuration = (loanDurationYears * 12) + loanDurationMonths;
  return loanDuration;
}

function getAnnualPercentageRate() {
  prompt("Please enter your annual percentage rate without the % sign. (e.g., for %6.25 enter 6.25)");
  let annualPercentageRate = READLINE.question();

  while (invalidNumber(annualPercentageRate) || annualPercentageRate < 0) {
    prompt("Please enter a valid annual percentage rate.");
    annualPercentageRate = READLINE.question();
  }

  return annualPercentageRate;
}

// eslint-disable-next-line max-len
function calculateMonthlyPayment (loanAmount, loanDuration, annualPercentageRate) {
  let monthlyInterestRate = (+annualPercentageRate / 12) / 100;
  let monthlyPayments = +loanAmount * (monthlyInterestRate
    / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
  return monthlyPayments;

}

function getRepeatResponse() {
  prompt("Would you like to calculate another montly payment? Please enter yes or no");
  let response = READLINE.question().toLocaleLowerCase();

  while (response !== "yes" || response !== "no") {
    prompt("Please enter yes or no");
    response = READLINE.question().toLocaleLowerCase();
  }

}

prompt("Welcome to Loan Calculator");


while (true) {
  const loanAmount = getLoanAmount();
  const loanDurationMonths = getloanDuration();
  const annualPercentageRate = getAnnualPercentageRate();
  // eslint-disable-next-line max-len
  const monthlyPayments = calculateMonthlyPayment (loanAmount, loanDurationMonths, annualPercentageRate);

  prompt(`Your monthly payments are: ${monthlyPayments.toFixed(2)} for a total of ${loanDurationMonths} months.`);

  prompt("-----------------------------------------------------------------------");
  const response = getRepeatResponse();
  if (response === "yes") break;
  console.clear();

}
