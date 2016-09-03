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
  return Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1;
};

/**
 * Rotate digits of a number
 * @returns {Number}
 */
Number.prototype.rotate = Number.prototype.rotate || function () {
  return parseInt(this / 10 + (this % 10) * Math.pow(10, exports.digitLength(this) - 1));
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


/**
 * Convert an array of digits to a number
 * @returns {Number}
 */
Array.prototype.toNumber = Array.prototype.toNumber || function () {
  let result;

  this.forEach(digit => {
    let power = 10;
    while (digit >= power) {
      power *= 10;
    }
    result = (result || 0) * power + digit;
  });

  return result;
};
