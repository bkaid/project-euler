'use strict';
const problem4 = require('./problem-0004');

console.time('Elapsed Time');
let digits = 3;
let result = problem4.largestPalindromeProduct(digits);
console.log(`Find the largest palindrome made from the product of two ${digits}-digit numbers.`);
console.log(`Result: ${result}`);
console.timeEnd('Elapsed Time');