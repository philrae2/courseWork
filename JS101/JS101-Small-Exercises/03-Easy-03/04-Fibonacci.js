function findFibonacciIndexByLength (length) {
  let num1 = 1n;
  let num2 = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = num1 + num2;
    num1 = num2;
    num2 = fibonacci;
    count += 1n;
  } while (String(fibonacci).length < length);
  console.log(count);
  return count;
}tou



findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;