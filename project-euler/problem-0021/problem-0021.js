'use strict';
const prime = require('../../common/math/prime');

exports.properDivisorCache = [];

/**
 * Calculate the sum of all the amicable numbers under n
 * @param {Number} n
 * @returns {Number}
 */
exports.amicableNumberSum = n => {
  for(let i = 0; i < n; i++) {
    if (!exports.properDivisorCache[i]) {
      exports.properDivisorCache[i] = exports.properDivisorSum(i);
    }
  }

  let amicableNumberSum = 0;
  for(let i = 1; i < n; i++) {
    let properDivisorSum = exports.properDivisorCache[i];
    let properDivisorPair = exports.properDivisorCache[properDivisorSum];

    if (!properDivisorPair) {
      properDivisorPair = exports.properDivisorCache[properDivisorSum] = exports.properDivisorSum(properDivisorSum);
    }

    if (i === properDivisorPair && i !== properDivisorSum) {
      amicableNumberSum += i;
    } 
  }

  return amicableNumberSum;
};

/**
 * Calculate the sum of all proper divisors of n
 * Based on formula from: http://math.stackexchange.com/a/22723
 * divisor sum: (1+2+2^2+2^3)*(1+3)*(1+5) = 15*4*6 = 360
 * subtract n to get proper divisor sum
 * @param {Number} n
 * @returns {Number}
 */
exports.properDivisorSum = n => {
  if (n < 2) {
    return 0;
  }

  let factors = prime.primeFactorization(n);
  let result = factors.reduce((previous, current) => {
    let factorSum = 1;
    for(let i = 1; i <= current.exponent; i++) {
      factorSum += Math.pow(current.base, i);
    }
    return previous * factorSum;
  }, 1);

  return result - n;
};
