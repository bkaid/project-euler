'use strict';
const problem50 = require('./problem-0050');

const max = 1000000;

module.exports = {
  description: `Which prime, below ${max}, can be written as the sum of the most consecutive primes?`,
  result: () => problem50.consecutivePrimeSum(max)
};
