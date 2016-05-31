'use strict';
const problem1 = require('./problem-0001');

console.time('Elapsed Time');
let result = problem1.sumMultiplesOf3And5(1000);
console.log('Find the sum of all the multiples of 3 or 5 below 1000.');
console.log(`Result: ${result}`);
console.timeEnd('Elapsed Time');