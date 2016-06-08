'use strict';
const BigNumber = require('bignumber.js');

/**
 * Returns the sum of even Fibonacci terms below a given max term
 * @param {BigNumber} max
 * @returns {BigNumber}
 */
exports.sumEvenFibonacciTerms = (max) => {
  let sum = new BigNumber(0);
  let previous = new BigNumber(0);
  let current = new BigNumber(1);
  let index = 1;

  while (current.lessThan(max)) {
    // every third fibonacci number is even. use this for performance instead
    // of checking each result to see if its even.
    if (index % 3 === 0) {
      sum = sum.plus(current);
    }

    let temp = previous;
    previous = current;
    current = temp.plus(previous);
    index++;
  }

  return sum;
};
