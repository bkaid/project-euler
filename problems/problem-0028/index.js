'use strict';
const problem28 = require('./problem-0028');

let input = 1001;

module.exports = {
  description: `What is the sum of the numbers on the diagonals in a ${input} by ${input} spiral formed in the same way?`,
  result: () => problem28.spiralDiagonalSum(input)
};
