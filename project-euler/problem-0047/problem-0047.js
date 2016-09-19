'use strict';
const prime = require('../../common/math/prime');

/**
 * Find the first n consecutive integers to have n distinct prime factors.
 * @param {Number} max
 * @param {Number} limit
 * @param {Number} consecutives Number of consecutive numbers to find
 * @param {Number} factors Number of distinct prime factors to find
 * @returns {Number[]}
 */
exports.consecutiveDistinctPrimeFactors = (max, limit, consecutives, factors) => {
  let results = [];
  let current = 0;
  let consecutive = 0;
  while (current < max + consecutives - 1 && (results.length < limit || !limit)) {
    current++;
    // get number of prime factors for current value
    let factor = exports.distinctPrimeFactors(current);

    // reset or increase consecutive counter based on prime factors found
    consecutive = factor === factors ? consecutive + 1 : 0;

    if (consecutive >= consecutives) {
      results.push(current - consecutives + 1);
    }
  }

  return results;
};

/**
 * Get the number of distinct prime factors
 * @param {Number} n Number to check
 * @returns {Number}
 */
exports.distinctPrimeFactors = n => {
  let factorization = prime.primeFactorization(n);
  let distinct = factorization.filter(value => prime.isPrime(value.base));
  return distinct.length;
};
