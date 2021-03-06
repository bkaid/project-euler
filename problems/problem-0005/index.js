'use strict';
const problem5 = require('./problem-0005');

let n = 20;

module.exports = {
  description: `What is the smallest positive number that is evenly divisible by all of the numbers from 1 to ${n}?`,
  result: () => problem5.smallestMultiple(n)
};
