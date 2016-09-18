'use strict';
const BigNumber = require('bignumber.js');
BigNumber.config({EXPONENTIAL_AT: 1e+9});
BigNumber.config({POW_PRECISION: 1e+9});

/**
 * Calculates the count of the number of possible lattice paths through a grid
 * Uses the factorial formula for the n + m take n binomial coefficient: (n + m)! / (n! x m!)
 * Common factorials cancelled out in formula to reduce the potentially large numbers being multiplied
 * For a n x n square, could result in formula: (2n)! / (n! x n!)
 * @param {Number} n
 * @param {Number} m
 * @param {Number?} modulo
 * @returns {Number}
 */
exports.latticePaths = (n, m, modulo = null) => {
  // get an array of numbers for 1 to n+m
  let numerator = [...Array(n + m + 1).keys()].slice(1);

  // get an array of numbers of 1 to n, and 1 to m
  let denominator = [...Array(n + 1).keys()].slice(1).concat([...Array(m + 1).keys()].slice(1));

  // cancel out any numbers that are in both numerator and denominator
  let i = denominator.length;
  while (i--) {
    let index = numerator.indexOf(denominator[i]);
    if (index >= 0) {
      numerator.splice(index, 1);
      denominator.splice(i, 1);
    }
  }

  // number of items in denominator will equal number in numerator so loop and multiply and divide
  let result = numerator.reduce((previous, current, index) => previous.times(current).dividedBy(denominator[index]), new BigNumber(1));
  result = modulo ? result.modulo(modulo) : result;
  return result.toNumber();
};
