'use strict';
const prime = require('../../common/math/prime');

let knownPrimeSums = [];
let maxPrimeCheck = 0;

/**
 * Returns the sum of all primes up to n
 * @param {Number} n
 * @returns {Number}
 */
exports.sumOfPrimes = n => {
  // ensure all primes below n have been found
  for (; maxPrimeCheck <= n; maxPrimeCheck++) {
    if (prime.isPrime(maxPrimeCheck)) {
      let sum = maxPrimeCheck + (knownPrimeSums.length ? knownPrimeSums[knownPrimeSums.length - 1].sum : 0);
      knownPrimeSums.push({ prime: maxPrimeCheck, sum: sum });
    }
  }

  // get sum of highest prime below n
  for (let i = knownPrimeSums.length - 1; i >= 0; i--) {
    if (knownPrimeSums[i].prime <= n) {
      return knownPrimeSums[i].sum;
    }
  }
};
