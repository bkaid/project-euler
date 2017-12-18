'use strict';
const prime = require('../../common/math/prime');

/**
 * Calculates first triangular number with a given divisor count
 * @param {Number} n divisor count
 * @returns {Number}
 */
exports.firstTriangularNumberWithDivisorCount = n => {
  let divisorCount = 0;
  let triangularNumber = 0;
  let i = 0;
  while (divisorCount < n) {
    triangularNumber = exports.nthTriangularNumber(++i);
    divisorCount = exports.factorCount(triangularNumber);
  }
  return triangularNumber;
};

/**
 * Calculates the nth triangular number in a series
 * Uses triangular number formula from:
 * https://en.wikipedia.org/wiki/Triangular_number
 * @param {Number} n
 * @returns {Number}
 */
exports.nthTriangularNumber = n => {
  return n * (n + 1) / 2;
};

/**
 * Calculates the numbers of divisors for a value using the technique from:
 * http://www.gmathacks.com/gmat-math/number-of-factors-of-a-large-integer.html
 * @param {Number} value
 * @returns {Number}
 */
exports.factorCount = value => {
  let primeFactorization = prime.primeFactorization(value);
  let factors = primeFactorization.reduce((previous, current) => previous * (current.exponent + 1), 1);
  return factors;
};
