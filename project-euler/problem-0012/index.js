'use strict';
const problem12 = require('./problem-0012');

let n = 500;

module.exports = {
  description: `What is the value of the first triangle number to have over ${n} divisors?`,
  result: () => problem12.firstTriangularNumberWithDivisorCount(n)
};
