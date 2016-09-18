'use strict';
const problem24 = require('./problem-0024');

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = problem24.nthLexicographicPermutation(digits, 1000000);
console.log('What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?');
console.log(`${result}`);
