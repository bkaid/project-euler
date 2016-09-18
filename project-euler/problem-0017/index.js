'use strict';
const problem17 = require('./problem-0017');

let n = 1000;
let numbers = Array.from(Array(n)).map((value, index) => ++index);

module.exports = {
  description: 'If all the numbers from 1 to ${n} inclusive were written out in words, how many letters would be used?',
  result: () =>
    numbers.reduce((p, c) => p + problem17.toWords(c).replace(/\W+/g, '').length, 0)
};
