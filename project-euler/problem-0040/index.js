'use strict';
const problem40 = require('./problem-0040');

const indicies = [1, 10, 100, 1000, 10000, 100000, 1000000];

module.exports = {
  description: `An irrational decimal fraction is created by concatenating the positive integers: 0.123456789101112131415161718192021... Find the value of the following expression: d${indicies.join(' x d')}`,
  result: () => indicies.reduce((previous, current) => previous * problem40.champernowneDigit(current), 1)
};
