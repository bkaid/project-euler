'use strict';

let cachedMaxPythagoreanTripletProducts = {};

/**
 * Returns the largest product of a Pythagorean for which a + b + c = n
 * @param {Number} n
 * @returns {Number}
 */
exports.maxPythagoreanTripletProduct = n => {
  if (!cachedMaxPythagoreanTripletProducts.hasOwnProperty(n)) {
    let max = 0;
    for (let a = 1; a < n / 3; a++) {
      for (let b = a; b < n / 2; b++) {
        // given a + b + c = n,
        let c = n - a - b;
        // see if a² + b² = c²
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) && a * b * c > max) {
          max = a * b * c;
        }
      }
    }
    cachedMaxPythagoreanTripletProducts[n] = max;
  }

  return cachedMaxPythagoreanTripletProducts[n];
};
