'use strict';
const BigNumber = require('bignumber.js');

let input = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005].map(value => new BigNumber(value));
let result = input.reduce((previous, current) => previous.plus(current));

console.log('You are given an array of integers of size N. You need to print the sum of the elements in the array, keeping in mind that some of those integers may be quite large.');
console.log(`Input: ${input}`);
console.log(`Result: ${result}`);
