'use strict';

/**
 * Remove digits from the left side of a number
 * @param {Number} n
 * @param {Number} digits
 * @returns {Number}
 */
exports.truncateLeft = (n, digits) => {
  return n % Math.pow(10, exports.digitLength(n) - digits);
};

/**
 * Remove digits from the right side of a number
 * @param {Number} n
 * @param {Number} digits
 * @returns {Number}
 */
exports.truncateRight = (n, digits) => {
  return parseInt(n / Math.pow(10, digits));
};

/**
 * Calculates the number of digits in a number
 * @param {Number} n
 * @returns {Number}
 */
exports.digitLength = n => {
  n = Math.abs(n);
  return n > 1 ? Math.ceil(Math.log10(n)) : 1;
};

/**
 * Convert a number to an array of digits
 * @returns {Number[]}
 */
Number.prototype.toDigits = Number.prototype.toDigits || function () {
  let number = this;
  let digits = [];
  while (number > 0) {
    digits[digits.length] = number % 10;
    number = parseInt(number / 10);
  }
  return digits.reverse();
};
