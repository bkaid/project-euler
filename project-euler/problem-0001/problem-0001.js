'use strict';
const BigNumber = require('bignumber.js');

/**
 * Returns the sum of all multiples of 3 and 5 below a given input
 * @param {Number} below
 * @returns {BigNumber}
 */
exports.sumMultiplesOf3And5 = below => {
  let max = below - 1;
  let three = exports.sumNumbersDivisibleBy(3, max);
  let five = exports.sumNumbersDivisibleBy(5, max);
  let both = exports.sumNumbersDivisibleBy(3 * 5, max);
  let result = three.plus(five).minus(both);
  return result;
};

/**
 * Returns the sum of all numbers up to a max that are divisible by a given input
 * @param {Number} divisibleBy
 * @param {Number} max
 * @returns {BigNumber}
 */
exports.sumNumbersDivisibleBy = (divisibleBy, max) => {
  let countNumbersDivisibleByMax = Math.floor(max / divisibleBy);
  let sumIntegersFrom1ToCount = exports.sumIntegersFrom1To(countNumbersDivisibleByMax);
  return sumIntegersFrom1ToCount.times(divisibleBy);
};

/**
 * Returns the sum of all numbers from 1 to n
 * @param {Number} n
 * @returns {BigNumber}
 */
exports.sumIntegersFrom1To = n => {
  let sum = new BigNumber(n).times(n + 1).dividedBy(2);
  return sum;
};
