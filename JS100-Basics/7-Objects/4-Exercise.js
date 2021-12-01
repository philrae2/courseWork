/*Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.*/



let obj = {
  b: 2,
  a: 1,
  c: 3,
};

/*Solution 1
let arrayKeys = [];
let keys = Object.keys(obj);
keys.forEach ((element) => arrayKeys.push(element.toUpperCase()));
console.log(arrayKeys);*/

//Solution 2
let arrayKeys = [];
for (let key in obj) {
  arrayKeys.push(key.toUpperCase());
}
console.log(arrayKeys);

