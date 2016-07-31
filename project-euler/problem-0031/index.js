'use strict';
const problem31 = require('./problem-0031');

console.time('Elapsed Time');

let coins = [1, 2, 5, 10, 20, 50, 100, 200];
let input = 200;
let result = problem31.coinChangePermutations(coins, input);

console.log('How many different ways can £2 be made using any number of coins?');
console.log(`${result}`);
console.timeEnd('Elapsed Time');