'use strict';
const problem27 = require('./problem-0027');

let max = 1000;
let coefficients = problem27.quadraticPrimes(max);
let result = coefficients.a * coefficients.b;

console.log('Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.');
console.log(`${result}`);
