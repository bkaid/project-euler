'use strict';
const factorial = require('../../common/math/factorial').factorial;

/**
 * Calculates the count of the number of possible lattice paths through a grid
 * Uses the factorial formula for the n + m take n binomial coefficient: (n + m)! / (n! x m!)
 * For a n x n square, could result in formula: (2n)! / (n! x n!)
 * @param {Number} n
 * @param {Number} m
 * @returns {Number}
 */
exports.latticePaths = (n, m) => {
  return factorial(n + m) / factorial(n) / factorial(m);
};
