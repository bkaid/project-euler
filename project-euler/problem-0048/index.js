'use strict';
const problem48 = require('./problem-0048');

let n = 1000;
let digits = 10;

module.exports = {
  description: `Find the last ${digits} digits of the series, 1^1 + 2^2 + 3^3 + ... + ${n}^${n}.`,
  result: () => problem48.selfPowers(n, digits)
};
