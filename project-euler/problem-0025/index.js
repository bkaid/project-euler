'use strict';
const problem25 = require('./problem-0025');

console.time('Elapsed Time');

let input = 1000;
let result = problem25.nDigitFibonacciIndex(input);
console.log(`What is the index of the first term in the Fibonacci sequence to contain ${input} digits?`);
console.log(`${result}`);
console.timeEnd('Elapsed Time');