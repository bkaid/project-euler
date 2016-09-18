'use strict';
const problem14 = require('./problem-0014');

let input = 1000000;

module.exports = {
  description: `Which starting number, under ${input}, produces the Collatz longest chain?`,
  result: () => problem14.longestCollatzChain(input)
};
