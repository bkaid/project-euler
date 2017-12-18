'use strict';
const problem36 = require('./problem-0036');

let max = 1000000;
let base = 2;

module.exports = {
  description: `Find the sum of all numbers, less than ${max}, which are palindromic in base 10 and base ${base}.`,
  result: () =>
    problem36.doubleBasePalindromes(max, base)
      .reduce((p, c) => p + c)
};
