'use strict';
const problem48 = require('./problem-0048');

console.time('Elapsed Time');

let input = 1000;
let result = problem48.selfPowers(input);
let last10Digits = result.toString().slice(-10);
console.log(`Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + ${input}^${input}.`);
console.log(`${last10Digits}`);
console.timeEnd('Elapsed Time');