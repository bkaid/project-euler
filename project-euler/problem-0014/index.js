'use strict';
const problem14 = require('./problem-0014');

console.time('Elapsed Time');
let input = 1000000;
let result = problem14.longestCollatzChain(input);
console.log(`Which starting number, under ${input}, produces the Collatz longest chain?`);
console.log(`${result}`);
console.timeEnd('Elapsed Time');
