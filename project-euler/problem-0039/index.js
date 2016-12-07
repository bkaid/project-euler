'use strict';
const problem39 = require('./problem-0039');

const max = 1000;

module.exports = {
  description: `If p is the perimeter of a right angle triangle with integral length sides, for which value of p ≤ ${max}, is the number of solutions maximised?`,
  result: () => problem39.mostFrequentIntegerRightTrianglePerimeter(max)
};
