'use strict';
const pandigital = require('../../common/math/pandigital');
require('../../common/math/digits');

/**
 * Find all products whose multiplicand/multiplier/product identity can be written as a 1 through N pandigital
 * @param {Number} n
 * @returns {Number[]}
 */
exports.pandigitalProducts = n => {
  let pandigitalProducts = [];
  let product = 0;
  let combined = 0;
  let combinedMin = Math.pow(10, n - 1);
  let combinedMax = Math.pow(10, n);

  // multiplicand can only be 1 or 2 digits
  for (let multiplicand = 1; multiplicand <= 99; multiplicand++) {
    // multiplier start and end can be tightened if needed
    for (let multiplier = 1; multiplier <= 9999; multiplier++) {
      product = multiplicand * multiplier;
      combined = multiplicand.concat(multiplier).concat(product);
      if (combined > combinedMin &&
          combined < combinedMax &&
          pandigital.isPandigital(combined) &&
          !pandigitalProducts.includes(product)) {
        pandigitalProducts.push(product);
      }
    }
  }

  return pandigitalProducts;
};
