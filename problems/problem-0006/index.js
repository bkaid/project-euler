'use strict';
const problem6 = require('./problem-0006');

let n = 10000;

module.exports = {
  description: `Find the difference between the sum of the squares of the first ${n} natural numbers and the square of the sum.`,
  result: () => problem6.sumSquareDifference(n)
};
