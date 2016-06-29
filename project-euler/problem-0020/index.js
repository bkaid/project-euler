'use strict';
const problem20 = require('./problem-0020');

console.time('Elapsed Time');

let input = 100;
let result = problem20.factorialDigitSum(input);
console.log(`Find the sum of the digits in the number ${input}!`);
console.log(`${result}`);
console.timeEnd('Elapsed Time');