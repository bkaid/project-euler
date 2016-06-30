'use strict';
const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
BigNumber.config({ POW_PRECISION: 1e+9 });

let nDigitFibonacciIndexCache = [];

/**
 * Finds the the index of the first term in the Fibonacci sequence to contain n digits
 * @param {Number} n
 * @returns {Number}
 */
exports.nDigitFibonacciIndex = n => {
  if (nDigitFibonacciIndexCache[n]) {
    return nDigitFibonacciIndexCache[n];
  }

  let min = new BigNumber(10).pow(n - 1);
  let previous = new BigNumber(0);
  let current = new BigNumber(1);
  let index = 1;

  while (current.lessThan(min)) {
    let temp = previous;
    previous = current;
    current = temp.plus(previous);
    index++;

    let length = current.toString().length;
    nDigitFibonacciIndexCache[length] = nDigitFibonacciIndexCache[length] || index; 
  }

  return index;
};
