'use strict';
const problem21 = require('./problem-0021');

let input = 10000;

module.exports = {
  description: `Evaluate the sum of all the amicable numbers under ${input}.`,
  result: () => problem21.amicableNumberSum(input)
};
