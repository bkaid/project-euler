'use strict';
const divisors = require('../../common/math/divisors');

/**
 * Calculates the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 * A number n is called abundant if the sum of its divisors exceeds n 
 * @returns {Number}
 */
exports.nonAbundantSums = () => {
  const limit = 28123;

  let abundantNumbers = [];
  for(let i = 0; i <= limit; i++) {
    if (divisors.properDivisorSum(i) > i) {
      abundantNumbers.push(i);
    }
  }

  let sumOfAbubdantNumbers = new Set();
  for(let i = 0; i < abundantNumbers.length; i++) {
    for(let j = 0; j < abundantNumbers.length; j++) {
      let sum = abundantNumbers[i] + abundantNumbers[j];
      if (sum > limit) {
        break;
      }
      sumOfAbubdantNumbers.add(sum);
    }  
  }

  let result = 0;
  for(let i = 0; i <= limit; i++) {
    if (!sumOfAbubdantNumbers.has(i)) {
      result += i;
    }
  }

  return result;
};
