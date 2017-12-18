'use strict';
const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
BigNumber.config({ POW_PRECISION: 1e+9 });

/**
 * Calculates the sum of of digits of a number
 * @param {Number} base
 * @param {Number} power
 * @returns {Number}
 */
exports.powerDigitSum = (base, power) => {
  let number = new BigNumber(base).toPower(power);
  return number.toString().split('').reduce((previous, current) => previous + Number(current), 0);
};
