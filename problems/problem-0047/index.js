'use strict';
const problem47 = require('./problem-0047');

let n = 4;

module.exports = {
  description: `Find the first ${n} consecutive integers to have ${n} distinct prime factors. What is the first of these numbers?`,
  result: () => problem47.consecutiveDistinctPrimeFactors(Number.MAX_SAFE_INTEGER, 1, n, n)[0]
};
