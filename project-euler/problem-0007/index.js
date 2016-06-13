'use strict';
const problem7 = require('./problem-0007');

console.time('Elapsed Time');
let n = 10001;
let result = problem7.nthPrime(n);
console.log(`What is the ${n} prime number?`);
console.log(`Result: ${result}`);
console.timeEnd('Elapsed Time');
