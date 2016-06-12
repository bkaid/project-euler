'use strict';
const problem5 = require('./problem-0005');

console.time('Elapsed Time');
let n = 20;
let result = problem5.smallestMultiple(n);
console.log(`What is the smallest positive number that is evenly divisible by all of the numbers from 1 to ${n}?`);
console.log(`Result: ${result}`);
console.timeEnd('Elapsed Time');
