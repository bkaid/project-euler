'use strict';
const toFactorial = require('../../common/math/factorial').factorial;
const BigNumber = require('bignumber.js');

/**
 * Finds the Nth lexicographic permutation of an array
 * Uses algorithm described here, based on properties of factorial base numbers:
 * http://irenes-coding-blog.blogspot.com/2012/07/factorial-base-numbers-and-permutations.html
 * @param {Object[]} array
 * @param {Number} n The Nth permutation to select, where first permutation is 1 (sorted ascending)
 * @returns {Object[]} Array sorted in Nth permutation order
 */
exports.nthLexicographicPermutation = (array, n) => {
  // array must be sorted to correctly determine the lexicographic permutation
  array.sort();

  // determine the 0-based factoradic index for the permutation requested.
  let factoradic = exports.toFactoradic(n - 1);

  for (let i = 0; i < factoradic.length; i++) {
    if (factoradic[i]) {
      // remove the value at factoradic index, skipping over previously checked
      // postions, and offsetting difference in widths of array vs factoradic
      // digits to handle trailing zeroes not present on factoradic number
      let offset = i + array.length - factoradic.length;
      let value = array.splice(factoradic[i] + offset, 1)[0];
      // move the value to the front of the array, offset by previously checked postions
      array.splice(offset, 0, value);
    }
  }

  return array;
};

/**
 * Converts a decimal base 10 number to a factoradic number
 * See: https://en.wikipedia.org/wiki/Factorial_number_system
 * @param {Number} decimal
 * @returns {Number[]}
 */
exports.toFactoradic = decimal => {
  // determine the max factorial needed to represent the number.
  // the number of digits of the factoradic will be the max factorial + 1
  let factorDecimal = 1;
  let maxFactorNeeded = 0;
  while (factorDecimal * (maxFactorNeeded + 1) <= decimal) {
    maxFactorNeeded++;
    factorDecimal *= maxFactorNeeded;
  }

  let input = new BigNumber(decimal);
  let factoradic = [];
  for (let i = maxFactorNeeded; i >= 0; i--) {
    // determine the base value for the position by calculating how many times
    // the current value is divisible by the current factorial
    let factorial = toFactorial(i);
    let factorialCount = input.div(factorial).floor();

    // reduce the value to the remainder of what couldnt be represented
    // by the current factorial
    input = input.mod(factorial);

    // add current position base to result
    factoradic.push(factorialCount.toNumber());
  }

  return factoradic;
};
