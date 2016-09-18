'use strict';
const problem30 = require('./problem-0030');

let input = 5;

module.exports = {
  description: `Find the sum of all the numbers that can be written as the sum of ${input}th powers of their digits.`,
  result: () => problem30.digitNthPowerSum(input)
};
