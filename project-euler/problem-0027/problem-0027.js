'use strict';
const prime = require('../../common/math/prime');

/**
 * Finds the the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.
 * n² + an + b, where |a| < max and |b| < max
 * @param {Number} max
 * @returns {{a: number, b: number, n: number}}
 */
exports.quadraticPrimes = (max) => {
  let result = { a: null, b: null, n: 0 };
  for (let a = -max; a < max; a++) {
    for (let b = -max; b < max; b++) {
      let n = 0;
      while (prime.isPrime(Math.pow(n, 2) + (a * n) + b)) {
        n++;
      }
      if (n > result.n) {
        result.a = a;
        result.b = b;
        result.n = n;
      }
    }
  }
  return result;
};
