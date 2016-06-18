'use strict';
const problem10 = require('./problem-0010');

console.time('Elapsed Time');
let n = 2000000;
let result = problem10.sumOfPrimes(n);
console.log(`Find the sum of all the primes below ${n}.`);
console.log(`Result: ${result}`);
console.timeEnd('Elapsed Time');
