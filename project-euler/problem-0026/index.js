'use strict';
const problem26 = require('./problem-0026');

let input = 1000;
let result = problem26.largestReciprocalCycle(input);

console.log(`Find the value of d < ${input} for which 1/d contains the longest recurring cycle in its decimal fraction part.`);
console.log(`${result}`);
