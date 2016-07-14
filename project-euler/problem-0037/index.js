'use strict';
const problem37 = require('./problem-0037');

console.time('Elapsed Time');

let result = problem37.truncatablePrimeSum();
console.log('Find the sum of the only eleven primes that are both truncatable from left to right and right to left.');
console.log(`${result}`);
console.timeEnd('Elapsed Time');