'use strict';
const problem23 = require('./problem-0023');

console.time('Elapsed Time');

let result = problem23.nonAbundantSums();
console.log('Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.');
console.log(`${result}`);
console.timeEnd('Elapsed Time');