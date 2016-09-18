'use strict';

/**
 * Returns the largest palindrome number made from the product of two N digit numbers
 * @param {Number} digits
 * @param {Number?} max Maximum palindrome value
 * @returns {Number}
 */
exports.largestPalindromeProduct = (digits, max) => {
  let maxDigits = Number('9'.repeat(digits));
  let a = maxDigits;
  let b = maxDigits;
  let result = 0;

  while (a > 0) {
    let product = a * b;
    if (product > result && (!max || product < max) && exports.isPalindrome(product)) {
      result = product;
    }

    b--;
    if (b === 0) {
      a--;
      b = maxDigits;
    }
  }

  return result;
};

/**
 * Returns true if a number reads the same both ways
 * @param {Number} value
 * @returns {Boolean}
 */
exports.isPalindrome = value => {
  return value.toString() === value.toString().split('').reverse().join('');
};
