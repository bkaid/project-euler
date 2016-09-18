'use strict';
const BigNumber = require('bignumber.js');

/**
 * Calculates the sum of very large numbers
 * @param {Number[]} numbers
 * @returns {BigNumber}
 */
exports.largeSum = numbers => {
  return numbers.reduce((previous, current) => previous.plus(current), new BigNumber(0));
};
