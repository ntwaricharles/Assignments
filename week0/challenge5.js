// String Transformations

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  return str === reverse(str);
}

function wordCount(str) {
  return str.split(" ").length;
}

// Example usage:

const str = "hello world";
console.log(capitalize(str)); //we expect to get  "Hello world"
console.log(reverse(str)); // "dlrow olleh" is the expected result
console.log(isPalindrome(str)); // we expect to get false
console.log(wordCount(str)); // we expect to get 2

// Array Transformations

function double(arr) {
  return arr.map(x => x * 2);
}

function filterEven(arr) {
  return arr.filter(x => x % 2 !== 0);
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function average(arr) {
  return sum(arr) / arr.length;
}

// Example usage:

const arr = [1, 2, 3, 4, 5];
console.log(double(arr)); // we expect to get [2, 4, 6, 8, 10]
console.log(filterEven(arr)); // results should be [1, 3, 5]
console.log(sum(arr)); // we have to get 15
console.log(average(arr)); // we have to get 3

// Object Transformations

function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function isAdult(person) {
  return person.age >= 18;
}

function filterByAge(people, minAge) {
  return people.filter(person => person.age >= minAge);
}

// Function Composition

function compose(...fns) {
  return (...args) => fns.reduce((composed, f) => f(composed), args[0]);
}

const reverseCapitalize = compose(capitalize, reverse);
console.log(reverseCapitalize("hello world")); // "Dlrow olleH"
