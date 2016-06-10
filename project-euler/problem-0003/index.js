'use strict';
const problem3 = require('./problem-0003');

console.time('Elapsed Time');
let input = 600851475143;
let result = problem3.largestPrimeFactor(input);
console.log(`What is the largest prime factor of the number ${input}?`);
console.log(`Result: ${result}`);
console.timeEnd('Elapsed Time');