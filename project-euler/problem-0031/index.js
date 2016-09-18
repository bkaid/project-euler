'use strict';
const problem31 = require('./problem-0031');

let coins = [1, 2, 5, 10, 20, 50, 100, 200];
let input = 200;

module.exports = {
  description: 'How many different ways can £2 be made using any number of coins?',
  result: () => problem31.coinChangePermutations(coins, input)
};
