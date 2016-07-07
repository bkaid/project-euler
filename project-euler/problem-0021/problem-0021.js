'use strict';
const divisors = require('../../common/math/divisors');

exports.properDivisorCache = [];

/**
 * Calculate the sum of all the amicable numbers under n
 * @param {Number} n
 * @returns {Number}
 */
exports.amicableNumberSum = n => {
  for(let i = 0; i < n; i++) {
    if (!exports.properDivisorCache[i]) {
      exports.properDivisorCache[i] = divisors.properDivisorSum(i);
    }
  }

  let amicableNumberSum = 0;
  for(let i = 1; i < n; i++) {
    let properDivisorSum = exports.properDivisorCache[i];
    let properDivisorPair = exports.properDivisorCache[properDivisorSum];

    if (!properDivisorPair) {
      properDivisorPair = exports.properDivisorCache[properDivisorSum] = divisors.properDivisorSum(properDivisorSum);
    }

    if (i === properDivisorPair && i !== properDivisorSum) {
      amicableNumberSum += i;
    } 
  }

  return amicableNumberSum;
};
