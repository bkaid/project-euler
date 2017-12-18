'use strict';
const array = require('../../common/arrays');
require('../../common/math/digits');

/**
 * Finds the sum of all 0 to 9 pandigital numbers with given property.
 * @returns {Number[]}
 */
exports.substringDivisibility = function () {
  let results = [];
  let pandigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var permutation of array.permute(pandigits)) {
    if (permutation[1].concat(permutation[2]).concat(permutation[3]) % 2 === 0 &&
        permutation[2].concat(permutation[3]).concat(permutation[4]) % 3 === 0 &&
        permutation[3].concat(permutation[4]).concat(permutation[5]) % 5 === 0 &&
        permutation[4].concat(permutation[5]).concat(permutation[6]) % 7 === 0 &&
        permutation[5].concat(permutation[6]).concat(permutation[7]) % 11 === 0 &&
        permutation[6].concat(permutation[7]).concat(permutation[8]) % 13 === 0 &&
        permutation[7].concat(permutation[8]).concat(permutation[9]) % 17 === 0
    ) {
      results.push(permutation.toNumber());
    }
  }
  return results;
};
