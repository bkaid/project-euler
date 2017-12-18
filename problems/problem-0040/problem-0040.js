'use strict';
require('../../common/math/digits');
const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
BigNumber.config({ POW_PRECISION: 1e+9 });

/**
 * Optimization to find where to start looking for champernowne digits
 * @param {Number} n Nth digit to get
 * @returns {{index: Number|BigNumber, value: Number|BigNumber, digits: Number}[]}
 */
exports.startingIndexes = (function () {
  let results = [{ index: 1, value: 1, digits: 1 }];
  let currentIndex = new BigNumber(0);
  for (let digits = 1; digits < 17; digits++) {
    let value = new BigNumber(10).toPower(digits);
    currentIndex = currentIndex.plus(value.minus(new BigNumber(10).toPower(digits - 1)).times(digits));
    if (currentIndex.gte(Number.MAX_SAFE_INTEGER)) {
      results.push({ index: currentIndex.plus(1), value: value, digits: digits + 1 });
    } else {
      results.push({ index: currentIndex.plus(1).toNumber(), value: value.toNumber(), digits: digits + 1 });
    }
  }
  return results;
})();

/**
 * Calculate the nth digit of a Champernowne constant
 * @param {Number|BigNumber} n Nth digit to get
 * @returns {Number}
 */
exports.champernowneDigit = n => {
  if (typeof n === 'number') {
    let start = exports.startingIndexes.reduce((previous, current) => n >= current.index ? current : previous);
    let index = start.index;
    let skipValues = Math.floor((n - index) / start.digits);
    let value = start.value + skipValues;
    index += skipValues * start.digits;
    return value.toDigits()[n - index];
  }

  let start = exports.startingIndexes.reduce((previous, current) => n.gte(current.index) ? current : previous);
  let index = new BigNumber(start.index);
  let skipValues = n.minus(index).dividedBy(start.digits).floor();
  let value = new BigNumber(start.value).plus(skipValues);
  index = index.plus(skipValues.times(start.digits));
  return Number(value.toString()[n.minus(index)]);
};
