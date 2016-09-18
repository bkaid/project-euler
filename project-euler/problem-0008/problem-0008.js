'use strict';

/**
 * Returns the largest product of N adjacent digits
 * @param {String} input
 * @param {Number} n
 * @returns {Number}
 */
exports.largestProduct = (input, n) => {
  let max = 0;
  let values = input.split('').map(Number);
  for (let i = 0; i <= values.length - n; i++) {
    let product = values.slice(i, i + n).reduce((previous, current) => previous * current, 1);
    max = Math.max(product, max);
  }
  return max;
};
