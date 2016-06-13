'use strict';
const problem6 = require('./problem-0006');

console.time('Elapsed Time');
let n = 10000;
let result = problem6.sumSquareDifference(n);
console.log(`Find the difference between the sum of the squares of the first ${n} natural numbers and the square of the sum.`);
console.log(`Result: ${result}`);
console.timeEnd('Elapsed Time');
