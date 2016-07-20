'use strict';
const problem28 = require('./problem-0028');

console.time('Elapsed Time');

let input = 1001;
let result = problem28.spiralDiagonalSum(input);

console.log(`What is the sum of the numbers on the diagonals in a ${input} by ${input} spiral formed in the same way?`);
console.log(`${result}`);
console.timeEnd('Elapsed Time');