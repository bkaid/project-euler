'use strict';
const factorial = require('../../common/math/factorial').factorial;

/**
 * Find the sum of the digits in the factorial
 * @param {Number} n
 * @returns {Number}
 */
exports.factorialDigitSum = n => {
  return factorial(n).toString().split('').reduce((previous, current) => previous + Number(current), 0);
};
