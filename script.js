///////////////////////////////////////////1 String Transformations
/////////////////////////////////////

/**
 * @param {string} str a string
 * @returns {string} a string with the first letter capitalized
 */

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param {string} str a string
 * @returns {string} the reverse of a string
 */

function reverse(str) {
  return str.split("").reverse().join("");
}

/**
 * @param {string} str a string
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */

function isPalindrome(str) {
  return str === reverse(str);
}

/**
 * @param {string} str a string
 * @returns {number} the number of word in a string
 */

function wordCount(str) {
  return str.split(" ").length;
}

//////////////////////////////////////////////2. Array transformation
/////////////////////////////////////

/**
 * @param {Array<number>} arr An array of numbers
 * @returns {Array<number>} the double of all the numbers in the array
 */

function double(arr) {
  let doubledNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      // Ensures each element is a number
      doubledNumbers.push(arr[i] * 2);
    }
  }
  return doubledNumbers;
}

/**
 * @param {Array<number>} arr An array of type number
 * @returns {Array<number>} A filtered array with even number only
 */

function filterEven(arr) {
  return arr.filter((value) => typeof value === "number" && value % 2 === 0);
}

/**
 * @param {Array} arr An array
 * @returns {number} The sum of the numbers in the array
 */

function sum(arr) {
  return arr.reduce(
    (sum, value) => sum + (typeof value === "number" ? value : 0),
    0
  );
}

/**
 * @param {Array<number>} arr An array of numbers
 * @returns {number} The average of the numbers in the array
 */
function average(arr) {
  return arr.length ? sum(arr) / arr.length : 0;
}

/////////////////////////////////////////////3. Object Transformation
//////////////////////////////////////////////
/**
 * @param {Object} arr An object
 * @returns {string} a string of first name and last name
 */
function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

/**
 * Checks if a person is an adult (18 years or older).
 * @param {Object} person - The person object with an age property.
 * @returns {boolean} True if the person is 18 or older, false otherwise.
 */

function isAdult(person) {
  return person.age >= 18;
}

/**
 * Filters an array of person objects to include only those who are at least minAge years old.
 * @param {Object[]} people - An array of person objects.
 * @param {number} minAge - The minimum age for filtering.
 * @returns {Object[]} An array of person objects that meet the age requirement.
 */

function filterByAge(people, minAge) {
  return people.filter((person) => person.age >= minAge);
}

///////////////////////// Function Composition
////////////
const compose = (...fns) => {
  return (initialValue) => {
    return fns.reduceRight((acc, fn) => fn(acc), initialValue);
  };
};

// Example Composed Functions

// Capitalize and reverse a string
const capitalizeAndReverseString = compose(reverse, capitalize);

// Reverse a string and then capitalize it
const reverseAndCapitalize = compose(capitalize, reverse);

// Double all even numbers in an array
const doubleEvenNumbers = compose(double, filterEven);

console.log(doubleEvenNumbers([1, 2, 3, 4, 6, 7, 8]));
