'use strict';
const problem3 = require('./problem-0003');

let input = 600851475143;

module.exports = {
  description: `What is the largest prime factor of the number ${input}?`,
  result: () => problem3.largestPrimeFactor(input)
};
