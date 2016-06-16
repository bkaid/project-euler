'use strict';
const problem9 = require('./problem-0009');

console.time('Elapsed Time');
let n = 1000;
let result = problem9.maxPythagoreanTripletProduct(n);
console.log(`There exists exactly one Pythagorean triplet for which a + b + c = ${n}. Find the product abc.`);
console.log(`Result: ${result}`);
console.timeEnd('Elapsed Time');
