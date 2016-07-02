'use strict';
const problem21 = require('./problem-0021');

console.time('Elapsed Time');

let input = 10000;
let result = problem21.amicableNumberSum(input);
console.log(`Evaluate the sum of all the amicable numbers under ${input}.`);
console.log(`${result}`);
console.timeEnd('Elapsed Time');