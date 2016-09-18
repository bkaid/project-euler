'use strict';
const BigNumber = require('bignumber.js');
const problem2 = require('./problem-0002');

let max = new BigNumber('4000000');
let result = problem2.sumEvenFibonacciTerms(max);
console.log('By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.');
console.log(`Result: ${result}`);
