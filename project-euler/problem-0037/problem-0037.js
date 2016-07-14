'use strict';
const prime = require('../../common/math/prime');
const digits = require('../../common/math/digits');

/**
 * Finds the largest number d where d < max for which 1/d contains the longest recurring cycle in its decimal fraction part.
 * @param {Number} max
 * @returns {Number}
 */
exports.truncatablePrimeSum = () => {
  let sum = 0;
  let truncatablePrimeCount = 0;
  let i = 11;
  while (truncatablePrimeCount < 11) {
    if (prime.isPrime(i)) {
      let isTruncatablePrime = true;
      let digitLength = digits.digitLength(i);
      for(let j = 1; j < digitLength; j++) {
        if (!prime.isPrime(digits.truncateLeft(i, j)) || !prime.isPrime(digits.truncateRight(i, j))) {
          isTruncatablePrime = false;
          break;
        }
      }
      if (isTruncatablePrime) {
        truncatablePrimeCount++;
        sum += i;
      }
    }
    i++;
  }

  return sum;
};