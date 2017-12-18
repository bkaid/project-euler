'use strict';
require('../../common/arrays');
require('../../common/math/digits');
let prime = require('../../common/math/prime');

/**
 * Find the pandigital primes
 * @returns {Number[]}
 */
exports.pandigitalPrimes = function () {
  let primes = [];
  let pandigits = [1, 2, 3, 4, 5, 6, 7/* , 8, 9*/];
  while (pandigits.length > 1) {
    let hasPermutations = true;
    while (hasPermutations) {
      let value = pandigits.toNumber();
      if (prime.isPrime(value)) {
        primes.push(value);
      }
      hasPermutations = pandigits.nextPermutation();
    }
    pandigits.sort();
    pandigits.pop();
  }
  return primes;
};
