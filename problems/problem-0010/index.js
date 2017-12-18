'use strict';
const problem10 = require('./problem-0010');

let n = 2000000;

module.exports = {
  description: `Find the sum of all the primes below ${n}.`,
  result: () => problem10.sumOfPrimes(n)
};
