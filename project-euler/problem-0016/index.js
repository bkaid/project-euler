'use strict';
const problem16 = require('./problem-0016');

let base = 2;
let power = 1000;
let result = problem16.powerDigitSum(base, power);
console.log(`What is the sum of the digits of the number ${base}^${power}?`);
console.log(`${result}`);
