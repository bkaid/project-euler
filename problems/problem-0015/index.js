'use strict';
const problem15 = require('./problem-0015');

let n = 20;
let k = 20;

module.exports = {
  description: `How many routes are there through a ${n}×${k} grid?`,
  result: () => problem15.latticePaths(n, k)
};
