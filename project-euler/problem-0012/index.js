'use strict';
const problem12 = require('./problem-0012');

console.time('Elapsed Time');
let n = 500;
let result = problem12.firstTriangularNumberWithDivisorCount(n);
console.log(`What is the value of the first triangle number to have over ${n} divisors?`);
console.log(`Result: ${result}`);
console.timeEnd('Elapsed Time');
