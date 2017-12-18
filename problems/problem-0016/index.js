'use strict';
const problem16 = require('./problem-0016');

let base = 2;
let power = 1000;

module.exports = {
  description: `What is the sum of the digits of the number ${base}^${power}?`,
  result: () => problem16.powerDigitSum(base, power)
};
