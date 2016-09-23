'use strict';
const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
BigNumber.config({ POW_PRECISION: 1e+9 });

/**
 * Returns the factorial of a number, n!
 * 5!=5 x 4 x 3 x 2 x 1 = 120
 * @param {Number} n
 * @returns {BigNumber}
 */
exports.factorial = n => {
  return n === 0 ? new BigNumber(1) : exports.factorial(n - 1).times(n);
};
