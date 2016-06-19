'use strict';
const prime = require('../../common/math/prime');

let knownPrimes = [];

/**
 * Returns the nth prime number
 * @param {Number} n
 * @returns {Number}
 */
exports.nthPrime = (n) => {
  let i = knownPrimes.length ? knownPrimes[knownPrimes.length - 1] : 0;

  while(knownPrimes.length < n) {
    i += i > 2 ? 2 : 1;
    if (prime.isPrime(i)) {
      knownPrimes.push(i);
    }
  }

  return knownPrimes[n - 1];
};
