'use strict';
const pandigital = require('../../common/math/pandigital');
require('../../common/math/digits');

/**
 * Finds largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer
 * with (1,2,...n) where n > 1
 * @param {Number} digits
 * @param {Number} max
 * @returns {{multiple: number, pandigital: number}[]}
 */
exports.pandigitalMultiples = (digits, max) => {
  digits = digits || 9;
  max = max || Math.pow(10, 5);

  let minPandigital = Math.pow(10, digits - 1);
  let maxPandigital = Math.pow(10, digits) - 1;
  let results = [];

  for (let i = 2; i <= max; i++) {
    let j = 1;
    let product = i;
    let next = product;
    do {
      product = next;
      next = product.concat((i * ++j));
    }
    while (next < maxPandigital);

    if (product > minPandigital && pandigital.isPandigital(product)) {
      results.push({ multiple: i, pandigital: product });
    }
  }

  return results;
};
