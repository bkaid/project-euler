'use strict';
const problem30 = require('./problem-0030');

console.time('Elapsed Time');

let input = 5;
let result = problem30.digitNthPowerSum(input);

console.log(`Find the sum of all the numbers that can be written as the sum of ${input}th powers of their digits.`);
console.log(`${result}`);
console.timeEnd('Elapsed Time');