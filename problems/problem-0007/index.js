'use strict';
const problem7 = require('./problem-0007');

let n = 10001;

module.exports = {
  description: `What is the ${n} prime number?`,
  result: () => problem7.nthPrime(n)
};
