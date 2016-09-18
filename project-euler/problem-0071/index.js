'use strict';
const problem71 = require('./problem-0071');

let input = 1000000;

module.exports = {
  description: `By listing the set of reduced proper fractions for d ≤ ${input} in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.`,
  result: () => problem71.maxReducedProperFraction(input, 3, 7).numerator
};
