'use strict';
const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
BigNumber.config({ POW_PRECISION: 1e+9 });

/**
 * Finds the the index of the first term in the Fibonacci sequence to contain n digits
 * @param {Number} n
 * @returns {BigNumber}
 */
exports.selfPowers = n => {
  let current = new BigNumber(0);

  for(let i = 1; i <= n; i++) {
    current = current.plus(new BigNumber(i).pow(i));
  }

  return current;
};
