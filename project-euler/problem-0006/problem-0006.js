'use strict';
const BigNumber = require('bignumber.js');

/**
 * Calculates the difference between the sum of the squares of the first N
 * natural numbers and the square of the sum of the first N natural numbers.
 * Sum of squares formula from: 
 * http://www.trans4mind.com/personal_development/mathematics/series/sumNaturalSquares.htm
 * @param {Number} n First n natural numbers to sum
 * @returns {BigNumber}
 */
exports.sumSquareDifference = (n) => {
  let sumOfSquares = new BigNumber(n).toPower(3).dividedBy(3)
                      .plus(new BigNumber(n).toPower(2).dividedBy(2))
                      .plus(new BigNumber(n).dividedBy(6));
  let sum = Array(n + 1).fill().reduce((sum, _, i) => sum + i, 0);
  let squareOfSum = new BigNumber(sum).toPower(2);
  return squareOfSum.minus(sumOfSquares);
};
