'use strict';
require('../../common/math/digits');

/**
 * Find the sum of all the numbers that can be written as the sum of nth powers of their digits.
 * @param {Number} power
 * @returns {Number}
 */
exports.digitNthPowerSum = power => {
  let result = 0;

  // calculate upper limit
  let limit = Math.pow(9, power) * power;

  // cache digits raised to the power
  let digitPowers = [...Array(10).keys()].map(key => Math.pow(key, power));

  // loop through all numbers to the limit
  let i = 9;
  while (i < limit) {
    i++;

    // get digits, raise them to power, and sum
    let digits = i.toDigits();
    let sum = digits.reduce((previous, digit) => previous + digitPowers[digit], 0);
    if (i === sum) {
      result += sum;
    }
  }

  return result;
};
