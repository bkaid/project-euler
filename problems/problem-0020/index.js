'use strict';
const problem20 = require('./problem-0020');

let input = 100;

module.exports = {
  description: `Find the sum of the digits in the number ${input}!`,
  result: () => problem20.factorialDigitSum(input)
};
