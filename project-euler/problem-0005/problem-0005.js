'use strict';
const prime = require('../../common/math/prime');

/**
 * Returns the smallest number that can be divided by each of the numbers from
 * 1 to n without any remaider
 * @param {Number} n Max divisor to check for
 * @returns {Number}
 */
exports.smallestMultiple = (n) => {
  // 1: get all prime numbers
  let products = [];
  for (let i = 2; i <= n; i++) {
    if (prime.isPrime(i)) {
      products.push(i);
    }
  }

  // 2: raise primes to its max power where result is less than n
  products.forEach((prime, i) => {
    let raised = prime;
    while (raised * prime <= n) {
      raised *= prime;
      products[i] = raised;
    }
  }); 

  // 3: multiply products
  let result = products.reduce((previous, current) => previous * current, 1);
  return result;
};
