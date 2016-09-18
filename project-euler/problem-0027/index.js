'use strict';
const problem27 = require('./problem-0027');

let max = 1000;

module.exports = {
  description: 'Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.',
  result: () => {
    let coefficients = problem27.quadraticPrimes(max);
    return coefficients.a * coefficients.b;
  }
};
