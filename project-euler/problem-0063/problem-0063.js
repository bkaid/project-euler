'use strict';
const BigNumber = require('bignumber.js');

/**
 * Finds n digit numbers that are also an nth power
 * Uses formula 10^(n-1) ≤ x^n < 10^n to get limits of x, 10^((n-1)/n) ≤ x < 10
 * @param {Number} n
 * @returns {BigNumber[]}
 */
exports.powerDigits = (n) => {
  let results = [];
  for (let x = Math.ceil(Math.pow(10, (n - 1) / n)); x < 10; x++) {
    results.push(new BigNumber(x).pow(n));
  }
  return results;
};

/**
 * Finds the count of all n-digit numbers that are also an nth power
 * @returns {Number[]}
 */
exports.powerDigitCount = () => {
  let count = 0;
  let n = 1;
  let nthValues = [];

  do {
    nthValues = exports.powerDigits(n);
    count += nthValues.length;
    n++;
  } while(nthValues.length);

  return count;
};
