'use strict';
const prime  = require('../../common/math/prime');

/**
 * Returns the largest prime factor for a given number
 * @param {Number} value
 * @returns {Number}
 */
exports.largestPrimeFactor = (value) => {
  let factorization = prime.primeFactorization(value);
  return factorization[factorization.length - 1].base;
};
